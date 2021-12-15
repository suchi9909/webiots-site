
/// Area Chart ////
var generateDayWiseTimeSeries = function (baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 88400000;
        i++;
    }
    return series;
};
var options = {
    series: [
        {
            name: "Users",
            data: [45, 40, 140, 70, 150, 260, 240, 380, 110, 180, 270, 115, 70, 65, 50],
        },
    ],
    chart: {
        type: "area",
        width: "100%",
        stacked: true,
        offsetX: -10,
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min));
            },
        },
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        dashArray: 0,
    },
    markers: {
        size: 6,
        colors: "#fff",
        strokeColors: "#ff7c48",
        strokeWidth: 4,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3,
        },
    },
    colors: ["#ffdfde"],
    dataLabels: {
        enabled: false,
    },
    grid: {
        padding: {
            right: 0,
            bottom: 0,
            left: 0,
            top: 0,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 1,
            opacityTo: 0.4,
            shade: "light",
            type: "vertical",
        },
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
    },
    xaxis: {
        categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "jan", "Feb", "mar"],
    },
    responsive: [


    ],
};
var chart = new ApexCharts(document.querySelector("#area-chart"), options);
chart.render();

/// Area spine Chart ///
var options = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        width: "100%",
        type: 'area',
        offsetX: -10,
    },
    colors: ["#2289c9", "#9422c9",],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
var chart = new ApexCharts(document.querySelector("#spine-chart"), options);
chart.render();

/// Bar Chart ///
var options = {
    series: [
        {
            name: "Followers",
            data: [45, 30, 55, 15, 25],
        },
    ],
    chart: {
        type: "bar",
        width: "100%", offsetX: -10,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40%",

            distributed: true,
        },
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center',
        labels: {
            colors: "#222222",
            useSeriesColors: false
        },
        markers: {
            width: 13,
            height: 13,
            strokeWidth: 0,
            strokeColor: undefined,
            fillColors: ["#2289c9", "#9422c9", "#c95c22", "#c9b022", "#2289c9"],
            offsetX: "1",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: false,
        width: 2,
        borderRadius: "10px",
        opacity: 0,
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun"],
    },

    fill: {
        colors: ["#2289c9", "#9422c9", "#c95c22", "#c9b022", "#2289c9"],
        opacity: 0.5,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K";
            },
        },
    },

};
var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();

/// Horizontal Bar Chart ///
var options = {
    series: [
        {
            name: "Followers",
            data: [45, 30, 55, 15, 25],
        },
    ],
    chart: {
        type: "bar",
        width: "100%", offsetX: -10,
    },
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: "40%",

            distributed: true,
        },
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center',
        labels: {
            colors: "#222222",
            useSeriesColors: false
        },
        markers: {
            width: 13,
            height: 13,
            strokeWidth: 0,
            strokeColor: undefined,
            fillColors: ["#2289c9", "#9422c9", "#c95c22", "#c9b022", "#2289c9"],
            offsetX: "1",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: false,
        width: 2,
        borderRadius: "10px",
        opacity: 0,
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun"],
    },

    fill: {
        colors: ["#2289c9", "#9422c9", "#c95c22", "#c9b022", "#2289c9"],
        opacity: 0.5,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K";
            },
        },
    },

    responsive: [

    ],
};
var chart = new ApexCharts(document.querySelector("#bar-horizontal-chart"), options);
chart.render();
