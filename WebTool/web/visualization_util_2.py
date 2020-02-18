from django.db import connection
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "WebTool.settings")
category_list = ["技术类", "语言类", "艺术类", "体育类", "数学类", "综合实践类", "科学类", "社会类"]  # 防止有的类别课程没有数据


def get_cd_p1(sp=-1):
    """
    获取兴趣课程第一部分数据
    :return:
    """
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    cursor = connection.cursor()
    cursor.execute(
        "select course.CourseType, count(*) from skills_coursesetting as course, nj_xd "
        "where course.Duration > 4 and nj_xd.NJ = course.Grade and XD in ({})"
        "group by course.CourseType order by course.CourseType;".format(','.join(sp)))
    result = cursor.fetchall()
    ctype_ratio = list(zip(*result))[1]

    data = {'ratio': ctype_ratio}
    return data


def get_cd_p2(sp=-1):
    """
    获取兴趣课程第二不部分数据
    :return:
    """
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    cursor = connection.cursor()
    cursor.execute(
        "select cat_code.NAME, nj_xd.XD, CourseType, count(*) from skills_coursesetting as course, skills_category_code as cat_code," \
        "nj_xd where course.CourseCategory = cat_code.ID and nj_xd.NJ = course.Grade and nj_xd.XD in ({})" \
        "group by course.CourseCategory, nj_xd.XD, CourseType;".format(','.join(sp)))
    result = cursor.fetchall()
    global category_list
    all_dict = dict(zip(category_list, [[0, 0] for i in range(8)]))
    sp_acount_dict = {}  # 包括走班和整班课程的数目
    sp_scount_dict = {}  # 仅包括走班的数目, 走班制对应的ID是1
    for category, sp, ctype, count in result:
        all_dict[category][ctype - 1] += count
        if not sp in sp_acount_dict:
            sp_acount_dict[sp] = dict(zip(category_list, [0] * 8))
            sp_scount_dict[sp] = dict(zip(category_list, [0] * 8))
        sp_acount_dict[sp][category] += count
        if ctype == 1:  # 1对应的是走班制
            sp_scount_dict[sp][category] += count
    sp_ratio_dict = {sp: {category: int(sp_scount_dict[sp][category] / sp_acount_dict[sp][category] * 100)
                          for category in sp_scount_dict[sp]} for sp in sp_scount_dict}
    all_tuple = list(zip(*all_dict.values()))
    sp_dict = {"count": {sp: list(sp_acount_dict[sp].values()) for sp in sp_acount_dict},
               "scount": {sp: list(sp_scount_dict[sp].values()) for sp in sp_scount_dict}}
    data = {"all": all_tuple, "sp_dict": sp_dict, "category": category_list}
    return data


def get_cd_p3(sp=-1):
    """
    获取兴趣课程第三部分数据, 仅计算覆盖率
    :param sp:
    :return:
    """
    # ------------------------------------------- Step 1. 查询开设某类课程(对应具体学段开设的)的所有学校数目 -------------------------------------------
    query_sp = ["1", "2", "10"] if sp == -1 else [str(sp), "10"]   # 用作sql查询语句的学段值
    global category_list
    all_dict = dict(zip(category_list, [[] for i in range(8)]))
    cursor = connection.cursor()
    cursor.execute("select category.NAME, nj_xd.XD, cs.SchoolID from skills_coursesetting as cs, school_code as school, skills_category_code "\
                   "as category, nj_xd where cs.SchoolID = school.ID and cs.CourseCategory = category.ID and nj_xd.NJ = cs.Grade and school.StudyPeriod "\
                   "in ({}) and nj_xd.XD in ({}) and cs.CourseType = 1 "
                   "group by school.ID, cs.CourseCategory, nj_xd.XD;".format(','.join(query_sp), ','.join(query_sp)))
    result = cursor.fetchall()
    actual_sp = [1, 2] if sp == -1 else [sp]                      # 用作最后数据可视化的学段值
    sp_dict = dict(zip(actual_sp, [dict(zip(category_list, [[] for i in range(8)])) for i in range(len(actual_sp))]))
    for category, sp_tmp, school_id in result:           # sp_tmp对应的是这门课的对应学段, 不考虑学校
        all_dict[category].append(school_id)             # 只要是开了这门课的学校, 就算进去
        sp_dict[sp_tmp][category].append(school_id)
    all_dict = {category: set(all_dict[category]).__len__() for category in all_dict}
    sp_dict = {sp: {category: set(sp_dict[sp][category]).__len__() for category in sp_dict[sp]} for sp in sp_dict}
    # -------------------------------------------           Step 2. 查询对应学段的所有学校数目            -------------------------------------------
    cursor.execute("select school_code.StudyPeriod, count(*) from school_code where school_code.StudyPeriod in ({}) "\
                   "group by school_code.StudyPeriod".format(','.join(query_sp)))
    result = cursor.fetchall()
    all_school, school_dict = 0, {sp_tmp: 0 for sp_tmp in actual_sp}
    for sp_tmp, count in result:
        all_school += count
        if sp_tmp == "10":               # 10表明这个学校三个学段全都有, 所以都加一遍
            school_dict = {key: school_dict[key] + count for key in actual_sp}
        else:
            school_dict[sp_tmp] += count
    # -------------------------------------------                   Step 3. 整合数据                   -------------------------------------------
    all_list = [int(value / all_school * 100) for value in all_dict.values()]
    sp_dict = {sp: [int(value / school_dict[sp] * 100) for value in sp_dict[sp].values()] for sp in sp_dict}
    data = {'all': all_list, 'sp_dict': sp_dict, 'category': category_list}
    return data


