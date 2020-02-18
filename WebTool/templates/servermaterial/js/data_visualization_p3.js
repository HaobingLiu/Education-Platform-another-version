$(document).ready(function () {

    // alert(sp);
    $.ajax({
        url: '/web/queryVDataP3/',
        type: 'POST',
        data: {'sp': '-1'},
        // dataType: 'JSON',
        // contentType: 'application/json;charset=utf-8',
        success: function (result) {
            draw_course_p1(result[0], '-1');
            draw_course_p2(result[5], '-1');
            draw_course_p3(result[6], "-1");

            draw_course_p4(result[5], "-1");

            draw_comp_p1(result[1], '-1');
            draw_comp_p2(result[2], '-1');
            draw_comp_p3(result[3], '-1');
            draw_comp_p4(result[4], "-1");
        }

    });

    $("#sp_skill").change(function () {
        // alert($("#sp_skill").val());
        $.ajax({
            url: '/web/queryVDataP3/',
            type: 'POST',
            data: {'sp': $("#sp_skill").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                draw_course_p1(result[0]);
                draw_course_p2(result[5], $("#sp_skill").val());
                draw_course_p3(result[6], $("#sp_skill").val());

                draw_comp_p1(result[1], $("#sp_skill").val());
                draw_comp_p2(result[2], $("#sp_skill").val());
                draw_comp_p3(result[3], $("#sp_skill").val());
                draw_comp_p4(result[4], $("#sp_skill").val());
            }

        });
    });
});


function draw_course_p1(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-30'));
    option = {
        title: {
            text: '兴趣课程开设数量图',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ["走班制", "整班制"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        series: [
            {
                name: '兴趣课程开设数量图',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['ratio'][0], name: "走班制"},
                    {value: data['ratio'][1], name: "整班制"},
                ]
            }
        ]
    };
    myChart.setOption(option);
}

function draw_course_p2(data, sp) {

    var myChart = echarts.init(document.getElementById('chart-grade-31'));
    option = {
        title: {
            text: '各类兴趣课程开设数量图',
            x: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['走班制', '整班制']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: data["category"],
        },
        series: [
            {
                name: '走班制',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][0]
            },
            {
                name: '整班制',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][1]
            },
        ]
    };
    myChart.setOption(option);


    // var categoryList = data[""]
    var th_str = "<tr class='info'><th class='text-center'>学段</th><th class='text-center'>维度</th>";
    var primaryCountNode = "<tr><td class='text-center' rowspan='3' style='vertical-align: middle;'>小学</td><td>数量</td>";
    var juniorCountNode = "<tr><td class='text-center' rowspan='3' style='vertical-align: middle;'>初中</td><td>数量</td>";
    var primarySRatioNode = "<tr><td>走班率</td>";
    var juniorSRatioNode = "<tr><td>走班率</td>";
    var primaryRatioNode = "<tr><td>百分比</td>";
    var juniorRatioNode = "<tr><td>百分比</td>";
    var primaryCount = 0, primarySCount = 0, juniorCount = 0, juniorSCount = 0;
    for (var i = 0; i < 8; i++) {
        if (sp == "1" || sp == "-1") {
            primaryCount += data["sp_dict"]["count"][1][i];     // 小学所有兴趣课程的总数目
            primarySCount += data["sp_dict"]["scount"][1][i];   // 小学所有走班制课程的数目
        }
        if (sp == "2" || sp == "-1") {
            juniorCount += data["sp_dict"]["count"][2][i];      // 初中所有兴趣课程的总数目
            juniorSCount += data["sp_dict"]["scount"][2][i];    // 初中所有走班制课程的数目
        }
    }


    for (var i = 0; i < 8; i++) {
        th_str += "<th class='text-center'>" + data["category"][i] + "</th>";
        if (sp == "1" || sp == "-1") {
            primaryCountNode += "<td>" + data["sp_dict"]["count"][1][i] + "</td>";
            primarySRatioNode += "<td>" + parseInt(data["sp_dict"]["scount"][1][i] / data["sp_dict"]["count"][1][i] * 100) + "%</td>";
            primaryRatioNode += "<td>" + parseInt(data["sp_dict"]["count"][1][i] / primaryCount * 100) + "%</td>";
        }
        if (sp == "2" || sp == "-1") {
            juniorCountNode += "<td>" + data["sp_dict"]["count"][2][i] + "</td>";
            juniorSRatioNode += "<td>" + parseInt(data["sp_dict"]["scount"][2][i] / data["sp_dict"]["count"][2][i] * 100) + "%</td>";
            juniorRatioNode += "<td>" + parseInt(data["sp_dict"]["count"][2][i] / juniorCount * 100) + "%</td>";
        }

    }
    var es_table = $("tbody[class='99999']");
    es_table.children().remove();
    th_str += "<td>汇总</td></tr>";
    es_table.append(th_str);

    if (sp == "1" || sp == "-1") {
        primaryCountNode += "<td>" + primaryCount + "</td></tr>";
        primaryRatioNode += "<td>100%</td></tr>";
        primarySRatioNode += "<td>" + parseInt(primarySCount / primaryCount * 100) + "%</td></tr>";
        es_table.append(primaryCountNode);
        es_table.append(primaryRatioNode);
        es_table.append(primarySRatioNode);
    }
    if (sp == "2" || sp == "-1") {
        juniorCountNode += "<td>" + juniorCount + "</td></tr>";
        juniorRatioNode += "<td>100%</td></tr>";
        juniorSRatioNode += "<td>" + parseInt(juniorSCount / juniorCount * 100) + "%</td></tr>";
        es_table.append(juniorCountNode);
        es_table.append(juniorRatioNode);
        es_table.append(juniorSRatioNode);
    }
}


