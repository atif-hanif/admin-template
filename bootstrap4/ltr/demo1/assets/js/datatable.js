$(document).ready(function() {
    $('#table1').DataTable();

    $('#table2').DataTable();

    $('#table3').DataTable({
        paging: false,
        scrollCollapse: true,
        scrollY: '200px'
    });

    $('#table4').DataTable();

    $('#table5').DataTable({
        dom: "<'row'<'col-sm-12 col-md-12 col-lg-3 enteries'l><'col-sm-12 col-md-12 col-lg-5 cust-btn'B><'col-sm-12 col-md-12 col-lg-4 dt-search-bar mt-2 pl-0'f>>" + "<'row'<'col-sm-12'rt>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
            extend: 'copy',
        }, {
            extend: 'csv',
        }, {
            extend: 'excel',
        }, {
            extend: 'pdf',
        }, {
            extend: 'print',
        }, ]
    });
});