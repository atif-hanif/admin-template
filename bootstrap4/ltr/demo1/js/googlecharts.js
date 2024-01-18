/* Line Chart */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data1 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options1 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 250,
        vAxis: {
            title: 'k'
        },
    };

    var chart1 = new google.visualization.LineChart(document.getElementById('line'));

    chart1.draw(data1, options1);
}

/* Area Chart */

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
    var data2 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options2 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 250,
        vAxis: {
            title: 'k'
        },
    };

    var chart2 = new google.visualization.AreaChart(document.getElementById('area'));

    chart2.draw(data2, options2);
}

/* Bar Chart */

google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
    var data3 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options3 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        vAxis: {
            title: 'k'
        },
    };

    var chart3 = new google.visualization.BarChart(document.getElementById('bar'));

    chart3.draw(data3, options3);
}

/* Stacked Bar Chart */

google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data4 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options4 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        vAxis: {
            title: 'k'
        },
        isStacked: true
    };

    var chart4 = new google.visualization.BarChart(document.getElementById('stacked_bar'));

    chart4.draw(data4, options4);
}

/* Column Chart */

google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {
    var data5 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options5 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        vAxis: {
            title: 'k'
        },
    };

    var chart5 = new google.visualization.ColumnChart(document.getElementById('column'));

    chart5.draw(data5, options5);
}

/* Stacked Bar Chart */

google.charts.setOnLoadCallback(drawChart6);

function drawChart6() {
    var data6 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options6 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        vAxis: {
            title: 'k'
        },
        isStacked: true
    };

    var chart6 = new google.visualization.ColumnChart(document.getElementById('stacked_column'));

    chart6.draw(data6, options6);
}

/* Pie Chart */

google.charts.setOnLoadCallback(drawChart7);

function drawChart7() {
    var data7 = google.visualization.arrayToDataTable([
        ['Transactions', 'Total'],
        ['Sales', 23.1],
        ['Revenue', 17.3],
        ['Projects', 30.6],
        ['Orders', 28.9]
    ]);

    var options7 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
    };

    var chart7 = new google.visualization.PieChart(document.getElementById('pie'));

    chart7.draw(data7, options7);
}

/* Donut Chart */

google.charts.setOnLoadCallback(drawChart8);

function drawChart8() {
    var data8 = google.visualization.arrayToDataTable([
        ['Transactions', 'Total'],
        ['Sales', 23.1],
        ['Revenue', 17.3],
        ['Projects', 30.6],
        ['Orders', 28.9]
    ]);

    var options8 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        pieHole: 0.4,
    };

    var chart8 = new google.visualization.PieChart(document.getElementById('donut'));

    chart8.draw(data8, options8);
}

/* 3D Pie Chart */

google.charts.setOnLoadCallback(drawChart9);

function drawChart9() {
    var data9 = google.visualization.arrayToDataTable([
        ['Transactions', 'Total'],
        ['Sales', 23.1],
        ['Revenue', 17.3],
        ['Projects', 30.6],
        ['Orders', 28.9]
    ]);

    var options9 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 300,
        is3D: true,
    };

    var chart9 = new google.visualization.PieChart(document.getElementById('3dPie'));

    chart9.draw(data9, options9);
}

/* Stacked Area Chart */

google.charts.setOnLoadCallback(drawChart10);

function drawChart10() {
    var data10 = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Revenue', 'Projects', 'Orders'],
        ['Jan', 49.4, 83.6, 48.9, 42.4],
        ['Feb', 71.5, 78.8, 38.8, 33.2],
        ['Mar', 106.4, 128.5, 39.3, 34.5],
        ['Apr', 129.2, 149.4, 41.4, 39.7],
        ['May', 144.0, 184.0, 47.0, 52.6],
        ['Jun', 176.0, 234.5, 48.3, 75.5],
        ['Jul', 95.6, 105.0, 59.0, 57.4],
        ['Aug', 148.5, 174.3, 59.6, 60.4],
        ['Sep', 126.4, 191.2, 52.4, 47.6],
        ['Oct', 194.1, 213.5, 65.2, 39.1],
        ['Nov', 95.6, 106.6, 59.3, 46.8],
        ['Dec', 54.4, 92.3, 51.2, 51.1 ],
    ]);

    var options10 = {
        title: 'Transactions',
        curveType: 'function',
        legend: { 
            position: 'bottom',
        },
        height: 250,
        vAxis: {
            title: 'k'
        },
        isStacked: true,
    };

    var chart10 = new google.visualization.AreaChart(document.getElementById('StackedArea'));

    chart10.draw(data10, options10);
}