function draw_course_p3(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-32'));
    option = {
        title: {
            text: '各类兴趣课程开展情况图',
            x: 'center'

        },
        tooltip: {
            trigger: 'axis',

            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['覆盖率', '参与率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: 100,
            // boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: data[1]['category']
        },
        series: [
            {
                name: '覆盖率',
                type: 'bar',
                data: data[0]['all'],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: "{c}%"

                    }
                },
                itemStyle: {
                    normal: {
                        color: '#d14a61',
                    }
                }
            },
            {
                name: '参与率',
                type: 'bar',
                data: data[1]['all'],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: "{c}%"

                    }
                },
                itemStyle: {
                    normal: {
                        color: '#5793f3'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);

    var tmp_table = $("tbody[class='88888']");
    tmp_table.children().remove();
    var th_str = "<tr class='info'><th class='text-center'>学段</th><th class='text-center'>维度</th><th class='text-center'>性别</th>";
    // 覆盖率行
    var primaryCNode = "<tr><th class='text-center' rowspan='4' style='vertical-align: middle;'>小学</th><th colspan='2' class='text-center'>覆盖率</th>";
    var primaryPNodeAll = "<tr><th class='text-center' rowspan='3' style='vertical-align: middle;'>参与率</th><td>总体</td>";  // 参与率_总体
    var primaryPNodeMale = "<tr><td>男生</td>";                                                                               // 参与率_男生
    var primaryPNodeFemale = "<tr><td>女生</td>";                                                                             // 参与率_女生

    // 覆盖率行
    var juniorCNode = "<tr><th class='text-center' rowspan='4' style='vertical-align: middle;'>初中</th><th colspan='2' class='text-center'>覆盖率</th>";
    var juniorPNodeAll = "<tr><th class='text-center' rowspan='3' style='vertical-align: middle;'>参与率</th><td>总体</td>";   // 参与率_总体
    var juniorPNodeMale = "<tr><td>男生</td>";                                                                                // 参与率_男生
    var juniorPNodeFemale = "<tr><td>女生</td>";                                                                              // 参与率_女生


    for (var i = 0; i < 8; i++) {
        th_str += "<th>" + data[0]['category'][i] + "</th>";
        if (sp == "-1" || sp == "1") {
            primaryCNode += '<td>' + data[0]['sp_dict'][1][i] + "%</td>";
            primaryPNodeAll += "<td>" + data[1]["sp_dict"]["1"]["-1"][i] + "%</td>";
            primaryPNodeMale += "<td>" + data[1]["sp_dict"]["1"]["1"][i] + "%</td>";
            primaryPNodeFemale += "<td>" + data[1]["sp_dict"]["1"]["2"][i] + "%</td>";
        }
        if (sp == "-1" || sp == "2") {
            juniorCNode += '<td>' + data[0]['sp_dict'][2][i] + "%</td>";
            juniorPNodeAll += "<td>" + data[1]["sp_dict"]["2"]["-1"][i] + "%</td>";
            juniorPNodeMale += "<td>" + data[1]["sp_dict"]["2"]["1"][i] + "%</td>";
            juniorPNodeFemale += "<td>" + data[1]["sp_dict"]["2"]["2"][i] + "%</td>";
        }
    }
    tmp_table.append(th_str);
    if (sp == "-1" || sp == "1") {
        tmp_table.append(primaryCNode);
        tmp_table.append(primaryPNodeAll);
        tmp_table.append(primaryPNodeMale);
        tmp_table.append(primaryPNodeFemale);
    }
    if (sp == "-1" || sp == "2") {
        tmp_table.append(juniorCNode);
        tmp_table.append(juniorPNodeAll);
        tmp_table.append(juniorPNodeMale);
        tmp_table.append(juniorPNodeFemale);
    }
}


function draw_course_p4(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-33'));
    option = {
        title: {
            text: '各类兴趣课程开设数量图',
            x: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['两个学期都选择', '仅第一学期选择']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: data["category"],
        },
        series: [
            {
                name: '两个学期都选择',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][0],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            },
            {
                name: '仅第一学期选择',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][1],
                itemStyle: {
                    normal: {
                        color: '#EA7500'
                    }
                }
            },
        ]
    };
    myChart.setOption(option);
}


