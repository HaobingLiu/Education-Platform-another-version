$(document).ready(function () {

    // alert(sp);
    $.ajax({
        url: '/web/query_xy/',
        type: 'POST',
        data: {'sp': $("#sp").val(), 'grade__': $("#grade__").val()},
        // dataType: 'JSON',
        // contentType: 'application/json;charset=utf-8',
        success: function (result) {
            draw_yuwen(result[0]);
            table_yuwen(result[0]);
            table_shuxue(result[0]);
            table_yingyu(result[0]);
            draw_shuxue(result[0]);
            draw_yingyu(result[0]);
            draw_ywfb(result[1]);
            draw_sxfb(result[1]);
            draw_yyfb(result[1]);
            table_gkqmks(result[1]);

        }

    });

    $("#sp").change(function () {
        $.ajax({
            url: '/web/query_xy/',
            type: 'POST',
            data: {'sp': $("#sp").val(), 'grade__': $("#grade__").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                draw_yuwen(result[0]);
                table_yuwen(result[0]);
                table_shuxue(result[0]);
                table_yingyu(result[0]);
                draw_shuxue(result[0]);
                draw_yingyu(result[0]);
                draw_ywfb(result[1]);
                draw_sxfb(result[1]);
                draw_yyfb(result[1]);
                table_gkqmks(result[1]);

            }

        });
    });

    $("#grade__").change(function () {
        $.ajax({
            url: '/web/query_xy/',
            type: 'POST',
            data: {'sp': $("#sp").val(), 'grade__': $("#grade__").val()},
            // dataType: 'JSON',
            // contentType: 'application/json;charset=utf-8',
            success: function (result) {
                draw_yuwen(result[0]);
                table_yuwen(result[0]);
                table_shuxue(result[0]);
                table_yingyu(result[0]);
                draw_shuxue(result[0]);
                draw_yingyu(result[0]);
                draw_ywfb(result[1]);
                draw_sxfb(result[1]);
                draw_yyfb(result[1]);
                table_gkqmks(result[1]);


            }

        });
    });



});


//语文
function draw_yuwen(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-yuwen'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生语文区考情况图',
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
            data: ['优秀率', '及格率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'][0],
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
                name: '优秀率',
                type: 'line',
                data: data['dataP'][1],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '及格率',
                type: 'line',
                data: data['dataP'][0],
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

function table_yuwen(data) {
    var table1 = $('#logtable1').DataTable();
    table1.clear().draw();

    ret = data["table_yw"];
    for(j = 0,len = ret.length; j < len; j++) {
        Grade = ret[j][0];
        //alert(StuID);

        Gender = ret[j][1];
        YouX = ret[j][2];
        JiG = ret[j][3];
        Avg = ret[j][4];

        table1.row.add([Grade,Gender,YouX,JiG,Avg]).draw();
    }
}

//数学
function draw_shuxue(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-shuxue'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生数学区考情况图',
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
            data: ['优秀率', '及格率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'][1],
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
                name: '优秀率',
                type: 'line',
                data: data['dataP'][3],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '及格率',
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

function table_shuxue(data) {
    var table1 = $('#logtable2').DataTable();
    table1.clear().draw();

    ret = data["table_sx"];
    for(j = 0,len = ret.length; j < len; j++) {
        Grade = ret[j][0];
        //alert(StuID);

        Gender = ret[j][1];
        YouX = ret[j][2];
        JiG = ret[j][3];
        Avg = ret[j][4];

        table1.row.add([Grade,Gender,YouX,JiG,Avg]).draw();
    }
}

//英语
function draw_yingyu(data) {
    var myChart = echarts.init(document.getElementById('chart-grade-yingyu'));
    // alert('here');
    option = {
        title: {
            text: '各年级学生数学区考情况图',
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
            data: ['优秀率', '及格率'],
            y: 'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: data['grade'][2],
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
                name: '优秀率',
                type: 'line',
                data: data['dataP'][5],
                itemStyle: {
                    normal: {
                        color: '#4f9D9D'
                    }
                }
            },
            {
                name: '及格率',
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

function table_yingyu(data) {
    var table1 = $('#logtable3').DataTable();
    table1.clear().draw();

    ret = data["table_yy"];
    for(j = 0,len = ret.length; j < len; j++) {
        Grade = ret[j][0];
        //alert(StuID);

        Gender = ret[j][1];
        YouX = ret[j][2];
        JiG = ret[j][3];
        Avg = ret[j][4];

        table1.row.add([Grade,Gender,YouX,JiG,Avg]).draw();
    }
}

//语文成绩分布
function draw_ywfb(dat) {
    var myChart = echarts.init(document.getElementById('chart-grade-ywfb'));

    option = {
        title: {
            text: '语文期末考试成绩分布图',
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
            data: ['<60', '60-65', '65-70', '70-75', '75-80', '80-85', '85-90', '90-95','95-100']
        },
        yAxis: {
            type: 'value',
            name: '人数'
        },
        series: [{
            data: dat['dataPs'][0],
            type: 'bar'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//数学成绩分布
function draw_sxfb(dat) {
    var myChart = echarts.init(document.getElementById('chart-grade-sxfb'));

    option = {
        title: {
            text: '数学期末考试成绩分布图',
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
            data: ['<60', '60-65', '65-70', '70-75', '75-80', '80-85', '85-90', '90-95','95-100']
        },
        yAxis: {
            type: 'value',
            name: '人数'
        },
        series: [{
            data: dat['dataPs'][1],
            type: 'bar'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//英语成绩分布
function draw_yyfb(dat) {
    var myChart = echarts.init(document.getElementById('chart-grade-yyfb'));

    option = {
        title: {
            text: '英语期末考试成绩分布图',
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
            data: ['<60', '60-65', '65-70', '70-75', '75-80', '80-85', '85-90', '90-95','95-100']
        },
        yAxis: {
            type: 'value',
            name: '人数'
        },
        series: [{
            data: dat['dataPs'][2],
            type: 'bar'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function table_gkqmks(data) {
    var table1 = $('#logtable-gkqmks').DataTable();
    table1.clear().draw();

    ret = data["dataTable"];
    for(j = 0,len = ret.length; j < len; j++) {
        tjl = ret[j][0];
        //alert(StuID);

        yw = ret[j][1];
        sx = ret[j][2];
        yy = ret[j][3];


        table1.row.add([tjl,yw,sx,yy]).draw();
    }
}