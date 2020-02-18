$(document).ready(function () {

    // alert(sp);
    $.ajax({
        url: '/web/queryVDataP1/',
        type: 'POST',
        data: {'sp': '-1'},
        // dataType: 'JSON',
        // contentType: 'application/json;charset=utf-8',
        success: function (result) {
            draw_avg_height(result[0], '-1');
            draw_std_height(result[0], '-1');
            draw_avg_weight(result[0], '-1');
            draw_std_weight(result[0], '-1');
            draw_bmi(result[0], '-1');
            draw_vision_level(result[2], '-1');
            draw_tooth_level(result[3], '-1');
            draw_lung_level(result[4], '-1');
            draw_atest_histo(result[5], '-1');
            draw_naili_level(result[5]["naili"], '-1');
            draw_speed_level(result[5]["speed"], '-1');
            draw_overall_level(result[6], '-1');
        }

    });

    $("#sp_health_1").change(function () {
        $.ajax({
            url: '/web/queryVDataP1/',
            type: 'POST',
            data: {'sp': $("#sp_health_1").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var sp_val = $("#sp_health_1").val();
                // draw_avg_height(result[0], sp_val);
                // draw_std_height(result[0], sp_val);
                // draw_avg_weight(result[0], sp_val);
                // draw_std_weight(result[0], sp_val);
                // draw_bmi(result[0], sp_val);
                // draw_vision_level(result[2], sp_val);
                // draw_tooth_level(result[3], sp_val);
                // draw_lung_level(result[4], sp_val);
                // draw_atest_histo(result[5], sp_val);
                // draw_naili_level(result[5]["naili"], sp_val);
                // draw_speed_level(result[5]["speed"], sp_val);
                draw_overall_level(result[6], sp_val);
            }

        });
    });
    $("#sp_health_2").change(function () {
        $.ajax({
            url: '/web/queryVDataP1/',
            type: 'POST',
            data: {'sp': $("#sp_health_2").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var sp_val = $("#sp_health_2").val();
                draw_avg_height(result[0], sp_val);
                draw_std_height(result[0], sp_val);
                draw_avg_weight(result[0], sp_val);
                draw_std_weight(result[0], sp_val);
                draw_bmi(result[0], sp_val);
                // draw_vision_level(result[2], sp_val);
                // draw_tooth_level(result[3], sp_val);
                // draw_lung_level(result[4], sp_val);
                // draw_atest_histo(result[5], sp_val);
                // draw_naili_level(result[5]["naili"], sp_val);
                // draw_speed_level(result[5]["speed"], sp_val);
            }

        });
    });
    $("#sp_health_3").change(function () {
        $.ajax({
            url: '/web/queryVDataP1/',
            type: 'POST',
            data: {'sp': $("#sp_health_3").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var sp_val = $("#sp_health_3").val();

                draw_vision_level(result[2], sp_val);
                draw_tooth_level(result[3], sp_val);
                // draw_atest_histo(result[5], sp_val);
                // draw_naili_level(result[5]["naili"], sp_val);
                // draw_speed_level(result[5]["speed"], sp_val);
            }

        });
    });
    $("#sp_health_4").change(function () {
        $.ajax({
            url: '/web/queryVDataP1/',
            type: 'POST',
            data: {'sp': $("#sp_health_4").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var sp_val = $("#sp_health_4").val();
                draw_lung_level(result[4], sp_val);
                draw_atest_histo(result[5], sp_val);
                draw_naili_level(result[5]["naili"], sp_val);
                draw_speed_level(result[5]["speed"], sp_val);
            }

        });
    });


});