def get_cd_p4(sp=-1):
    """
    获取兴趣课程第四部分数据, 仅计算参与率
    :param sp:
    :return:
    """
    query_sp = ["1", "2"] if sp == -1 else [str(sp)]   # 用作sql查询语句的学段值
    global category_list
    cursor = connection.cursor()
    # -------------------------------------------      Step 1. 查询开设某类课程的所有选课人数(要分男女鸭)     -------------------------------------------
    cursor.execute("select code.NAME, xj.XDDM, info.XBDM, count(*) from skills_course as course, student_info as info, student_xj as xj, skills_category_code"\
                   " as code where course.STUDENTID = xj.STUDENTID and xj.STUDENTID = info.ID and xj.XDDM in ({}) and code.ID = course.KCLXDM "\
                   "and course.KCZD = 1 group by code.NAME, xj.XDDM, info.XBDM;".format(','.join(query_sp)))
    result = cursor.fetchall()
    all_dict = dict(zip(category_list, [0] * 8))
    sp_dict = {sp_tmp: {"1": dict(zip(category_list, [0] * 8)), "2": dict(zip(category_list, [0] * 8)), "-1": dict(zip(category_list, [0] * 8))}
               for sp_tmp in query_sp}
    for category, sp_tmp, gender, count in result:
        all_dict[category] += count
        sp_dict[sp_tmp][gender][category] += count
        sp_dict[sp_tmp]["-1"][category] += count

    # -------------------------------------------           Step 2. 查询对应学段的所有男女生数目            -------------------------------------------
    cursor.execute("select xj.XDDM, info.XBDM, count(*) from student_info as info, student_xj as xj where info.ID = xj.STUDENTID "\
                   "and xj.XDDM in ({}) group by xj.XDDM, info.XBDM".format(','.join(query_sp)))
    result = cursor.fetchall()
    all_stu, sp_all_dict = 0, {sp_tmp: {"1": 0, "2": 0, "-1": 0} for sp_tmp in query_sp}    # "1"表示男生, "2"表示女生, "-1"表示总体
    for sp_tmp, gender, count in result:
        all_stu += count
        sp_all_dict[sp_tmp][gender] += count
        sp_all_dict[sp_tmp]["-1"] += count
    all_list = [int(value / all_stu * 100) for value in all_dict.values()]
    sp_dict = {sp_tmp: {gender: [int(value / sp_all_dict[sp_tmp][gender] * 100) for value in sp_dict[sp_tmp][gender].values()]
                        for gender in sp_dict[sp_tmp]} for sp_tmp in sp_dict}

    data = {'all': all_list, 'sp_dict': sp_dict, 'category': category_list}
    return data


def get_comp_p1(sp=-1):
    """
    获得荣誉获奖(竞赛)第一部分数据, PS: 此部分的数据不管是否获奖都算上
    :return:
        data: dict类型
            all: tuple类型
    """
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    global category_list
    cursor = connection.cursor()
    cursor.execute("select code.NAME,xj.XDDM, count(*) from skills_competition as comp, skills_category_code as code," \
                   "student_xj as xj where comp.JSLx = code.ID and xj.STUDENTID = comp.STUDENTID and xj.XDDM in ({})" \
                   "group by code.NAME, xj.XDDM;".format(','.join(sp)))
    result = cursor.fetchall()
    all_dict = dict(zip(category_list, [0] * 8))
    sp_dict, all_sp_dict = {}, {}
    for category, sp, count in result:
        all_dict[category] += count
        if sp not in sp_dict:
            sp_dict[sp] = dict(zip(category_list, [0] * 8))
            all_sp_dict[sp] = 0
        all_sp_dict[sp] += count
        sp_dict[sp][category] += count
    all_tuple = (list(all_dict.keys()), list(all_dict.values()))

    data = {'all': all_tuple, 'sp_dict': sp_dict, 'all_sp_dict': all_sp_dict}
    return data


