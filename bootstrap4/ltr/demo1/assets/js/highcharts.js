Highcharts.chart('line', {

    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('area', {
    chart: {
        type: 'area'
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('bar', {
    chart: {
        type: 'bar'
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('column', {
    chart: {
        type: 'column',
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('stacked_column', {
    chart: {
        type: 'column'
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('stacked_bar', {
    chart: {
        type: 'bar'
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            stacking: 'normal',
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('pie', {
    chart: {
        type: 'pie'
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        valueSuffix: '%'
    },

    subtitle: {
        text: '',
        align: ''
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        //verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },

    credits: {
        enabled: false,
    },

    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Sales',
                    y: 23.1
                },
                {
                    name: 'Revenue',
                    y: 17.3
                },
                {
                    name: 'Projects',
                    y: 30.6
                },
                {
                    name: 'Orders',
                    y: 28.9
                },
            ]
        }
    ],
});

Highcharts.chart('3dColumnStacked', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: ' Transactions',
        align: 'center'
    },

    xAxis: {
        labels: {
            skew3d: true,
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'K',
            skew3d: true,
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4],
        stack: 'Asia'
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3],
        stack: 'Asia'
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
        stack: 'Asia'
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
        stack: 'Asia'
    }],
});

Highcharts.chart('3dDonut', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: ' ',
        align: ''
    },

    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },

    tooltip: {
        valueSuffix: '%'
    },

    credits: {
        enabled: false,
    },

    series: [{
        name: 'Transactions',
        data: [
            ['Sales', 23.1],
            ['Revenue', 17.3],
            ['Orders', 28.9],
            ['Projects', 30.6],

        ]
    }]
});

Highcharts.chart('3dArea', {
    chart: {
        type: 'area',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 30,
            depth: 200
        }
    },
    
    title: {
        text: 'Transactions',
        align: 'center'
    },
    
    yAxis: {
        title: {
            text: 'K',
            x: -40
        },
        gridLineDashStyle: 'Dash'
    },
    
    xAxis: [{
        visible: false
    }, {
        visible: false
    }, {
        visible: false
    }],
    
    plotOptions: {
        area: {
            depth: 100,
            marker: {
                enabled: false
            },
            states: {
                inactive: {
                    enabled: false
                }
            }
        }
    },
    
    credits: {
        enabled: false,
    },

    
    tooltip: {
        valueSuffix: ' K'
    },
    
    series: [{
        name: 'Projects',
        data: [
            ['Jan', 48.9],
            ['Feb', 38.8],
            ['Mar', 39.3],
            ['Apr', 41.4],
            ['May', 47.0],
            ['Jun', 48.3],
            ['Jul', 59.0],
            ['Aug', 59.6],
            ['Sep', 52.4],
            ['Oct', 65.2],
            ['Nov', 59.3],
            ['Dec', 51.2],
        ]
    }, {
        name: 'Orders',
        data: [
            ['Jan', 42.4],
            ['Feb', 33.2],
            ['Mar', 34.5],
            ['Apr', 39.7],
            ['May', 52.6],
            ['Jun', 75.5],
            ['Jul', 57.4],
            ['Aug', 60.4],
            ['Sep', 47.6],
            ['Oct', 39.1],
            ['Nov', 46.8],
            ['Dec', 51.1],
        ]
    }, {
        name: 'Sales',
        data: [
            ['Jan', 49.9],
            ['Feb', 71.5],
            ['Mar', 106.4],
            ['Apr', 129.2],
            ['May', 144.0],
            ['Jun', 176.0],
            ['Jul', 95.6],
            ['Aug', 148.5],
            ['Sep', 126.4],
            ['Oct', 194.1],
            ['Nov', 95.6],
            ['Dec', 54.4],
        ]
    }, {
        name: 'Revenue',
        data: [
            ['Jan', 83.6],
            ['Feb', 78.8],
            ['Mar', 128.5],
            ['Apr', 149.4],
            ['May', 184.0],
            ['Jun', 234.5],
            ['Jul', 105.0],
            ['Aug', 174.3],
            ['Sep', 191.2],
            ['Oct', 213.5],
            ['Nov', 106.6],
            ['Dec', 92.3],
        ]
    }]
});

const chart = new Highcharts.Chart({
    chart: {
        renderTo: '3dColumn',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },

    credits: {
        enabled: false,
    },

    xAxis: {
        
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'K'
        }
    },

    tooltip: {
        headerFormat: '<span>{point.key}</span><br><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
        footerFormat: '</table>',
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: 'left'
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        column: {
            depth: 25
        }
    },

    series: [{
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 95.6, 148.5, 126.4, 194.1, 95.6, 54.4]
    }, {
        name: 'Revenue',
        data: [83.6, 78.8, 128.5, 149.4, 184.0, 234.5, 105.0, 174.3, 191.2, 213.5, 106.6, 92.3]
    }, {
        name: 'Projects',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }]
});

Highcharts.chart('3dPie', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    subtitle: {
        text: '',
        align: ''
    },

    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },

    credits: {
        enabled: false,
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            {
                    name: 'Sales',
                    y: 23.1
                },
                {
                    name: 'Revenue',
                    y: 17.3
                },
                {
                    name: 'Projects',
                    y: 30.6
                },
                {
                    name: 'Orders',
                    y: 28.9
                },
        ]
    }]
});