function draw_avg_height(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-1'));
    option = {
        title: {
            text: '男女身高平均值',
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
        legend: {
            data: ['男生', '女生'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '身高',
                interval: 10,
            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: data['havg'][0],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            },
            {
                name: '女生',
                type: 'bar',
                data: data['havg'][1],
                itemStyle: {
                    normal: {
                        color: '#EA7500'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function draw_std_height(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-2'));
    option = {
        title: {
            text: '男女身高标准差',
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
        legend: {
            data: ['男生', '女生'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '身高',
                interval: 10,
            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: data['hstd'][0],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            },
            {
                name: '女生',
                type: 'bar',
                data: data['hstd'][1],
                itemStyle: {
                    normal: {
                        color: '#EA7500'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function draw_avg_weight(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-3'));
    option = {
        title: {
            text: '男女体重平均值',
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
        legend: {
            data: ['男生', '女生'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '平均体重',
                interval: 10,
            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: data['wavg'][0],
                itemStyle: {
                    normal: {
                        color: '#d14a61',
                    }
                }
            },
            {
                name: '女生',
                type: 'bar',
                data: data['wavg'][1],
                itemStyle: {
                    normal: {
                        color: '#5793f3'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function draw_std_weight(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-4'));
    option = {
        title: {
            text: '男女体重标准差',
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
        legend: {
            data: ['男生', '女生'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '身高',
                interval: 10,
            }
        ],
        series: [
            {
                name: '男生',
                type: 'bar',
                data: data['wstd'][0],
                itemStyle: {
                    normal: {
                        color: '#d14a61',
                    }
                }
            },
            {
                name: '女生',
                type: 'bar',
                data: data['wstd'][1],
                itemStyle: {
                    normal: {
                        color: '#5793f3'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function draw_bmi(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-5'));
    option = {
        title: {
            text: '学生BMI分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: data["level"]
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
                name: '所有学生BMI分布',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['ratio'][0], name: data['level'][0]},
                    {value: data['ratio'][1], name: data['level'][1]},
                    {value: data['ratio'][2], name: data['level'][2]},
                    {value: data['ratio'][3], name: data['level'][3]},
                ]
            }
        ]
    };
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('chart-grade-6'));
    var grade_count = data['grade_id'].length;
    var boy_fat = new Array();
    var girl_fat = new Array();
    var boy_thin = new Array();
    var girl_thin = new Array();
    for (var i = 0; i < grade_count; i++) {
        var id2 = data['grade_id'][i];
        boy_fat[i] = data["dict_2"][id2]["1"][3];
        girl_fat[i] = data["dict_2"][id2]["2"][3];
        boy_thin[i] = data["dict_2"][id2]["1"][0];
        girl_thin[i] = data["dict_2"][id2]["2"][0];
    }
    option = {

        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: data['grade'].length - 1
        }],


        title: [{
            left: 'center',
            text: '肥胖率男女生对比图'
        }, {
            top: '55%',
            left: 'center',
            text: '低体重率男女生对比图'
        }],
        tooltip: {
            trigger: 'axis'
        },
        legend: [{
            data: ['男生', '女生'],
            orient: 'vertical',
            x: 'left',
        }
        ],
        xAxis: [{
            data: data['grade'],
            axisLabel: {
                interval: 0,
                rotate: 40
            }
        }, {
            data: data['grade'],
            gridIndex: 1,
            axisLabel: {
                interval: 0,
                rotate: 40
            }
        }],
        yAxis: [{
            splitLine: {show: false}
        }, {
            splitLine: {show: false},
            gridIndex: 1
        }],
        grid: [{
            bottom: '60%'
        }, {
            top: '60%'
        }],
        series: [{
            name: '男生',
            type: 'line',
            showSymbol: false,
            data: boy_fat,
            lineStyle: {
                normal: {
                    color: '#B22222',
                }
            }
        },
            {
                name: '女生',
                type: 'line',
                showSymbol: false,
                data: girl_fat,
                lineStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            },
            {
                name: '男生',
                type: 'line',
                showSymbol: false,
                data: boy_thin,
                xAxisIndex: 1,
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color: '#B22222',
                    }
                }
            },
            {
                name: '女生',
                type: 'line',
                showSymbol: false,
                data: girl_thin,
                xAxisIndex: 1,
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color: '#4f9D9D',
                    }
                }
            }]
    };

    myChart.setOption(option);

    var es_table = $("tbody[class='999']");
    es_table.children().remove();
    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"][0] + "%</td>" + "<td>" + data["dict"]["1"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"][2] + "%</td>" + "<td>" + data["dict"]["1"]["2"][3] + "%</td></tr>");
        es_table.append(primaryNode);

    }
    if (sp == "-1" || sp == "2") {

        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"][0] + "%</td>" + "<td>" + data["dict"]["2"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"][2] + "%</td>" + "<td>" + data["dict"]["2"]["2"][3] + "%</td></tr>");
        es_table.append(juniorNode);
    }

    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"][0] + "%</td>" + "<td>" + data["dict"]["3"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"][2] + "%</td>" + "<td>" + data["dict"]["3"]["2"][3] + "%</td></tr>");
        es_table.append(highNode);
    }
}

function draw_vision_level(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-7'));
    option = {
        title: {
            text: '学生视力等级分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: data["level"]
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
                name: '所有学生近视情况分布',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['all'][0], name: data['level'][0]},
                    {value: data['all'][1], name: data['level'][1]},
                    {value: data['all'][2], name: data['level'][2]},
                    {value: data['all'][3], name: data['level'][3]},
                ]
            }
        ]
    };
    myChart.setOption(option);

    myChart = echarts.init(document.getElementById('chart-grade-8'));

    var xAxisData = ['小学', '普通初中', '普通高中'];
    if (sp == "-1") {
        var levelData1 = [data['dict']["1"]["-1"][0], data['dict']["2"]["-1"][0], data['dict']["3"]["-1"][0]];
        var levelData2 = [data['dict']["1"]["-1"][1], data['dict']["2"]["-1"][1], data['dict']["3"]["-1"][1]];
        var levelData3 = [data['dict']["1"]["-1"][2], data['dict']["2"]["-1"][2], data['dict']["3"]["-1"][2]];
        var levelData4 = [data['dict']["1"]["-1"][3], data['dict']["2"]["-1"][3], data['dict']["3"]["-1"][3]];
    }
    if (sp == "1") {
        xAxisData = ['小学'];
        levelData1 = [data['dict']["1"]["-1"][0]];
        levelData2 = [data['dict']["1"]["-1"][1]];
        levelData3 = [data['dict']["1"]["-1"][2]];
        levelData4 = [data['dict']["1"]["-1"][3]];
    } else if (sp == "2") {
        levelData1 = [data['dict']["2"]["-1"][0]];
        levelData2 = [data['dict']["2"]["-1"][1]];
        levelData3 = [data['dict']["2"]["-1"][2]];
        levelData4 = [data['dict']["2"]["-1"][3]];
        xAxisData = ['普通初中'];
    } else if (sp == "3") {
        levelData1 = [data['dict']["3"]["-1"][0]];
        levelData2 = [data['dict']["3"]["-1"][1]];
        levelData3 = [data['dict']["3"]["-1"][2]];
        levelData4 = [data['dict']["3"]["-1"][3]];
        xAxisData = ['普通高中'];
    }
    option = {
        title: {
            text: '学生视力情况分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{c}%',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            // orient: 'horizontal',
            y: 'bottom',
            data: ['不近视', '轻度近视', '中度近视', '重度近视']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisPointer: {
                type: 'shadow'
            },

        },
        yAxis: {
            type: 'value',
            formatter: '{value} %'
        },
        series: [
            {
                name: '不近视',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{c} %"
                    }
                },
                data: levelData1
            },
            {
                name: '轻度近视',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{c} %"
                    }
                },
                data: levelData2

            },
            {
                name: '中度近视',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{c} %"
                    }
                },
                data: levelData3

            },
            {
                name: '重度近视',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{c} %"
                    }
                },
                data: levelData4

            },

        ]
    };
    myChart.setOption(option);

    var es_table = $("tbody[class='777']");
    es_table.children().remove();
    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"][0] + "%</td>" + "<td>" + data["dict"]["1"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"][2] + "%</td>" + "<td>" + data["dict"]["1"]["2"][3] + "%</td></tr>");
        es_table.append(primaryNode);
    }
    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"][0] + "%</td>" + "<td>" + data["dict"]["2"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"][2] + "%</td>" + "<td>" + data["dict"]["2"]["2"][3] + "%</td></tr>");
        es_table.append(juniorNode);

    }
    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"][0] + "%</td>" + "<td>" + data["dict"]["3"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"][2] + "%</td>" + "<td>" + data["dict"]["3"]["2"][3] + "%</td></tr>");
        es_table.append(highNode);
    }
}

