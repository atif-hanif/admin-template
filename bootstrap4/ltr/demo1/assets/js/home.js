$(document).ready(function() {
    Highcharts.chart('container', {
        chart: {
            type: 'column',
            height: 405
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        credits: {
            enabled: false
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        },

        yAxis: {
            min: 0,
            title: {
                text: 'K'
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
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
});

$(document).ready(function() {
    $(function() {
        $("#calendar").simpleCalendar({
            // displays events
            displayEvent: true,
            // event dates
            events: [
                // generate new event after tomorrow for one hour
                {
                    startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                    endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                    summary: 'MEETING WITH CLIENT'
                },
                // generate new event for yesterday at noon
                {
                    startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
                    endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
                    summary: 'DISCUSSION WITH MARKETING TEAM'
                },
                // generate new event for the last two days
                {
                    startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
                    endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                    summary: 'DISCUSSION WITH TEAM ABOUT NEW PRODUCT LAUNCH'
                }
            ],
            // disable showing event details
            disableEventDetails: false,
            // disable showing empty date details
            disableEmptyDetails: false
        });
    });
});

$(document).ready(function() {
    $('#myTable').DataTable({
        dom: "<'row'<'col-sm-12 col-md-12 col-lg-3 enteries'l><'col-sm-12 col-md-12 col-lg-5 cust-btn'B><'col-sm-12 col-md-12 col-lg-4 dt-search-bar mt-2 pl-0'f>>" + "<'row'<'col-sm-12'rt>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            extend: 'copy',
            title: 'Projects'
        }, {
            extend: 'csv',
            title: 'Projects'
        }, {
            extend: 'excel',
            title: 'Projects'
        }, {
            extend: 'pdf',
            title: 'Projects'
        }, {
            extend: 'print',
            title: 'Projects'
        }, ]
    });
});

$(document).ready(function(){
    $('.fa-trash').click(function(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0766AD",
            cancelButtonColor: "#29ADB2",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    });       
});