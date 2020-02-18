$(document).ready(function () {

    $.ajax({
        url: '/web/query_zz/',
        type: 'POST',
        data: {'sp':  $("#spppp").val()},
        // dataType: 'JSON',
        // contentType: 'application/json;charset=utf-8',
        success: function (result) {
            draw_dushujie(result[0]);
            draw_kejijie(result[0]);
            draw_tiyujie(result[0]);
            draw_yishujie(result[0]);
            draw_xiaoyunhui(result[0]);
            draw_qita(result[0]);
            draw_job(result[0]);
            table_job(result[0]);
            draw_sjob(result[0]);
            table_sjob(result[0]);
            draw_gwlg(result[0]);
            draw_shsj(result[0]);
            draw_shsj2(result[0]);


        }

    });


    $("#spppp").change(function () {
        $.ajax({
            url: '/web/query_zz/',
            type: 'POST',
            data: {'sp': $("#spppp").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                draw_dushujie(result[0]);
                draw_kejijie(result[0]);
                draw_tiyujie(result[0]);
                draw_yishujie(result[0]);
                draw_xiaoyunhui(result[0]);
                draw_qita(result[0]);
                draw_job(result[0]);
                table_job(result[0]);
                draw_sjob(result[0]);
                table_sjob(result[0]);
                draw_gwlg(result[0]);
                draw_shsj(result[0]);
                draw_shsj2(result[0]);


            }

        });
    });



});