function draw_tooth_level(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-9'));
    option = {
        title: {
            text: '学生口腔健康等级分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: data["level"]
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
                name: '所有学生牙齿情况分布',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['all'][1], name: data['level'][0]},
                    {value: data['all'][2], name: data['level'][1]},
                    {value: data['all'][3], name: data['level'][2]},
                    {value: data['all'][4], name: data['level'][3]},
                ]
            }
        ]
    };
    myChart.setOption(option);

    var tt_table = $("tbody[class='888']");
    tt_table.children().remove();
    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"][0] + "%</td>" + "<td>" + data["dict"]["1"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"][2] + "%</td>" + "<td>" + data["dict"]["1"]["2"][3] + "%</td></tr>");
        tt_table.append(primaryNode);
    }
    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"][0] + "%</td>" + "<td>" + data["dict"]["2"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"][2] + "%</td>" + "<td>" + data["dict"]["2"]["2"][3] + "%</td></tr>");
        tt_table.append(juniorNode);
    }

    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"][0] + "%</td>" + "<td>" + data["dict"]["3"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"][2] + "%</td>" + "<td>" + data["dict"]["3"]["2"][3] + "%</td></tr>");
        tt_table.append(highNode);
    }

}

function draw_lung_level(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-11'));
    option = {
        title: {
            text: '学生肺活量等级分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['不及格', '及格', '良好', '优秀']
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
                name: '所有学生肺活量情况分布',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['all']['不及格'], name: '不及格'},
                    {value: data['all']['及格'], name: '及格'},
                    {value: data['all']['良好'], name: '良好'},
                    {value: data['all']['优秀'], name: '优秀'},
                ]
            }
        ]
    };
    myChart.setOption(option);

    var tt_table = $("tbody[class='333']");
    tt_table.children().remove();
    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(primaryNode);
    }
    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(juniorNode);
    }
    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(highNode);
    }

}