function draw_comp_p1(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-37'));
    option = {
        title: {
            text: '学生各类竞赛参与数量图',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: data['all'][0]
        },
        series: [
            {
                name: '走班制',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#ca8622'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data['all'][1]
            },
        ]
    };
    myChart.setOption(option);

    var es_table = $("tbody[class='9999']");
    es_table.children().remove();

    if (sp == "1" || sp == "-1") {
        var tmp_dict = data['sp_dict']["1"];
        var primaryNode = $("<tr><td>小学</td><td>" + tmp_dict["技术类"] + "</td><td>" + tmp_dict["科学类"] + "</td><td>" + tmp_dict["社会类"] +
            "</td><td>" + tmp_dict["数学类"] + "</td><td>" + tmp_dict["体育类"] + "</td><td>" + tmp_dict["艺术类"] + "</td><td>" + tmp_dict["语言类"] +
            "</td><td>" + tmp_dict["综合实践类"] + "</td><td>" + data["all_sp_dict"]["1"] + "</td>></tr>");
        es_table.append(primaryNode);

    }
    if (sp == "2" || sp == "-1") {
        tmp_dict = data['sp_dict']["2"];
        var juniorNode = $("<tr><td>初中</td><td>" + tmp_dict["技术类"] + "</td><td>" + tmp_dict["科学类"] + "</td><td>" + tmp_dict["社会类"] +
            "</td><td>" + tmp_dict["数学类"] + "</td><td>" + tmp_dict["体育类"] + "</td><td>" + tmp_dict["艺术类"] + "</td><td>" + tmp_dict["语言类"] +
            "</td><td>" + tmp_dict["综合实践类"] + "</td><td>" + data["all_sp_dict"]["2"] + "</td>></tr>");
        es_table.append(juniorNode);
    }
}


function draw_comp_p2(data, sp) {

    var myChart = echarts.init(document.getElementById('chart-grade-38'));

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '各类竞赛获奖情况图',
            x: 'center'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['个人获奖', '集体获奖']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: data["all"][0]
        },
        series: [
            {
                name: '个人获奖',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][1]
            },
            {
                name: '集体获奖',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data["all"][3]
            },
        ]
    };
    myChart.setOption(option);

    var es_table = $("tbody[class='8888']");
    es_table.children().remove();

    if (sp == "1" || sp == "-1") {
        var tmp_dict = data['sp_type_dict']["1"];

        var primaryNode = $("<tr><td class=\"text-center\" rowspan=\"2\" style=\"vertical-align: middle;\">小学</td><td>个人获奖</td><td>"
            + tmp_dict[1]["技术类"] + "</td><td>" + tmp_dict[1]["科学类"] + "</td><td>" + tmp_dict[1]["社会类"] + "</td><td>"
            + tmp_dict[1]["数学类"] + "</td><td>" + tmp_dict[1]["体育类"] + "</td><td>" + tmp_dict[1]["艺术类"] + "</td><td>"
            + tmp_dict[1]["语言类"] + "</td><td>" + tmp_dict[1]["综合实践类"] + "</td><td>" + data["all_st_dict"]["1"][1] +
            "</td></tr><tr><td>集体获奖</td><td>" + tmp_dict[2]["技术类"] + "</td><td>" + tmp_dict[2]["科学类"] + "</td><td>"
            + tmp_dict[2]["社会类"] + "</td><td>" + tmp_dict[2]["数学类"] + "</td><td>" + tmp_dict[2]["体育类"] + "</td><td>"
            + tmp_dict[2]["艺术类"] + "</td><td>" + tmp_dict[2]["语言类"] + "</td><td>" + tmp_dict[2]["综合实践类"] + "</td><td>"
            + data["all_st_dict"]["1"][2] + "</td>></tr>");
        es_table.append(primaryNode);

    }
    if (sp == "2" || sp == "-1") {
        var tmp_dict = data['sp_type_dict']["2"];
        var juniorNode = $("<tr><td class=\"text-center\" rowspan=\"2\" style=\"vertical-align: middle;\">初中</td><td>个人获奖</td><td>"
            + tmp_dict[1]["技术类"] + "</td><td>" + tmp_dict[1]["科学类"] + "</td><td>" + tmp_dict[1]["社会类"] + "</td><td>"
            + tmp_dict[1]["数学类"] + "</td><td>" + tmp_dict[1]["体育类"] + "</td><td>" + tmp_dict[1]["艺术类"] + "</td><td>"
            + tmp_dict[1]["语言类"] + "</td><td>" + tmp_dict[1]["综合实践类"] + "</td><td>" + data["all_st_dict"]["2"][1] +
            "</td></tr><tr><td>集体获奖</td><td>" + tmp_dict[2]["技术类"] + "</td><td>" + tmp_dict[2]["科学类"] + "</td><td>"
            + tmp_dict[2]["社会类"] + "</td><td>" + tmp_dict[2]["数学类"] + "</td><td>" + tmp_dict[2]["体育类"] + "</td><td>"
            + tmp_dict[2]["艺术类"] + "</td><td>" + tmp_dict[2]["语言类"] + "</td><td>" + tmp_dict[2]["综合实践类"] + "</td><td>"
            + data["all_st_dict"]["2"][2] + "</td>></tr>");
        es_table.append(juniorNode);
    }
}

