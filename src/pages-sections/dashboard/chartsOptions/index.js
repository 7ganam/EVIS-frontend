export const weeklyChartOptions = (theme) => ({
  grid: {
    show: false,
  },
  chart: {
    background: "transparent",
    toolbar: {
      show: false,
    },
    fontFamily: theme.typography.fontFamily,
  },
  colors: [theme.palette.info.main],
  dataLabels: {
    enabled: false,
  },
  states: {
    active: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  theme: {
    mode: theme.palette.mode,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        fontWeight: 500,
        colors: theme.palette.text.disabled,
      },
    },
  },
  yaxis: {
    min: 0,
    max: 10000,
    show: false,
    tickAmount: 4,
    labels: {
      style: {
        fontWeight: 500,
        colors: theme.palette.text.disabled,
      },
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
    y: {
      formatter: (val) => `$${val}`,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
      borderRadius: 5,
    },
  },
});
export const productShareChartOptions = (theme) => ({
  chart: {
    background: "transparent",
  },
  colors: [theme.palette.info.main],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "50%",
        margin: 0,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 6,
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
  },
  labels: ["Target"],
  theme: {
    mode: theme.palette.mode,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
});
export const totalOrderChartOptions = (theme) => ({
  grid: {
    show: false,
  },
  chart: {
    background: "transparent",
    toolbar: {
      show: false,
    },
    fontFamily: theme.typography.fontFamily,
  },
  colors: [theme.palette.info.main],
  dataLabels: {
    enabled: false,
  },
  states: {
    active: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  theme: {
    mode: theme.palette.mode,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        fontWeight: 500,
        colors: theme.palette.text.disabled,
      },
    },
  },
  yaxis: {
    min: 0,
    max: 10000,
    show: false,
    tickAmount: 4,
    labels: {
      style: {
        fontWeight: 500,
        colors: theme.palette.text.disabled,
      },
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
    y: {
      formatter: (val) => `$${val}`,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
      borderRadius: 5,
    },
  },
});
export const marketShareChartOptions = (theme) => ({
  chart: {
    background: "transparent",
    fontFamily: theme.typography.fontFamily,
  },
  colors: [
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.primary.main,
  ],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "30%",
        margin: 0,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 6,
          fontSize: "14px",
          fontWeight: "600",
        },
        total: {
          show: true,
          fontSize: "14px",
          fontWeight: "600",
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          },
        },
      },
    },
  },
  labels: ["Samsung", "Symphony", "Iphone"],
  theme: {
    mode: theme.palette.mode,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
});
export const analyticsChartOptions = (theme, categories) => ({
  chart: {
    background: "transparent",
    toolbar: {
      show: false,
    },
    fontFamily: theme.typography.fontFamily,
  },
  colors: [theme.palette.info.main, theme.palette.grey[600]],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: theme.palette.grey[300],
  },
  states: {
    active: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    normal: {
      filter: {
        type: "none",
      },
    },
  },
  theme: {
    mode: theme.palette.mode,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: categories,
    labels: {
      style: {
        fontSize: "14px",
        colors: theme.palette.grey[600],
      },
    },
  },
  yaxis: {
    min: 0,
    show: true,
    max: 100000,
    tickAmount: 6,
    opposite: theme.direction === "rtl",
    labels: {
      style: {
        fontSize: "14px",
        colors: theme.palette.grey[600],
      },
      formatter: (value) => `${(value / 1000).toFixed(0)}K`,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  stroke: {
    width: 7,
    colors: ["transparent"],
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "45%",
    },
  },
  legend: {
    position: "top",
    fontSize: "14px",
    markers: {
      radius: 50,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  responsive: [
    {
      breakpoint: 900,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "55%",
            borderRadius: 5,
          },
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          height: 550,
        },
        stroke: {
          width: 5,
          colors: ["transparent"],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "35%",
            borderRadius: 5,
          },
        },
        xaxis: {
          min: 0,
          max: 100000,
          tickAmount: 6,
          labels: {
            show: true,
            style: {
              fontSize: "14px",
              colors: theme.palette.grey[600],
            },
            formatter: (value) => `${(value / 1000).toFixed(0)}K`,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              fontSize: "14px",
              colors: theme.palette.grey[600],
            },
          },
        },
      },
    },
  ],
});
