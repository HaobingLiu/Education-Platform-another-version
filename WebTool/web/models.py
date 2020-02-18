# from django.db import models
# import datetime
#
# # Create your models here.
#
# class Basic(models.Model):
#     StuID = models.CharField(unique=True, max_length=20)
#     School = models.TextField()
#     Major = models.TextField()
#     classNo = models.CharField(max_length=20, default='')
#     BirthYear = models.CharField(max_length=5)
#     Country = models.TextField()
#     National = models.TextField()
#     Entrance = models.CharField(max_length=20)
#     Province = models.TextField()
#     Gender = models.TextField()
#     State = models.TextField()
#     Type = models.TextField()
#     Year = models.TextField(max_length=5)
#     Grade = models.CharField(max_length=10, default="")
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return{
#             'StuID': self.StuID,
#             'School': self.School,
#             'Major': self.Major,
#             'BirthYear': self.BirthYear,
#             'Country': self.Country,
#             'National': self.National,
#             'Entrance': self.Entrance,
#             'Province': self.Province,
#             'Gender': self.Gender,
#             'State': self.State,
#             'Type': self.Type,
#             'Year': self.Year,
#             'classNo': self.classNo
#         }
#
# class Book(models.Model):
#     """docstring for Book"""
#     StuID = models.CharField(max_length=20)
#     BookID = models.CharField(max_length=20)
#     Date = models.CharField(max_length=20)
#     OperType = models.CharField(max_length=5)
#     StuType = models.CharField(max_length=5)
#     Department = models.CharField(max_length=10)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return{
#             'StuID': self.StuID,
#             'BookID': self.BookID,
#             'Date': self.Date,
#             'OperType': self.OperType,
#             'StuType': self.StuType,
#             'Department': self.Department
#         }
#
# class Card(models.Model):
#     StuID = models.CharField(max_length=20)
#     DateTime = models.CharField(max_length=20)
#     Cost = models.CharField(max_length=10)
#     POS = models.CharField(max_length=5)
#     Meal = models.CharField(max_length=2)
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
# class Aid(models.Model):
#     """docstring for Aid"""
#     StuID = models.CharField(max_length=20)
#     PTJob = models.CharField(max_length=2)
#     Loan = models.CharField(max_length=2)
#     Aid = models.CharField(max_length=2)
#     Scholorship = models.CharField(max_length=2)
#     Year = models.CharField(max_length=5)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "PTJob": self.PTJob,
#             "Loan" : self.Loan,
#             "Aid" : self.Aid,
#             "Scholorship" : self.Scholorship,
#             "Year" : self.Year
#         }
#
#
# class Score(models.Model):
#     """docstring for Score"""
#     StuID = models.CharField(max_length=20)
#     School = models.TextField()
#     Semester = models.CharField(max_length=10)
#     CourseNum = models.CharField(max_length=2)
#     Credits = models.CharField(max_length=2)
#     AveScore = models.CharField(max_length=10)
#     Lowest = models.CharField(max_length=10)
#     Highest = models.CharField(max_length=10)
#     Up90 = models.CharField(max_length=2)
#     Up80 = models.CharField(max_length=2)
#     Up70 = models.CharField(max_length=2)
#     Up60 = models.CharField(max_length=2)
#     Low60 = models.CharField(max_length=2)
#     Num0 = models.CharField(max_length=2)
#     Grade = models.CharField(max_length=10, default="")
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "School": self.School,
#             "Semester" : self.Semester,
#             "CourseNum" : self.CourseNum,
#             "Credits" : self.Credits,
#             "AveScore" : self.AveScore,
#             "Up90" : self.Up90,
#             "Up80": self.Up80,
#             "Up70": self.Up70,
#             "Up60": self.Up60,
#             "Low60": str(int(self.Low60.__str__())+int(self.Num0.__str__())),
#             "Grade": self.Grade
#         }
#
# class Moral(models.Model):
#     StuID = models.CharField(max_length=20)
#     Level1 = models.CharField(max_length=2)
#     Level2 = models.CharField(max_length=5)
#     ItemID = models.CharField(max_length=8)
#     ItemName = models.TextField()
#     Semester = models.TextField()
#     Prize = models.TextField()
#     State = models.CharField(max_length=2)
#     PrizeType = models.TextField()
#     ActivityLevel = models.CharField(max_length=2)
#     Note = models.TextField()
#     School = models.TextField(default="")
#     Grade = models.CharField(max_length=10, default="")
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "ItemName": self.ItemName,
#             "Semester": self.Semester,
#             "Prize": self.Prize,
#             "PrizeType": self.PrizeType,
#             "School": self.School,
#             "Grade": self.Grade
#         }
#
# class Lib(models.Model):
#     StuID = models.CharField(max_length=20)
#     DateTime = models.DateTimeField()
#     #DateTime = models.DateTimeField()
#     Gate = models.CharField(max_length=2)
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "DateTime": self.DateTime.__str__()
#         }
#
# class HosTrans(models.Model):
#     StuID = models.CharField(max_length=20)
#     SchoolHos = models.TextField()
#     DateTime = models.DateTimeField()
#     Hospital = models.TextField()
#     Department = models.TextField()
#     SchDepart = models.TextField()
#
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "SchoolHos": self.SchoolHos,
#             "DateTime": self.DateTime.__str__(),
#             "Hospital": self.Hospital,
#             "Department": self.Department,
#             "SchDepart": self.SchDepart
#         }
#
# class HosReg(models.Model):
#     StuID = models.CharField(max_length=20)
#     SchoolHos = models.TextField()
#     CostType = models.TextField()
#     #DateTime = models.CharField(max_length=30)
#     DateTime = models.DateTimeField()
#     Department = models.TextField()
#     RegCost = models.CharField(max_length=5)
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "SchoolHos": self.SchoolHos,
#             "CostType": self.CostType,
#             "DateTime": self.DateTime.__str__(),
#             "Department": self.Department,
#             "RegCost": self.RegCost,
#         }
#
# class HosBX(models.Model):
#     StuID = models.CharField(max_length=20)
#     SchoolHos = models.TextField()
#     Cause = models.TextField()
#     #DateTime = models.CharField(max_length=30)
#     DateTime = models.DateTimeField()
#     BX = models.CharField(max_length=10)
#     OriginCost = models.CharField(max_length=10)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "SchoolHos": self.SchoolHos,
#             "Cause": self.Cause,
#             "DateTime": self.DateTime.__str__(),
#             "BX": self.BX,
#             "OriginCost": self.OriginCost,
#         }
#
# class Health(models.Model):
#     StuID = models.CharField(max_length=20)
#     Height = models.CharField(max_length=8)
#     Weight = models.CharField(max_length=5)
#     HWScore = models.CharField(max_length=3)
#     HWLevel = models.TextField()
#     LungVolume = models.CharField(max_length=5)
#     LungScore = models.CharField(max_length=3)
#     LungLevel = models.TextField()
#     Meter50 = models.CharField(max_length=5)
#     Meter50Score = models.CharField(max_length=3)
#     Meter50Level = models.TextField()
#     Crook = models.CharField(max_length=5)
#     CrookScore = models.CharField(max_length=3)
#     CrookLevel = models.TextField()
#     Jump = models.CharField(max_length=3)
#     JumpScore = models.CharField(max_length=3)
#     JumpLevel = models.TextField()
#     Strength = models.CharField(max_length=3)
#     StrengthScore = models.CharField(max_length=3)
#     StrengthLevel = models.TextField()
#     Meter8001000 = models.CharField(max_length=5)
#     Meter8001000Score = models.CharField(max_length=3)
#     Meter8001000Level = models.TextField()
#     TotalScore = models.CharField(max_length=3)
#     TotalLevel = models.TextField()
#     School = models.TextField()
#     Grade = models.CharField(max_length=10)
#     Semester = models.TextField()
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "Height": self.Height,
#             "Weight": self.Weight,
#             "HWScore": self.HWScore,
#             "HWLevel": self.HWLevel,
#             "LungVolume": self.LungVolume,
#             "LungScore": self.LungScore,
#             "LungLevel": self.LungLevel,
#             "Meter50": self.Meter50,
#             "Meter50Score": self.Meter50Score,
#             "Meter50Level": self.Meter50Level,
#             "Crook": self.Crook,
#             "CrookScore": self.CrookScore,
#             "CrookLevel": self.CrookLevel,
#             "Jump": self.Jump,
#             "JumpScore": self.JumpScore,
#             "JumpLevel": self.JumpLevel,
#             "Strength": self.Strength,
#             "StrengthScore": self.StrengthScore,
#             "StrengthLevel": self.StrengthLevel,
#             "Meter8001000": self.Meter8001000,
#             "Meter8001000Score": self.Meter8001000Score,
#             "Meter8001000Level": self.Meter8001000Level,
#             "TotalScore": self.TotalScore,
#             "TotalLevel": self.TotalLevel,
#             "School": self.School,
#             "Grade": self.Grade,
#             "Semester": self.Semester
#         }
#
# class Dorm(models.Model):
#     StuID = models.CharField(max_length=20)
#     DateTime = models.DateTimeField()
#     basic = models.ForeignKey(to="Basic", to_field="StuID", on_delete = models.CASCADE, null=True)
#
#     def __unicode__(self):
#         return self.StuID
#
# class Finance(models.Model):
#     StuID = models.CharField(max_length=20)
#     School = models.TextField()
#     FinanceType = models.TextField()
#
#     def __unicode__(self):
#         return self.StuID
#
#
# class InterveneSuggestion(models.Model):
#     """
#     干预意见Model,存储标签及其对应的干预意见
#     """
#     study_state = models.CharField(max_length=10)   # 学习情况标签
#     is_fail_exam = models.BooleanField()  # 是否挂科
#     body_health_state = models.TextField()
#     treatment_count = models.CharField(max_length=10)  # 就诊次数
#     moral = models.TextField()
#     suggestion = models.TextField()
#
#     def as_dict(self):
#         if self.is_fail_exam:
#             is_fail_exam = '有挂科'
#         else:
#             is_fail_exam = '无挂科'
#         return {
#             "study_state": self.study_state,
#             "is_fail_exam": is_fail_exam,
#             "body_health_state": self.body_health_state,
#             "treatment_count": self.treatment_count,
#             "moral": self.moral,
#             "suggestion": self.suggestion
#         }
#
#
# class Register(models.Model):
#     UserName = models.CharField(max_length=20)
#     Name = models.TextField()
#     Email = models.EmailField(unique=True, default='1005178642@qq.com')
#     Password = models.CharField(max_length=20)
#     Job = models.TextField()
#     Department = models.TextField()
#     School = models.TextField()
#     Major = models.TextField()
#     Grade = models.TextField()
#     Authority = models.TextField(default=1)
#     Reg = models.CharField(max_length=5)
#     Login = models.CharField(max_length=15)
#     # Time = models.DateTimeField()
#
#
# class PredScore(models.Model): ###web_predscore 表为了存预测的成绩
#     StuID = models.CharField(max_length=20)
#     Score = models.CharField(max_length=10)
#
#     def __unicode__(self):
#         return self.StuID
#
#     def as_dict(self):
#         return {
#             "StuID": self.StuID,
#             "Score" : self.Score
#         }
#
    
from django.db import models


class GenderCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'gender_code'


class GradeCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'grade_code'


class Health(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.IntegerField(db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    csrq = models.CharField(db_column='CSRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xmbh = models.CharField(db_column='XMBH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xmmc = models.CharField(db_column='XMMC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jg = models.TextField(db_column='JG', blank=True, null=True)  # Field name made lowercase.
    tjrq = models.CharField(db_column='TJRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jy = models.TextField(db_column='JY', blank=True, null=True)  # Field name made lowercase.
    sjlrsj = models.DateField(db_column='SJLRSJ', blank=True, null=True)  # Field name made lowercase.
    data_src = models.CharField(db_column='DATA_SRC', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health(暂时无用)'


class HealthEventCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=200)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=200, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_event_code'


class HealthEventcategoryCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_eventcategory_code'


class HealthEyesight(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.IntegerField(db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    csrq = models.CharField(db_column='CSRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zylsl = models.CharField(db_column='ZYLSL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    yylsl = models.CharField(db_column='YYLSL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    djzsl = models.CharField(db_column='DJZSL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    djysl = models.CharField(db_column='DJYSL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zysfsy = models.CharField(db_column='ZYSFSY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    yysfsy = models.CharField(db_column='YYSFSY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfpj = models.CharField(db_column='SFPJ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfzl = models.CharField(db_column='SFZL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    qgda = models.CharField(db_column='QGDA', max_length=100, blank=True, null=True)  # Field name made lowercase.
    lrrq = models.CharField(db_column='LRRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sjlrsj = models.DateField(db_column='SJLRSJ', blank=True, null=True)  # Field name made lowercase.
    data_src = models.CharField(db_column='DATA_SRC', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_eyesight'


class HealthPhysicalfitness(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.IntegerField(db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    xmlbid = models.ForeignKey(HealthEventcategoryCode, models.DO_NOTHING, db_column='XMLBID', blank=True, null=True)  # Field name made lowercase.
    xmid = models.ForeignKey(HealthEventCode, models.DO_NOTHING, db_column='XMID', blank=True, null=True)  # Field name made lowercase.
    tcrq = models.CharField(db_column='TCRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    dj = models.CharField(db_column='DJ', max_length=200, blank=True, null=True)  # Field name made lowercase.
    cj = models.CharField(db_column='CJ', max_length=200, blank=True, null=True)  # Field name made lowercase.
    fs = models.CharField(db_column='FS', max_length=200, blank=True, null=True)  # Field name made lowercase.
    py = models.CharField(db_column='PY', max_length=200, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_physicalfitness'


class HealthTooth(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.IntegerField(db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    csrq = models.CharField(db_column='CSRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jcrq = models.CharField(db_column='JCRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hqys = models.CharField(db_column='HQYS', max_length=100, blank=True, null=True)  # Field name made lowercase.
    wfys = models.CharField(db_column='WFYS', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jdct = models.CharField(db_column='JDCT', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sjct = models.CharField(db_column='SJCT', max_length=100, blank=True, null=True)  # Field name made lowercase.
    nl = models.CharField(db_column='NL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    tyby = models.CharField(db_column='TYBY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zhpy = models.CharField(db_column='ZHPY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sjlrsj = models.DateField(db_column='SJLRSJ', blank=True, null=True)  # Field name made lowercase.
    data_src = models.CharField(db_column='DATA_SRC', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_tooth'


class HealthWh(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xq = models.CharField(db_column='XQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.ForeignKey('StudentInfo', models.DO_NOTHING, db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    sg = models.CharField(db_column='SG', max_length=400, blank=True, null=True)  # Field name made lowercase.
    tz = models.CharField(db_column='TZ', max_length=500, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'health_wh'


class SchoolCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'school_code'


class StudentInfo(models.Model):
    id = models.IntegerField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xm = models.CharField(db_column='XM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xmpy = models.CharField(db_column='XMPY', max_length=300, blank=True, null=True)  # Field name made lowercase.
    ywxm = models.CharField(db_column='YWXM', max_length=300, blank=True, null=True)  # Field name made lowercase.
    cym = models.CharField(db_column='CYM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xbdm = models.ForeignKey(GenderCode, models.DO_NOTHING, db_column='XBDM', blank=True, null=True)  # Field name made lowercase.
    xb = models.IntegerField(db_column='XB', blank=True, null=True)  # Field name made lowercase.
    sfzjlxdm = models.CharField(db_column='SFZJLXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfzh = models.CharField(db_column='SFZH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zjyxq = models.CharField(db_column='ZJYXQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    csrq = models.CharField(db_column='CSRQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hjlbdm = models.CharField(db_column='HJLBDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    gatqwdm = models.CharField(db_column='GATQWDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jzzlxdm = models.CharField(db_column='JZZLXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jzzhm = models.CharField(db_column='JZZHM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jzzyxq = models.CharField(db_column='JZZYXQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hkxzdm = models.CharField(db_column='HKXZDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hkxz = models.CharField(db_column='HKXZ', max_length=200, blank=True, null=True)  # Field name made lowercase.
    hksf = models.CharField(db_column='HKSF', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hkqxdm = models.CharField(db_column='HKQXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hkjd = models.CharField(db_column='HKJD', max_length=200, blank=True, null=True)  # Field name made lowercase.
    hkdz = models.CharField(db_column='HKDZ', max_length=500, blank=True, null=True)  # Field name made lowercase.
    csd = models.CharField(db_column='CSD', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xzzdqxdm = models.CharField(db_column='XZZDQXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xzz = models.CharField(db_column='XZZ', max_length=500, blank=True, null=True)  # Field name made lowercase.
    xzzyzbm = models.CharField(db_column='XZZYZBM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    lxdh = models.CharField(db_column='LXDH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    txdz = models.CharField(db_column='TXDZ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    yzbm = models.CharField(db_column='YZBM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    dzxx = models.CharField(db_column='DZXX', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zydz = models.CharField(db_column='ZYDZ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    gjdqdm = models.CharField(db_column='GJDQDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jgdm = models.CharField(db_column='JGDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    mzdm = models.CharField(db_column='MZDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zjxydm = models.CharField(db_column='ZJXYDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    zzmmdm = models.CharField(db_column='ZZMMDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    cjlxdm = models.CharField(db_column='CJLXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jkzkdm = models.CharField(db_column='JKZKDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xxdm = models.CharField(db_column='XXDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    hyzkm = models.CharField(db_column='HYZKM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    tc = models.CharField(db_column='TC', max_length=500, blank=True, null=True)  # Field name made lowercase.
    czsfzmhq = models.CharField(db_column='CZSFZMHQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    cqzbh = models.CharField(db_column='CQZBH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    cqzdz = models.CharField(db_column='CQZDZ', max_length=500, blank=True, null=True)  # Field name made lowercase.
    cqnf = models.CharField(db_column='CQNF', max_length=100, blank=True, null=True)  # Field name made lowercase.
    fmsfshhk = models.CharField(db_column='FMSFSHHK', max_length=100, blank=True, null=True)  # Field name made lowercase.
    dszn = models.CharField(db_column='DSZN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    ldrk = models.CharField(db_column='LDRK', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sqzn = models.CharField(db_column='SQZN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xqjy = models.CharField(db_column='XQJY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    gmxw = models.CharField(db_column='GMXW', max_length=100, blank=True, null=True)  # Field name made lowercase.
    phototype = models.CharField(db_column='PHOTOTYPE', max_length=100, blank=True, null=True)  # Field name made lowercase.
    photourl = models.CharField(db_column='PHOTOURL', max_length=500, blank=True, null=True)  # Field name made lowercase.
    sfbrzp = models.CharField(db_column='SFBRZP', max_length=5, blank=True, null=True)  # Field name made lowercase.
    photo = models.TextField(db_column='PHOTO', blank=True, null=True)  # Field name made lowercase.
    bz = models.CharField(db_column='BZ', max_length=1000, blank=True, null=True)  # Field name made lowercase.
    zcsj = models.CharField(db_column='ZCSJ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='ENDDATE', blank=True, null=True)  # Field name made lowercase.
    sjlrsj = models.DateField(db_column='SJLRSJ', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.DecimalField(db_column='ISDELETED', max_digits=22, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    data_src = models.CharField(db_column='DATA_SRC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    updatetime = models.CharField(db_column='UPDATETIME', max_length=100, blank=True, null=True)  # Field name made lowercase.
    createtime = models.CharField(db_column='CREATETIME', max_length=100, blank=True, null=True)  # Field name made lowercase.
    isupdated = models.DecimalField(db_column='ISUPDATED', max_digits=22, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    ydlb = models.CharField(db_column='YDLB', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfspz = models.CharField(db_column='SFSPZ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sflset = models.CharField(db_column='SFLSET', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfwlwgryzn = models.CharField(db_column='SFWLWGRYZN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfge = models.CharField(db_column='SFGE', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sflszv = models.CharField(db_column='SFLSZV', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sftjzscl = models.CharField(db_column='SFTJZSCL', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfsqzz = models.CharField(db_column='SFSQZZ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfxsyb = models.CharField(db_column='SFXSYB', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfjss = models.CharField(db_column='SFJSS', max_length=100, blank=True, null=True)  # Field name made lowercase.
    csdsf = models.CharField(db_column='CSDSF', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfxyczxc = models.CharField(db_column='SFXYCZXC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    isreachscore = models.CharField(db_column='ISREACHSCORE', max_length=100, blank=True, null=True)  # Field name made lowercase.
    iscertify = models.CharField(db_column='ISCERTIFY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jzznumber = models.CharField(db_column='JZZNUMBER', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'student_info'


class StudentXj(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xq = models.CharField(db_column='XQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xjh = models.CharField(db_column='XJH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sfzh = models.CharField(db_column='SFZH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xm = models.CharField(db_column='XM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xbdm = models.ForeignKey(GenderCode, models.DO_NOTHING, db_column='XBDM', blank=True, null=True)  # Field name made lowercase.
    xh = models.CharField(db_column='XH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    studentid = models.ForeignKey(StudentInfo, models.DO_NOTHING, db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    xxdm = models.ForeignKey(SchoolCode, models.DO_NOTHING, db_column='XXDM', blank=True, null=True)  # Field name made lowercase.
    xxjc = models.CharField(db_column='XXJC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xddm = models.ForeignKey('StudyperiodCode', models.DO_NOTHING, db_column='XDDM', blank=True, null=True)  # Field name made lowercase.
    xd = models.CharField(db_column='XD', max_length=100, blank=True, null=True)  # Field name made lowercase.
    njdm = models.ForeignKey(GradeCode, models.DO_NOTHING, db_column='NJDM', blank=True, null=True)  # Field name made lowercase.
    njmc = models.CharField(db_column='NJMC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    bjid = models.CharField(db_column='BJID', max_length=100, blank=True, null=True)  # Field name made lowercase.
    bjxh = models.CharField(db_column='BJXH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    bjmc = models.CharField(db_column='BJMC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    rxny = models.CharField(db_column='RXNY', max_length=100, blank=True, null=True)  # Field name made lowercase.
    rxfsdm = models.CharField(db_column='RXFSDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xslbdm = models.CharField(db_column='XSLBDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    jdfsdm = models.CharField(db_column='JDFSDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    dqztdm = models.CharField(db_column='DQZTDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xslydm = models.CharField(db_column='XSLYDM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xjydzt = models.CharField(db_column='XJYDZT', max_length=100, blank=True, null=True)  # Field name made lowercase.
    oldxjh = models.CharField(db_column='OLDXJH', max_length=100, blank=True, null=True)  # Field name made lowercase.
    oldschoolname = models.CharField(db_column='OLDSCHOOLNAME', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xjxxid = models.CharField(db_column='XJXXID', max_length=100, blank=True, null=True)  # Field name made lowercase.
    lydq = models.CharField(db_column='LYDQ', max_length=100, blank=True, null=True)  # Field name made lowercase.
    ksdjhm = models.CharField(db_column='KSDJHM', max_length=100, blank=True, null=True)  # Field name made lowercase.
    qgxjh = models.CharField(db_column='QGXJH', max_length=50, blank=True, null=True)  # Field name made lowercase.
    createtime = models.CharField(db_column='CREATETIME', max_length=100, blank=True, null=True)  # Field name made lowercase.
    updatetime = models.CharField(db_column='UPDATETIME', max_length=100, blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.DecimalField(db_column='ISDELETED', max_digits=22, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    data_src = models.CharField(db_column='DATA_SRC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sjlrsj = models.DateField(db_column='SJLRSJ', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='ENDDATE', blank=True, null=True)  # Field name made lowercase.
    ba = models.CharField(db_column='BA', max_length=1000, blank=True, null=True)  # Field name made lowercase.
    isupdated = models.DecimalField(db_column='ISUPDATED', max_digits=22, decimal_places=0, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'student_xj'


class Study(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    studentid = models.IntegerField(db_column='STUDENTID', blank=True, null=True)  # Field name made lowercase.
    xn = models.CharField(db_column='XN', max_length=40, blank=True, null=True)  # Field name made lowercase.
    xq = models.CharField(db_column='XQ', max_length=10, blank=True, null=True)  # Field name made lowercase.
    xd = models.CharField(db_column='XD', max_length=100, blank=True, null=True)  # Field name made lowercase.
    ksjbdm = models.ForeignKey('StudyExamlevelCode', models.DO_NOTHING, db_column='KSJBDM', blank=True, null=True)  # Field name made lowercase.
    kslxdm = models.ForeignKey('StudyExamtypeCode', models.DO_NOTHING, db_column='KSLXDM', blank=True, null=True)  # Field name made lowercase.
    ksmc = models.CharField(db_column='KSMC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    xkdm = models.ForeignKey('StudyExamsubjectCode', models.DO_NOTHING, db_column='XKDM', blank=True, null=True)  # Field name made lowercase.
    fs = models.DecimalField(db_column='FS', max_digits=22, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    djdm = models.ForeignKey('StudyGradeCode', models.DO_NOTHING, db_column='DJDM', blank=True, null=True)  # Field name made lowercase.
    cjlx = models.CharField(db_column='CJLX', max_length=100, blank=True, null=True)  # Field name made lowercase.
    sjzt = models.CharField(db_column='SJZT', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'study'


class StudyExamlevelCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'study_examlevel_code'


class StudyExamsubjectCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'study_examsubject_code'


class StudyExamtypeCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'study_examtype_code'


class StudyGradeCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'study_grade_code'


class StudyperiodCode(models.Model):
    id = models.CharField(db_column='ID', primary_key=True, max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'studyperiod_code'