function draw_comp_p3(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-39'));
    option = {
        title: {
            text: '各级别竞赛参与情况图',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ["区级", "市级", "国家级"],
                axisPointer: {
                    type: 'shadow'
                },
                // axisLabel: {
                //     interval: 0,
                //     rotate: 40
                // }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '总数',
                interval: 10,
            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: [data['all'][1], data['all'][2], data['all'][3]],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var es_table = $("tbody[class='7777']");
    es_table.children().remove();
    if (sp == "1" || sp == "-1") {
        var primaryNode = "<tr><td>小学</td><td>2018</td><td>" + data["sp_dict"]["1"][1] + "</td><td>" + data["sp_dict"]["1"][2] + "</td><td>"
            + data["sp_dict"]["1"][3] + "</td></tr>";
        es_table.append(primaryNode);
    }
    if (sp == "2" || sp == "-1") {
        var juniorNode = "<tr><td>初中</td><td>2018</td><td>" + data["sp_dict"]["2"][1] + "</td><td>"
            + data["sp_dict"]["2"][2] + "</td><td>" + data["sp_dict"]["2"][3] + "</td></tr>";
        es_table.append(juniorNode);
    }
}

function draw_comp_p4(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-40'));
    option = {
        title: {
            text: '各级别竞赛获奖情况图',
            x: 'center'
        },
        legend: {
            y: 'bottom',
            data: ['个人获奖', '集体获奖']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ["区级", "市级", "国家级"],
                axisPointer: {
                    type: 'shadow'
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '总数',
                interval: 10,
            }
        ],
        series: [
            {
                name: '个人获奖',
                type: 'bar',
                data: [data['all'][1][1], data['all'][1][2], data['all'][1][3]],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            },
            {
                name: '集体获奖',
                type: 'bar',
                data: [data['all'][2][1], data['all'][2][2], data['all'][2][3]],
                itemStyle: {
                    normal: {
                        color: '#EA7500',
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var es_table = $("tbody[class='6666']");
    es_table.children().remove();

    if (sp == "1" || sp == "-1") {
        var primaryNode = "<tr><td class=\"text-center\" rowspan=\"2\" style=\"vertical-align: middle;\">小学</td><td>个人获奖</td><td>"
            + data["sp_dict"]["1"][1][1] + "</td><td>" + data["sp_dict"]["1"][1][2] + "</td><td>" + data["sp_dict"]["1"][1][3] + "</td></tr>"
            + "<tr><td>集体获奖</td><td>" + data["sp_dict"]["1"][2][1] + "</td><td>" + data["sp_dict"]["1"][2][2] + "</td><td>" + data["sp_dict"]["1"][2][3]
            + "</td></tr>";
        es_table.append(primaryNode);
    }
    if (sp == "2" || sp == "-1") {
        var juniorNode = "<tr><td class=\"text-center\" rowspan=\"2\" style=\"vertical-align: middle;\">初中</td><td>个人获奖</td><td>" +
            +data["sp_dict"]["2"][1][1] + "</td><td>" + data["sp_dict"]["2"][1][2] + "</td><td>" + data["sp_dict"]["2"][1][3] + "</td></tr>"
            + "<tr><td>集体获奖</td><td>" + data["sp_dict"]["2"][2][1] + "</td><td>" + data["sp_dict"]["2"][2][2] + "</td><td>" + data["sp_dict"]["2"][2][3]
            + "</td></tr>";
        es_table.append(juniorNode);
    }
}