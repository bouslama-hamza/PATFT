/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Total Revenue Report Chart - Bar Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
  totalRevenueChartOptions = {
    series: [
      {
        name: 'Temperature',
        data: [28, 27, 26, 25, 28, 29, 27]
      },
      {
        name: 'Humiditer',
        data: [70, 74, 72, 82, 76, 80, 68]
      }
    ],
    chart: {
      height: 300,
      stacked: true,
      type: 'bar',
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '33%',
        borderRadius: 12,
        startingShape: 'rounded',
        endingShape: 'rounded'
      }
    },
    colors: ['#008FFB', '#00E396'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 6,
      lineCap: 'round',
      colors: ['#fff']
    },
    legend: {
      show: true,
      horizontalAlign: 'left',
      position: 'top',
      markers: {
        height: 8,
        width: 8,
        radius: 12,
        offsetX: -3
      },
      labels: {
        colors: '#9aa0ac'
      },
      itemMargin: {
        horizontal: 10
      }
    },
    grid: {
      borderColor: '#e0e0e0',
      padding: {
        top: 0,
        bottom: -8,
        left: 20,
        right: 20
      }
    },
    xaxis: {
      categories: Array.from({ length: 7 }, () => {
        const now = new Date();
        return `${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;
      }),
      labels: {
        style: {
          fontSize: '13px',
          colors: '#9aa0ac'
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '13px',
          colors: '#9aa0ac'
        }
      }
    },
    responsive: [
      {
        breakpoint: 1700,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '32%'
            }
          }
        }
      },
      {
        breakpoint: 1580,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 1440,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '42%'
            }
          }
        }
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '48%'
            }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '40%'
            }
          }
        }
      },
      {
        breakpoint: 1040,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 11,
              columnWidth: '48%'
            }
          }
        }
      },
      {
        breakpoint: 991,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '30%'
            }
          }
        }
      },
      {
        breakpoint: 840,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '28%'
            }
          }
        }
      },
      {
        breakpoint: 640,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '32%'
            }
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '37%'
            }
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '52%'
            }
          }
        }
      },
      {
        breakpoint: 380,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '60%'
            }
          }
        }
      }
    ],
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    }
  };

if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
  const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
  totalRevenueChart.render();

  setInterval(() => {
      const newTemperatureData = Array.from({ length: 7 }, () => Math.floor(Math.random() * (29 - 24 + 1)) + 24);
      const newHumiditerData = Array.from({ length: 7 }, () => Math.floor(Math.random() * (83 - 72 + 1)) + 72);
      const now = new Date();
      const formattedTime = Array.from({ length: 7 }, (_, i) => {
        const time = new Date(now.getTime() + i * 3000);
        return `${time.getMinutes()}:${time.getSeconds().toString().padStart(2, '0')}`;
      });
      
      totalRevenueChart.updateOptions({
          xaxis: {
              categories: formattedTime
          }
      });

      totalRevenueChart.updateSeries([
          {
              name: 'Temperature',
              data: newTemperatureData
          },
          {
              name: 'Humiditer',
              data: newHumiditerData
          }
      ]);
  }, 4000);
}

  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------
  const growthChartEl = document.querySelector('#growthChart'),
    growthChartOptions = {
      series: [78],
      labels: ['Mieux'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '55%'
          },
          track: {
            background: cardColor,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: headingColor,
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Public Sans'
            },
            value: {
              offsetY: -25,
              color: headingColor,
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 5
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof growthChartEl !== undefined && growthChartEl !== null) {
    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
    growthChart.render();
  }

  // Client Radar Chart
  // --------------------------------------------------------------------
  const clientRadarChartEl = document.querySelector('#clientRadarChart'),
    clientRadarOptions = {
      series: [{
          name: 'Program',
          data: [2.8, 3.5, 4.7, 4.6, 3.0, 3.8]
      }],
      chart: {
          height: 300,
          type: 'radar',
      },
      dataLabels: {
          enabled: true
      },
      plotOptions: {
          radar: {
              size: 120,
              polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                      colors: ['#f8f8f8', '#fff']
                  }
              }
          }
      },
      colors: ['#FF4560'],
      markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
      },
      tooltip: {
          y: {
              formatter: function(val) {
              return val
              }
          }
      },
      xaxis: {
          categories: ['POSITIONING', 'OFFENSIVE', 'DEFENSIVE', 'TEAMWORK', 'STAMINA', 'STRENGTH']
      },
      yaxis: {
          tickAmount: 6,
          min: 0,
          max: 5,
          labels: {
              formatter: function (val) {
                  return val.toFixed(2);
              }
          }
      }

  };
  if (typeof clientRadarChartEl !== undefined && clientRadarChartEl !== null) {
    const clientRadarChart = new ApexCharts(clientRadarChartEl, clientRadarOptions);
    clientRadarChart.render();
  }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      chart: {
        height: 80,
        // width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Order Statistics Chart
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
      labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
      series: [85, 15, 50, 50],
      colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
      stroke: {
        width: 5,
        colors: cardColor
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.8125rem',
                color: axisColor,
                label: 'Weekly',
                formatter: function (w) {
                  return '38%';
                }
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }

  // Income Chart - Area chart
  // --------------------------------------------------------------------
  const incomeChartEl = document.querySelector('#incomeChart'),
    incomeChartConfig = {
      series: [
        {
          data: [24, 21, 30, 22, 42, 26, 35, 29]
        }
      ],
      chart: {
        height: 215,
        parentHeightOffset: 0,
        parentWidthOffset: 0,
        toolbar: {
          show: false
        },
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      legend: {
        show: false
      },
      markers: {
        size: 6,
        colors: 'transparent',
        strokeColors: 'transparent',
        strokeWidth: 4,
        discrete: [
          {
            fillColor: config.colors.white,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: config.colors.primary,
            strokeWidth: 2,
            size: 6,
            radius: 8
          }
        ],
        hover: {
          size: 7
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: shadeColor,
          shadeIntensity: 0.6,
          opacityFrom: 0.5,
          opacityTo: 0.25,
          stops: [0, 95, 100]
        }
      },
      grid: {
        borderColor: borderColor,
        strokeDashArray: 3,
        padding: {
          top: -20,
          bottom: -8,
          left: -10,
          right: 8
        }
      },
      xaxis: {
        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        },
        min: 10,
        max: 50,
        tickAmount: 4
      }
    };
  if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
    const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
    incomeChart.render();
  }

  // Expenses Mini Chart - Radial Chart
  // --------------------------------------------------------------------
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
    weeklyExpensesConfig = {
      series: [65],
      chart: {
        width: 60,
        height: 60,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          strokeWidth: '8',
          hollow: {
            margin: 2,
            size: '45%'
          },
          track: {
            strokeWidth: '50%',
            background: borderColor
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return '$' + parseInt(val);
              },
              offsetY: 5,
              color: '#697a8d',
              fontSize: '13px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors: config.colors.primary
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          top: -10,
          bottom: -15,
          left: -10,
          right: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
    const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
    weeklyExpenses.render();
  }

  // get data from /api/getsensordata/ using ajax
  // --------------------------------------------------------------------
  $.ajax({
    url: '/api/getsensordata/',
    type: 'GET',
    success: function(data){
      console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });
  
  const cardiacFrequencyChartEl = document.querySelector('#cardiacFrequencyChart');
const initialSeriesData = Array(12).fill(73); // Initial data, using a sample value
const cardiacFrequencyChartOptions = {
    series: [
        {
            name: 'Cardiac Frequency',
            data: initialSeriesData
        }
    ],
    chart: {
        height: 500,
        width: '95%',
        type: 'line',
        toolbar: { show: false }
    },
    colors: ['#008FFB'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // alternates rows' color
            opacity: 0.5
        },
    },
    xaxis: {
        categories: Array.from({ length: 12 }, (_, i) => i + 1),
        title: {
            text: 'Time (MM:SS)'
        }
    },
    markers: {
        size: 5,
        colors: ['#FF4560'],
        strokeColor: '#fff',
        strokeWidth: 2,
    }
};

if (cardiacFrequencyChartEl) {
    const cardiacFrequencyChart = new ApexCharts(cardiacFrequencyChartEl, cardiacFrequencyChartOptions);
    cardiacFrequencyChart.render();

    // Function to fetch data and update chart
    function fetchDataAndUpdateChart() {
        $.ajax({
            url: '/api/getsensordata/',
            type: 'GET',
            success: function(data) {
                const currentHeartbeat = data.heartbeat;
                const newSeriesData = [...cardiacFrequencyChart.w.config.series[0].data.slice(1), currentHeartbeat];

                const currentTime = new Date();
                const formattedTime = `${currentTime.getMinutes()}:${currentTime.getSeconds().toString().padStart(2, '0')}`;

                cardiacFrequencyChart.updateOptions({
                    xaxis: {
                        categories: Array.from({ length: 12 }, (_, i) => {
                            const time = new Date(currentTime.getTime() - (11 - i) * 4000);
                            return `${time.getMinutes()}:${time.getSeconds().toString().padStart(2, '0')}`;
                        })
                    }
                });

                cardiacFrequencyChart.updateSeries([{
                    name: 'Cardiac Frequency',
                    data: newSeriesData
                }]);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    // Initial fetch and setup
    fetchDataAndUpdateChart();

    // Fetch data every 4 seconds
    setInterval(fetchDataAndUpdateChart, 4000);
}



})();
