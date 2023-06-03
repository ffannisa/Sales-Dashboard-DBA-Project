//Highcharts Charting

// Showing Sales Order with Forecasting graph
$(function () {

    window.chart = new Highcharts.Chart({

        chart: {
            renderTo: 'container1',
            inverted: false
        },
        title: {
            text: 'Monthly Sales Order with Forecasting'
        },

        xAxis: xAxis1,
        
        yAxis: {
          title: {
            text: 'MYR'
          }
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return this.y;
                    }
                }
            }
        },
		tooltip: {
			shared: true
		},
        legend: {
            enabled: false
        },
        series: [{
            name: 'Prediction Interval',
            type: 'columnrange',
            data: col_range1
        }, {
            name: 'Orders Amount',
            type: 'line',
            data: series1
        }]

    });

});

// Showing Revenue with Forecasting graph
$(function () {

    window.chart = new Highcharts.Chart({

        chart: {
            renderTo: 'container2',
            inverted: false
        },
        title: {
            text: 'Monthly Revenue with Forecasting'
        },

        // subtitle: {
        //     text: 'Revenue with Forecasting'
        // },

        xAxis: xAxis2,

        yAxis: {
          title: {
            text: 'MYR'
          }
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return this.y;
                    }
                }
            }
        },
		tooltip: {
			shared: true
		},
        legend: {
            enabled: false
        },
        series: [{
            name: 'Prediction Interval',
            type: 'columnrange',
            data: col_rangea
        }, {
            name: 'Revenue',
            type: 'line',
            data: series2
        }]

    });

});

// Showing Sales Oder with Forecasting graph by Customers (Drill-down)
$(function () {

    window.chart = new Highcharts.Chart({

        chart: {
            renderTo: 'container5',
            inverted: false,
            events: {
                load: function () {
                    this.series.forEach(function (series) {
                        if (series.name !== 'Customer 1' && series.name !== 'Customer 1 PI') {
                            series.hide();
                        }
                    });
                }
            }
        },
        title: {
            text: null
        },

        subtitle: {
            text: 'Monthly Sales Order with Forecasting by Customers'
        },

        xAxis: xAxis1a,

        yAxis: {
          title: {
            text: 'MYR'
          }
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return this.y;
                    }
                }
            }
        },
        tooltip: {
            shared: true
        },
        legend: {
            enabled: true
        },
        series: series1a

    });

});

// Showing Revenue with Forecasting graph by Customers (Drill-down)
$(function () {

    window.chart = new Highcharts.Chart({

        chart: {
            renderTo: 'container6',
            inverted: false,
            events: {
                load: function () {
                    this.series.forEach(function (series) {
                        if (series.name !== 'Customer 1' && series.name !== 'Customer 1 PI') {
                            series.hide();
                        }
                    });
                }
            }
        },
        title: {
            text: null
        },

        subtitle: {
            text: 'Monthly Revenue with Forecasting by Customers'
        },

        xAxis: xAxis2a,

        yAxis: {
          title: {
            text: 'MYR'
          }
        },
        
        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return this.y;
                    }
                }
            }
        },
        tooltip: {
            shared: true
        },
        legend: {
            enabled: true
        },
        series: series2a

    });

});

// Showing Outstanding Sales Order graph and Drill-down by Month
var graph1 = Highcharts.chart('container3', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Yearly Outstanding Sales Order'
    },
    xAxis: xAxis3,
    yAxis: {
      min: 0,
      title: {
        text: 'MYR'
      }
    },
  plotOptions: {
    column: {
      colorByPoint: true,
      pointPadding: 0.05,
      groupPadding: 0.05,
    },
    series: {
      cursor: 'pointer',
      point: {
        events: {
          click: function() {
            if (graph2) {
              graph2.destroy();
              graph1 = Highcharts.chart('container3', chart1Options);
              graph2 = null;
            } else {
              if (this.category == "2021") {
                newChart(series_a);
              } else if (this.category == '2022') {
                newChart(series_b);
              } else if (this.category == '2023') {
                newChart(series_c);
              } else if (this.category == '2024') {
                newChart(series_d);
              }
            }
          }
        }
      }
    }
  },
  
    series: series3
  });
  
  var graph2 = null;
  var graphoptions = graph1.options; // save graph1 options
  
  function newChart(data) {
    if (graph2) {
        graph2.destroy();
    }
    graph2 = Highcharts.chart('container3', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Outstanding Sales Order'
      },
      xAxis: xAxis3a
      ,
      series: data
    });
  
    // Add button to toggle back to graph1
    graph2.renderer.button('Back', graph2.chartWidth - 82, 10, function() {
      graph2.destroy();
      graph1 = Highcharts.chart('container3', graphoptions);
      graph2 = null ;// recreate graph1 with saved options
    }).add();
  }
  
// Showing Sales Order and Revenue graph and Drill-down by Month
  var chart1 = Highcharts.chart('container4', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Yearly Sales Order Delivery and Revenue'
    },
    xAxis: xAxis4,
    yAxis: {
      min: 0,
      title: {
        text: "MYR"
      }
    },
  plotOptions: {
    column: {
      colorByPoint: true,
      pointPadding: 0.05,
      groupPadding: 0.05,
    },
    series: {
      cursor: 'pointer',
      point: {
        events: {
          click: function() {
            if (chart2) {
              chart2.destroy();
              chart1 = Highcharts.chart('container4', chart1Options);
              chart2 = null;
            } else {
              if (this.category == "2021") {
                secChart(series_1);
              } else if (this.category == '2022') {
                secChart(series_2);
              } else if (this.category == '2023') {
                secChart(series_3);
              } else if (this.category == '2024') {
                secChart(series_4);
              }
            }
          }
        }
      }
    }
  },
  
    series: series4
  });
  
  var chart2 = null;
  var chart1Options = chart1.options; // save chart1 options
  
  function secChart(data) {
    if (chart2) {
      chart2.destroy();
    }
    chart2 = Highcharts.chart('container4', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Sales Order Delivery and Revenue'
      },
      xAxis: xAxis4a
      ,
      series: data
    });
  
    // Add button to toggle back to chart1
    chart2.renderer.button('Back', chart2.chartWidth - 82, 10, function() {
      chart2.destroy();
      chart1 = Highcharts.chart('container4', chart1Options);
      chart2 = null ;// recreate chart1 with saved options
    }).add();
  }

