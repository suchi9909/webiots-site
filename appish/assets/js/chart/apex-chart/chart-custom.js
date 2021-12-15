/// Simple Pie Chart ///
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 350,
        type: 'pie',

    },
    dataLabels: {
        enabled: true,
        position: 'bottom',
        style: {
            colors: ['#222222']
        },
        dropShadow: {
            enabled: false,
        }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: false,
        style: {
            fontSize: '12px',
            fontFamily: undefined
        },
        marker: {
            show: true,
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
            strokeWidth: 1,
            strokeColor: '#222222',
            fillColors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
            offsetX: "1",
        },
    },
    fill: {
        colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde']
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: '#222222',
        width: 1,
    },
    responsive: [{
        breakpoint: 370,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#simple-pie-chart"), options);
chart.render();


/// Simple Donut Pie Chart ///
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 350,
        type: 'donut',

    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#222222']
        },
        dropShadow: {
            enabled: false,
        }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: false,
        style: {
            fontSize: '12px',
            fontFamily: undefined
        },
        marker: {
            show: true,
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
            strokeWidth: 1,
            strokeColor: '#222222',
            fillColors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
            offsetX: "1",
        },
    },
    fill: {
        colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde']
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: '#222222',
        width: 1,
    },
    responsive: [{
        breakpoint: 370,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#simple-donut-chart"), options);
chart.render();


/// Polar chart ///
var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
        width: 380,
        type: 'polarArea'
    },
    dataLabels: {
        enabled: false,
        style: {
            colors: ['#777777']
        },
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: false,
        style: {
            fontSize: '12px',
            fontFamily: undefined
        },
        marker: {
            show: true,
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
            colors: ["#777777"],
            useSeriesColors: false
        },
        markers: {
            width: 13,
            height: 13,
            strokeWidth: 1,
            strokeColor: '#222222',
            fillColors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde'],
            offsetX: "1",
        },
    },
    fill: {
        colors: ['#d6fffa', '#deffe2', '#fff5d9', '#e5e7ff', '#ffdfde']
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: '#222222',
        width: 1,
    },
    responsive: [{
        breakpoint: 370,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#polar-chart"), options);
chart.render();

/// Radar Chart ///
var options = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    chart: {
        height: 380,
        type: 'radar',

    },
    fill: {
        opacity: 1,
        colors: ["#e5e7ff"]
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["#222222"],
        dashArray: 0
    },
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    responsive: [{
        breakpoint: 370,
        options: {
            chart: {
                height: 300,
                offsetX: -15,
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#radar-chart"), options);
chart.render();