function draw_overall_level(data, sp) {
    var myChart = echarts.init(document.getElementById('chart-grade-20'));
    option = {
        title: {
            text: '学生体质综合状况分布',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: data["level"]
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
                name: '所有学生体质综合状况情况分布',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: data['all'][1], name: data['level'][0]},
                    {value: data['all'][2], name: data['level'][1]},
                    {value: data['all'][3], name: data['level'][2]},
                    {value: data['all'][4], name: data['level'][3]},
                ]
            }
        ]
    };
    myChart.setOption(option);

    var tt_table = $("tbody[class='1111']");
    tt_table.children().remove();

    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"][0] + "%</td>" + "<td>" + data["dict"]["1"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"][2] + "%</td>" + "<td>" + data["dict"]["1"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"][0] + "%</td>" + "<td>" + data["dict"]["1"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"][2] + "%</td>" + "<td>" + data["dict"]["1"]["2"][3] + "%</td></tr>");
        tt_table.append(primaryNode);
    }
    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"][0] + "%</td>" + "<td>" + data["dict"]["2"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"][2] + "%</td>" + "<td>" + data["dict"]["2"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"][0] + "%</td>" + "<td>" + data["dict"]["2"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"][2] + "%</td>" + "<td>" + data["dict"]["2"]["2"][3] + "%</td></tr>");
        tt_table.append(juniorNode);
    }
    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["-1"][3] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"][0] + "%</td>" + "<td>" + data["dict"]["3"]["1"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"][2] + "%</td>" + "<td>" + data["dict"]["3"]["1"][3] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"][0] + "%</td>" + "<td>" + data["dict"]["3"]["2"][1] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"][2] + "%</td>" + "<td>" + data["dict"]["3"]["2"][3] + "%</td></tr>");
        tt_table.append(highNode);
    }

}