//图书节开展情况
function draw_dushujie(data) {
    var myChart = echarts.init(document.getElementById('chart-exp-dushujie'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生读书节开展情况情况图',
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
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['参与率', '覆盖率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['dataP'][0],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '参与率',
                type: 'line',
                data: data['dataP'][1],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '覆盖率',
                type: 'line',
                data: data['dataP'][2],
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

//科技节开展情况
function draw_kejijie(data) {
    var myChart = echarts.init(document.getElementById('chart-exp-kejijie'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生科技节开展情况情况图',
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
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['参与率', '覆盖率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['dataP'][0],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '参与率',
                type: 'line',
                data: data['dataP'][3],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '覆盖率',
                type: 'line',
                data: data['dataP'][4],
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

//体育节开展情况
function draw_tiyujie(data) {
    var myChart = echarts.init(document.getElementById('chart-exp-tiyujie'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生体育节开展情况情况图',
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
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['参与率', '覆盖率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['dataP'][0],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '参与率',
                type: 'line',
                data: data['dataP'][5],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '覆盖率',
                type: 'line',
                data: data['dataP'][6],
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

//艺术节开展情况
function draw_yishujie(data) {
    var myChart = echarts.init(document.getElementById('chart-exp-yishujie'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生艺术节开展情况情况图',
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
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['参与率', '覆盖率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['dataP'][0],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '参与率',
                type: 'line',
                data: data['dataP'][7],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '覆盖率',
                type: 'line',
                data: data['dataP'][8],
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

//校运会项目开设情况
function draw_xiaoyunhui(dat) {
    var myChart = echarts.init(document.getElementById('chart-exp-xiaoyunhui'));

    option = {
        title: {
            text: '学校校运会项目开设情况',
            x: 'center'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['bar','line']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
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
        xAxis: {
            type: 'category',
            data: ['短跑', '中长跑', '跨栏', '投掷', '跳跃', '接力']
        },
        yAxis: {
            type: 'value',
            name: '比率'
        },
        series: [{
            data: dat['dataH'],
            type: 'bar'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//其他主题活动开展情况图
function draw_qita(dat) {
    var myChart = echarts.init(document.getElementById('chart-exp-qita'));

    option = {
        title: {
            text: '其他主题活动开展情况'
        },
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            // fontFamily: 'Arial, Verdana, sans...',
            fontSize: 11,
            fontStyle: 'bolder',
            // fontWeight: 'normal'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['bar','line']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['参与率', '覆盖率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['特色活动','节庆及仪式活动','其他活动']
        },
        series: [
            {
                name: '参与率',
                type: 'bar',
                data: dat['dataoOther'][0]
            },
            {
                name: '覆盖率',
                type: 'bar',
                data: dat['dataoOther'][1]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//班级职务开展情况图
function draw_job(dat) {
    var myChart = echarts.init(document.getElementById('chart-exp-job'));

    option = {
        title: {
            text: '班级职务开展情况图',
            x:'center'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['无职务','团委','小队长','中队长（班长、副班长、委员）']
        },
        series : [
            {
                name: '人数',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:dat['data4Job'],

                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function table_job(data) {
    var table1 = $('#table-job').DataTable();
    table1.clear().draw();

    ret = data["tableJob"];
    for(j = 0,len = ret.length; j < len; j++) {
        xd = ret[j][0];
        //alert(StuID);

        wd = ret[j][1];
        xb = ret[j][2];
        tw = ret[j][3];
        xdz = ret[j][4];
        zdz = ret[j][5];


        table1.row.add([xd,wd,xb,tw,xdz,zdz]).draw();
    }
}

//学校职务开展情况图
function draw_sjob(dat) {
    var myChart = echarts.init(document.getElementById('chart-exp-sjob'));

    option = {
        title: {
            text: '校内岗位开展情况图',
            x:'center'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['无职务','检查类','管理类','礼仪类','升护旗类','宣传广播类','其他类']
        },
        series : [
            {
                name: '人数',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:dat['data4Sjob'],

                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function table_sjob(data) {
    var table1 = $('#table-sjob').DataTable();
    table1.clear().draw();

    ret = data["tableSjob"];
    for(j = 0,len = ret.length; j < len; j++) {
        xd = ret[j][0];
        //alert(StuID);

        wd = ret[j][1];
        xb = ret[j][2];
        jc = ret[j][3];
        gl = ret[j][4];
        ly = ret[j][5];
        qz = ret[j][6];
        gb = ret[j][7];
        qt = ret[j][8];


        table1.row.add([xd,wd,xb,jc,gl,ly, qz, gb, qt]).draw();
    }
}

//岗位轮岗情况图
function draw_gwlg(data) {
    var myChart = echarts.init(document.getElementById('chart-gwlg'));
    // alert('here');
    option = {
        title: {
            text: '校内岗位轮岗情况图',
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
                magicType: {show: true, type: ['bar', 'lin']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['小学', '初中', '高中'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: ['四周及以下', '半学期', '一学期', '一学期以上'],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '小学',
                type: 'bar',
                data: data['data4gwlg'][0]
            },
            {
                name: '初中',
                type: 'bar',
                data: data['data4gwlg'][1]
            },
            {
                name: '高中',
                type: 'bar',
                data: data['data4gwlg'][2]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//社会实践活动开展情况
function draw_shsj(data) {
    var myChart = echarts.init(document.getElementById('chart-shsj'));
    // alert('here');
    option = {
        title: {
            text: '各年级社会实践活动开展情况图',
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
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['参与率', '覆盖率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['data4shsj'][0],
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
                name: '比率'
                // interval: ,
            }
        ],
        series: [
            {
                name: '参与率',
                type: 'line',
                data: data['data4shsj'][1],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '覆盖率',
                type: 'line',
                data: data['data4shsj'][2],
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

//v2
function draw_shsj2(dat) {
    var myChart = echarts.init(document.getElementById('chart-shsj2'));

    option = {
        title: {
            text: '各类社会实践活动开展情况'
        },
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 11,
            fontStyle: 'bolder',
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['bar','line']},
                // restore: {show: true},
                // saveAsImage: {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['参与率', '覆盖率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['科技文化类','基地实践类','军政训练类','参观考察类','志愿服务类','其他类']
        },
        series: [
            {
                name: '参与率',
                type: 'bar',
                data: dat['data4shsj2'][0]
            },
            {
                name: '覆盖率',
                type: 'bar',
                data: dat['data4shsj2'][1]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}