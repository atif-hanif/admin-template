/* Line Chart */

var options1 = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
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

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var line = new ApexCharts(document.querySelector("#line"), options1);
  
line.render();

/* Area Chart */

var options2 = {
    chart: {
        type: 'area',
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
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
    }],

    dataLabels: {
        enabled: false
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var area = new ApexCharts(document.querySelector("#area"), options2);
  
area.render();

/* Column Chart */

var options3 = {
    chart: {
        type: 'bar',
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
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
    }],

    dataLabels: {
        enabled: false
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var column = new ApexCharts(document.querySelector("#column"), options3);
  
column.render();

/* Stacked Column Chart */

var options4 = {
    chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
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
    }],

    dataLabels: {
        enabled: false
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var stacked_column = new ApexCharts(document.querySelector("#stacked_column"), options4);
  
stacked_column.render();

/* Bar Chart */

var options5 = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    plotOptions: {
        bar: {
            horizontal: true,
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
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
    }],

    dataLabels: {
        enabled: false
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var bar = new ApexCharts(document.querySelector("#bar"), options5);
  
bar.render();

/* Stacked Bar Chart */

var options6 = {
    chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    plotOptions: {
        bar: {
            horizontal: true,
        }
    },

    title: {
        text: 'Transactions',
        align: 'center'
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
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
    }],

    dataLabels: {
        enabled: false
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
}
  
var stacked_bar = new ApexCharts(document.querySelector("#stacked_bar"), options6);
  
stacked_bar.render();

/* Pie Chart */

var options7 = {
    chart: {
        type: 'pie',
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
        }
    },

    labels: ['Sales', 'Revenue', 'Projects', 'Orders'],

    title: {
        text: 'Transactions',
        align: 'center'
    },

    series: [
        23.1, 17.3, 30.6, 28.9
    ],

    legend: {
        position: 'bottom'
    },
}
  
var pie = new ApexCharts(document.querySelector("#pie"), options7);
  
pie.render();

/* Donut Chart */

var options8 = {
    chart: {
        type: 'donut',
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false 
            }
        }
    },

    tooltip: {
        y: {
          formatter: function (val) {
            return val + " k"
          }
        }
    },

    labels: ['Sales', 'Revenue', 'Projects', 'Orders'],

    title: {
        text: 'Transactions',
        align: 'center'
    },

    series: [
        23.1, 17.3, 30.6, 28.9
    ],

    legend: {
        position: 'bottom'
    },
}
  
var donut = new ApexCharts(document.querySelector("#donut"), options8);
  
donut.render();