function draw_atest_histo(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-13'));
    option = {
        title: {
            text: '学生各类测试等级分布图',
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
            }
        },
        legend: {
            data: ['不及格', '及格', '良好', '优秀'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: ['耐力项目', '速度灵巧项目'],
                axisPointer: {
                    type: 'shadow'
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '百分比',
                interval: 10,
            }
        ],
        series: [
            {
                name: '不及格',
                type: 'bar',
                data: [data["naili"]["all"]["不及格"], data["speed"]["all"]["不及格"]],
                itemStyle: {
                    normal: {
                        color: '#d14a61',
                    }
                }
            },
            {
                name: '及格',
                type: 'bar',
                data: [data["naili"]["all"]["及格"], data["speed"]["all"]["及格"]],
                itemStyle: {
                    normal: {
                        color: '#5793f3'
                    }
                }
            },
            {
                name: '良好',
                type: 'bar',
                data: [data["naili"]["all"]["良好"], data["speed"]["all"]["良好"]],
                itemStyle: {
                    normal: {
                        color: '#EA7500',
                    }
                }
            },
            {
                name: '优秀',
                type: 'bar',
                data: [data["naili"]["all"]["优秀"], data["speed"]["all"]["优秀"]],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function draw_naili_level(data, sp) {
    var tt_table = $("tbody[class='111']");
    tt_table.children().remove();
    if (sp == "-1" || sp == "1") {

        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(primaryNode);
    }

    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(juniorNode);
    }

    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(highNode);
    }
}

function draw_speed_level(data, sp) {
    var tt_table = $("tbody[class='222']");
    tt_table.children().remove();

    if (sp == "-1" || sp == "1") {
        var primaryNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">小学</th>" +
            "<td>总体</td><td>" + data["dict"]["1"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["1"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["1"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["1"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["1"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(primaryNode);

    }

    if (sp == "-1" || sp == "2") {
        var juniorNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">初中</th>" +
            "<td>总体</td><td>" + data["dict"]["2"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["2"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["2"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["2"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["2"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(juniorNode);
    }

    if (sp == "-1" || sp == "3") {
        var highNode = $("<tr><th class=\"text-center\" rowspan=\"3\" style=\"vertical-align: middle;\">高中</th>" +
            "<td>总体</td><td>" + data["dict"]["3"]["-1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["-1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["-1"]["优秀"] + "%</td></tr>" +
            "<tr><td>男生</trtd><td>" + data["dict"]["3"]["1"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["1"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["1"]["优秀"] + "%</td></tr>" +
            "<tr><td>女生</td><td>" + data["dict"]["3"]["2"]["不及格"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["及格"] + "%</td>" +
            "<td>" + data["dict"]["3"]["2"]["良好"] + "%</td>" + "<td>" + data["dict"]["3"]["2"]["优秀"] + "%</td></tr>");
        tt_table.append(highNode);
    }
}


function charts() {
    var school = $("#school").val();
    $.post("/web/inquiry/", {'school': school}, function (ret) {

        var myChart = echarts.init(document.getElementById('chart-geo-1'));
        option = {
            title: {
                text: '学生地域分布',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (人)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                text: ['多', '少'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {label: {show: true}},
                        emphasis: {label: {show: true}}
                    },
                    data: [
                        {name: '四川', value: ret['province_num']['四川']},
                        {name: '江西', value: ret['province_num']['江西']},
                        {name: '江苏', value: ret['province_num']['江苏']},
                        {name: '山东', value: ret['province_num']['山东']},
                        {name: '安徽', value: ret['province_num']['安徽']},
                        {name: '上海', value: ret['province_num']['上海']},
                        {name: '重庆', value: ret['province_num']['重庆']},
                        {name: '福建', value: ret['province_num']['福建']},
                        {name: '河南', value: ret['province_num']['河南']},
                        {name: '河北', value: ret['province_num']['河北']},
                        {name: '广东', value: ret['province_num']['广东']},
                        {name: '广西', value: ret['province_num']['广西']},
                        {name: '山西', value: ret['province_num']['山西']},
                        {name: '天津', value: ret['province_num']['天津']},
                        {name: '湖北', value: ret['province_num']['湖北']},
                        {name: '浙江', value: ret['province_num']['浙江']},
                        {name: '陕西', value: ret['province_num']['陕西']},
                        {name: '内蒙古', value: ret['province_num']['内蒙古']},
                        {name: '海南', value: ret['province_num']['海南']},
                        {name: '辽宁', value: ret['province_num']['辽宁']},
                        {name: '吉林', value: ret['province_num']['吉林']},
                        {name: '黑龙江', value: ret['province_num']['黑龙江']},
                        {name: '湖南', value: ret['province_num']['湖南']},
                        {name: '贵州', value: ret['province_num']['贵州']},
                        {name: '云南', value: ret['province_num']['云南']},
                        {name: '甘肃', value: ret['province_num']['甘肃']},
                        {name: '青海', value: ret['province_num']['青海']},
                        {name: '台湾', value: ret['province_num']['台湾']},
                        {name: '北京', value: ret['province_num']['北京']},
                        {name: '西藏', value: ret['province_num']['西藏']},
                        {name: '宁夏', value: ret['province_num']['宁夏']},
                        {name: '新疆', value: ret['province_num']['新疆']},
                        {name: '香港', value: ret['province_num']['香港']},
                        {name: '澳门', value: ret['province_num']['澳门']}
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-geo-2'));
        option = {
            title: {
                text: '各地域学生的平均成绩'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (分)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 70,
                max: 100,
                text: ['多', '少'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {label: {show: true}},
                        emphasis: {label: {show: true}}
                    },
                    data: [
                        {name: '四川', value: ret['score_province']['四川']},
                        {name: '江西', value: ret['score_province']['江西']},
                        {name: '江苏', value: ret['score_province']['江苏']},
                        {name: '山东', value: ret['score_province']['山东']},
                        {name: '安徽', value: ret['score_province']['安徽']},
                        {name: '上海', value: ret['score_province']['上海']},
                        {name: '重庆', value: ret['score_province']['重庆']},
                        {name: '福建', value: ret['score_province']['福建']},
                        {name: '河南', value: ret['score_province']['河南']},
                        {name: '河北', value: ret['score_province']['河北']},
                        {name: '广东', value: ret['score_province']['广东']},
                        {name: '广西', value: ret['score_province']['广西']},
                        {name: '山西', value: ret['score_province']['山西']},
                        {name: '天津', value: ret['score_province']['天津']},
                        {name: '湖北', value: ret['score_province']['湖北']},
                        {name: '浙江', value: ret['score_province']['浙江']},
                        {name: '陕西', value: ret['score_province']['陕西']},
                        {name: '内蒙古', value: ret['score_province']['内蒙古']},
                        {name: '海南', value: ret['score_province']['海南']},
                        {name: '辽宁', value: ret['score_province']['辽宁']},
                        {name: '吉林', value: ret['score_province']['吉林']},
                        {name: '黑龙江', value: ret['score_province']['黑龙江']},
                        {name: '湖南', value: ret['score_province']['湖南']},
                        {name: '贵州', value: ret['score_province']['贵州']},
                        {name: '云南', value: ret['score_province']['云南']},
                        {name: '甘肃', value: ret['score_province']['甘肃']},
                        {name: '青海', value: ret['score_province']['青海']},
                        {name: '台湾', value: ret['score_province']['台湾']},
                        {name: '北京', value: ret['score_province']['北京']},
                        {name: '西藏', value: ret['score_province']['西藏']},
                        {name: '宁夏', value: ret['score_province']['宁夏']},
                        {name: '新疆', value: ret['score_province']['新疆']},
                        {name: '香港', value: ret['score_province']['香港']},
                        {name: '澳门', value: ret['score_province']['澳门']}
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //学生成绩分布
        var myChart = echarts.init(document.getElementById('chart-grade-1'));
        option = {
            title: {
                text: '学生成绩分布',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-50', '50-60', '60-70', '70-80', '80-90', '90-100']
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
                    name: '成绩分布',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['num'][0], name: '0-50'},
                        {value: ret['num'][1], name: '50-60'},
                        {value: ret['num'][2], name: '60-70'},
                        {value: ret['num'][3], name: '70-80'},
                        {value: ret['num'][4], name: '80-90'},
                        {value: ret['num'][5], name: '90-100'}
                    ]
                }
            ]
        };
        myChart.setOption(option);

        //成绩与性别
        var myChart = echarts.init(document.getElementById('chart-grade-2'));
        var option = {
            title: {
                text: '成绩与性别',
                x: 'center'
            },
            dataset: {
                source: [
                    ['平均成绩', '平均成绩', '性别'],
                    [ret['ave_score'], ret['ave_score'], '总体'],
                    [ret['ave_score_male'], ret['ave_score_male'], '男'],
                    [ret['ave_score_female'], ret['ave_score_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '平均成绩'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 100,
                text: ['高', '低'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '平均\n成绩'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-grade-3'));
        option = {
            title: {
                text: '成绩与图书馆访问',
                subtext: '横坐标为一学期图书馆访问总次数',
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
            legend: {
                data: ['平均成绩', '最高成绩', '最低成绩'],
                y: 'bottom'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '成绩',
                    min: 0,
                    max: 100,
                    interval: 10,
                }
            ],
            series: [
                {
                    name: '平均成绩',
                    type: 'bar',
                    data: ret['score_lib_ave'],
                    itemStyle: {
                        normal: {
                            color: '#4f9D9D',
                        }
                    }
                },
                {
                    name: '最高成绩',
                    type: 'line',
                    data: ret['score_lib_max'],
                    itemStyle: {
                        normal: {
                            color: '#EA7500',
                        }
                    }
                },
                {
                    name: '最低成绩',
                    type: 'line',
                    data: ret['score_lib_min']
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //成绩与回寝时间
        var myChart = echarts.init(document.getElementById('chart-grade-4'));
        option = {
            title: {
                text: '成绩与回寝时间',
                subtext: '横坐标为一学期平均回寝时间',
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
            legend: {
                data: ['平均成绩', '最高成绩', '最低成绩'],
                y: 'bottom'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['0', '6', '12', '15', '18', '21', '22', '23'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '成绩',
                    min: 0,
                    max: 100,
                    interval: 10,
                }
            ],
            series: [
                {
                    name: '平均成绩',
                    type: 'bar',
                    data: ret['score_dormtime_ave'],
                    itemStyle: {
                        normal: {
                            color: '#4f9D9D',
                        }
                    }
                },
                {
                    name: '最高成绩',
                    type: 'line',
                    data: ret['score_dormtime_max'],
                    itemStyle: {
                        normal: {
                            color: '#EA7500'
                        }
                    }
                },
                {
                    name: '最低成绩',
                    type: 'line',
                    data: ret['score_dormtime_min']
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //累积分布函数
        var myChart = echarts.init(document.getElementById('chart-grade-5'));
        option = {
            title: {
                text: '累积分布函数',
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '概率密度',
                    type: 'line',
                    data: ret['cdfall']
                }
            ]
        };
        myChart.setOption(option);

        //概率密度函数
        var myChart = echarts.init(document.getElementById('chart-grade-6'));
        option = {
            title: {
                text: '概率密度函数',
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '概率密度',
                    type: 'line',
                    data: ret['pdfall'],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
            ]
        };
        myChart.setOption(option);

        //体质成绩分布
        var myChart = echarts.init(document.getElementById('chart-health-1'));

        option = {
            title: {
                text: '体质测试成绩分布',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-50', '50-60', '60-70', '70-80', '80-90', '90-100']
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
                    name: '体质测试',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['health_num'][0], name: '0-50'},
                        {value: ret['health_num'][1], name: '50-60'},
                        {value: ret['health_num'][2], name: '60-70'},
                        {value: ret['health_num'][3], name: '70-80'},
                        {value: ret['health_num'][4], name: '80-90'},
                        {value: ret['health_num'][5], name: '90-100'}
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //体质与性别
        var myChart = echarts.init(document.getElementById('chart-health-2'));
        var option = {
            title: {
                text: '体质与性别',
                x: 'center'
            },
            dataset: {
                source: [
                    ['成绩', '成绩', '性别'],
                    [ret['ave_health_score'], ret['ave_health_score'], '总体'],
                    [ret['ave_health_score_male'], ret['ave_health_score_male'], '男'],
                    [ret['ave_health_score_female'], ret['ave_health_score_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '成绩'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 24,
                text: ['高', '底'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '成绩'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


        // 体质与回寝时间
        var myChart = echarts.init(document.getElementById('chart-health-3'));
        option = {
            title: {
                text: '体质与回寝时间',
                subtext: '横坐标为一学期平均回寝时间',
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
            legend: {
                data: ['平均成绩', '最高成绩', '最低成绩'],
                y: 'bottom'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['0', '6', '12', '15', '18', '21', '22', '23'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '成绩',
                    min: 0,
                    max: 100,
                    interval: 10,
                }
            ],
            series: [
                {
                    name: '平均成绩',
                    type: 'bar',
                    data: ret['health_dormtime_ave'],
                    itemStyle: {
                        normal: {
                            color: '#4f9D9D',
                        }
                    }
                },
                {
                    name: '最高成绩',
                    type: 'line',
                    data: ret['health_dormtime_max'],
                    itemStyle: {
                        normal: {
                            color: '#EA7500',
                        }
                    }
                },
                {
                    name: '最低成绩',
                    type: 'line',
                    data: ret['health_dormtime_min']
                }
            ]
        };
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-health-4'));
        option = {
            title: {
                text: '去校医院次数',
                subtext: '研究每人的一学期的总次数',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-10', '10-20', '20-30', '30-40', '40-50']
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
                    name: '成绩分布',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['hos_dis'][0], name: '0-10'},
                        {value: ret['hos_dis'][1], name: '10-20'},
                        {value: ret['hos_dis'][2], name: '20-30'},
                        {value: ret['hos_dis'][3], name: '30-40'},
                        {value: ret['hos_dis'][4], name: '40-50'}
                    ]
                }
            ]
        };
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-health-5'));
        var option = {
            title: {
                text: '去校医院次数与性别',
                subtext: '研究平均每人一学期总次数',
                x: 'center'
            },
            dataset: {
                source: [
                    ['次数', '次数', '性别'],
                    [ret['ave_hos'], ret['ave_hos'], '总体'],
                    [ret['ave_hos_male'], ret['ave_hos_male'], '男'],
                    [ret['ave_hos_female'], ret['ave_hos_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '次数'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 100,
                text: ['高', '低'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '次'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-life-1'));
        option = {
            title: {
                text: '回寝时间分布',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0:00-6:00', '6:00-12:00', '12:00-18:00', '18:00-22:00', '22:00-24:00']
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
                    name: '成绩分布',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['dorm_num'][0], name: '0:00-6:00'},
                        {value: ret['dorm_num'][1], name: '6:00-12:00'},
                        {value: ret['dorm_num'][2], name: '12:00-18:00'},
                        {value: ret['dorm_num'][3], name: '18:00-22:00'},
                        {value: ret['dorm_num'][4], name: '22:00-24:00'}
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-life-2'));
        var option = {
            title: {
                text: '回寝时间与性别',
                x: 'center'
            },
            dataset: {
                source: [
                    ['平均回寝时间', '平均回寝时间', '性别'],
                    [ret['ave_time'], ret['ave_time'], '总体'],
                    [ret['ave_time_male'], ret['ave_time_male'], '男'],
                    [ret['ave_time_female'], ret['ave_time_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '平均回寝时间'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 24,
                text: ['晚', '早'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '平均\n回寝时间'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


        var myChart = echarts.init(document.getElementById('chart-life-3'));

        option = {
            title: {
                text: '消费分布',
                subtext: '研究每人的平均每月消费',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-100', '100-200', '200-300', '300-400', '400-500']
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
                    name: '成绩分布',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['cost_dis'][0], name: '0-100'},
                        {value: ret['cost_dis'][1], name: '100-200'},
                        {value: ret['cost_dis'][2], name: '200-300'},
                        {value: ret['cost_dis'][3], name: '300-400'},
                        {value: ret['cost_dis'][4], name: '400-500'}
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-life-4'));
        var option = {
            title: {
                text: '消费与性别',
                subtext: '研究每人每月平均消费',
                x: 'center'
            },
            dataset: {
                source: [
                    ['平均消费', '平均消费', '性别'],
                    [ret['ave_cost'], ret['ave_cost'], '总体'],
                    [ret['ave_cost_male'], ret['ave_cost_male'], '男'],
                    [ret['ave_cost_female'], ret['ave_cost_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '平均消费'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 100,
                text: ['高', '低'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '平均\n消费'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-library-1'));

        option = {
            title: {
                text: '图书馆访问次数分布',
                subtext: '纵坐标为一学期访问图书馆总次数',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-20', '20-40', '40-60', '60-80', '80-100']
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
                    name: '人数（占比）',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['visit_dis'][0], name: '0-20'},
                        {value: ret['visit_dis'][1], name: '20-40'},
                        {value: ret['visit_dis'][2], name: '40-60'},
                        {value: ret['visit_dis'][3], name: '60-80'},
                        {value: ret['visit_dis'][4], name: '80-100'}
                    ]
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-library-2'));
        var option = {
            title: {
                text: '图书馆访问与性别',
                subtext: '横坐标为每人一学期访问图书馆总次数的均值',
                x: 'center'
            },
            dataset: {
                source: [
                    ['平均值', '平均值', '性别'],
                    [ret['ave_visit'], ret['ave_visit'], '总体'],
                    [ret['ave_visit_male'], ret['ave_visit_male'], '男'],
                    [ret['ave_visit_female'], ret['ave_visit_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '次'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 24,
                text: ['高', '低'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '次'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-library-3'));

        option = {
            title: {
                text: '借书次数分布',
                subtext: '纵坐标为一学期借书总次数',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['0-20', '20-40', '40-60', '60-80', '80-100']
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
                    name: '人数（占比)',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: ret['book_dis'][0], name: '0-20'},
                        {value: ret['book_dis'][1], name: '20-40'},
                        {value: ret['book_dis'][2], name: '40-60'},
                        {value: ret['book_dis'][3], name: '60-80'},
                        {value: ret['book_dis'][4], name: '80-100'}
                    ]
                }
            ]
        };

        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('chart-library-4'));
        var option = {
            title: {
                text: '借书次数与性别',
                subtext: '横坐标为每人一学期借书总次数的均值',
                x: 'center'
            },
            dataset: {
                source: [
                    ['平均值', '平均值', '性别'],
                    [ret['ave_book'], ret['ave_book'], '总体'],
                    [ret['ave_book_male'], ret['ave_book_male'], '男'],
                    [ret['ave_book_female'], ret['ave_book_female'], '女']
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '次'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 24,
                text: ['高', '低'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: {formatter: '次'},
                        // Map the "product" column to Y axis
                        y: '性别'
                    }
                }
            ]
        };
        myChart.setOption(option);


        var myChart = echarts.init(document.getElementById('chart-health-6'));
        option = {
            title: {
                text: '去校医院次数与体质',
                subtext: '横坐标为体质测试成绩',
                x: '25%'
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
            legend: {
                data: ['平均次数', '最高次数', '最低次数'],
                y: 'bottom'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '次',
                    min: 0,
                    max: 10,
                    interval: 1,
                }
            ],
            series: [
                {
                    name: '平均次数',
                    type: 'bar',
                    data: ret['hos_health'],
                    itemStyle: {
                        normal: {
                            color: '#4f9D9D'
                        }
                    }
                },
                {
                    name: '最高次数',
                    type: 'line',
                    data: ret['hos_health_max'],
                    itemStyle: {
                        normal: {
                            color: '#EA7500'
                        }
                    }
                },
                {
                    name: '最低次数',
                    type: 'line',
                    data: ret['hos_health_min']
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


    });
}