def get_comp_p2(sp=-1):
    """
    获得荣誉获奖(竞赛)第二部分数据, PS: 此部分的数据仅计算获奖的数据
    :return:
        data: dict类型
            all: tuple类型
    """
    global category_list
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    cursor = connection.cursor()
    cursor.execute("select code.NAME,xj.XDDM, comp.HJLB, count(*) from skills_competition as comp, skills_category_code as code, student_xj as xj "\
                   "where comp.JSLx = code.ID and xj.STUDENTID = comp.STUDENTID and comp.SFHJ = 1 and xj.XDDM in ({})"
                   "group by code.NAME, xj.XDDM, comp.HJLB;".format(','.join(sp)))
    result = cursor.fetchall()
    all_dict = {1: dict(zip(category_list, [0] * 8)), 2: dict(zip(category_list, [0] * 8))}
    sp_type_dict = {}
    all_st_dict = {}
    for category, sp, award_type, count in result:
        all_dict[award_type][category] += count
        if sp not in sp_type_dict:
            sp_type_dict[sp] = {1: dict(zip(category_list, [0] * 8)), 2: dict(zip(category_list, [0] * 8))}
            all_st_dict[sp] = {1: 0, 2: 0}
        sp_type_dict[sp][award_type][category] += count
        all_st_dict[sp][award_type] += count
    all_tuple = (list(all_dict[1].keys()), list(all_dict[1].values()), list(all_dict[2].keys()), list(all_dict[2].values()))

    data = {'all': all_tuple, 'sp_type_dict': sp_type_dict, 'all_st_dict': all_st_dict}
    return data


def get_comp_p3(sp=-1):
    """
    获得荣誉获奖(竞赛)第三部分数据, PS: 此部分的数据不管是否获奖都算上
    :return:
        data: dict类型
            all: tuple类型
    """
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    cursor = connection.cursor()
    cursor.execute("select comp.HJJB,xj.XDDM, count(*) from skills_competition as comp, student_xj as xj "
                   "where xj.STUDENTID = comp.STUDENTID and xj.XDDM in ({})"
                   "group by comp.HJJB, xj.XDDM;".format(','.join(sp)))
    result = cursor.fetchall()
    all_dict = {1: 0, 2: 0, 3: 0}
    sp_dict = {}
    for level, sp, count in result:
        all_dict[level] += count
        if sp not in sp_dict:
            sp_dict[sp] = {1: 0, 2: 0, 3: 0}
        sp_dict[sp][level] += count

    data = {"all": all_dict, 'sp_dict': sp_dict}
    return data


def get_comp_p4(sp=-1):
    """
    获得荣誉获奖(竞赛)第四部分数据, PS: 此部分的数据只计算获奖的
    :return:
    """
    sp = ["1", "2"] if sp == -1 else [str(sp)]
    cursor = connection.cursor()
    cursor.execute("select comp.HJJB, comp.HJLB, xj.XDDM, count(*) from skills_competition as comp, student_xj as xj "
                   "where xj.STUDENTID = comp.STUDENTID and comp.SFHJ = 1 and xj.XDDM in ({})"\
                   "group by comp.HJJB, comp.HJLB, xj.XDDM;".format(','.join(sp)))
    result = cursor.fetchall()
    all_dict = {1: {1: 0, 2: 0, 3: 0}, 2: {1: 0, 2: 0, 3: 0}}
    sp_dict = {}
    for award_level, award_type, sp, count in result:
        all_dict[award_type][award_level] += count
        if sp not in sp_dict:
            sp_dict[sp] = {1: {1: 0, 2: 0, 3: 0}, 2: {1: 0, 2: 0, 3: 0}}
        sp_dict[sp][award_type][award_level] += count
    data = {"all": all_dict, "sp_dict": sp_dict}
    return data


if __name__ == '__main__':
    """测试代码"""
    # get_cd_p1()
    # get_cd_p2(2)
    # get_comp_p1(2)
    # get_comp_p2(2)

    # get_comp_p2(1)
    # get_comp_p4(-1)
    # get_cd_p2()
    # get_cd_p3(2)
    get_cd_p4(2)
