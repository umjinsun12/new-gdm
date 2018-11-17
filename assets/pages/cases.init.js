/*
 Template Name: Annex - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: Chart js 
 */

!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
                case 'Line':
                    new Chart(ctx, {type: 'line', data: data, options: options});
                    break;
                case 'Doughnut':
                    new Chart(ctx, {type: 'doughnut', data: data, options: options});
                    break;
                case 'Pie':
                    new Chart(ctx, {type: 'pie', data: data, options: options});
                    break;
                case 'Bar':
                    new Chart(ctx, {type: 'bar', data: data, options: options});
                    break;
                case 'Radar':
                    new Chart(ctx, {type: 'radar', data: data, options: options});
                    break;
                case 'PolarArea':
                    new Chart(ctx, {data: data, type: 'polarArea', options: options});
                    break;
                case 'Bubble':
                    new Chart(ctx, {data: data, type: 'bubble', options: options});
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        //creating lineChart
        var lineChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September","October"],
            datasets: [
                {
                    label: "Sales Analytics",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(0, 151, 167, 0.2)",
                    borderColor: "#0097a7",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#0097a7",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#0097a7",
                    pointHoverBorderColor: "#eef0f2",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
                },
                {
                    label: "Monthly Earnings",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(235, 239, 242, 0.2)",
                    borderColor: "#ebeff2",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#ebeff2",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#ebeff2",
                    pointHoverBorderColor: "#eef0f2",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
                }
            ]
        };

        var lineOpts = {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 20,
                        stepSize: 10
                    }
                }]
            }
        };

        //this.respChart($("#lineChart"),'Line',lineChart, lineOpts);

        //donut chart
        var donutChart = {
            labels: [
                "Desktops",
                "Tablets"
            ],
            datasets: [
                {
                    data: [300, 210],
                    backgroundColor: [
                        "#5b6be8",
                        "#ebeff2"
                    ],
                    hoverBackgroundColor: [
                        "#5b6be8",
                        "#ebeff2"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };


        

        var bubbleChart = {
            labels: "Radiation",
            datasets: [
                {
                    label: ["Radiation"],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [
                        {
                      x: 180801,
                      y: 1,
                      r: 0
                    },{
                      x: 180818,
                      y: 1,
                      r: 10
                    },
                    {
                        x: 180819,
                        y: 1,
                        r: 10
                    },
                    {
                        x: 180820,
                        y: 1,
                        r: 10
                    },{
                        x: 180901,
                        y: 1,
                        r: 0
                      }]
                  }]
        }

        var options = {
            scales: {
              yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                  drawBorder: false,
                  display: false
                },
              }]
            }
          }

        this.respChart($("#bubble"),'Bubble',bubbleChart, options);



        var bubbleChart2 = {
            labels: "Radiation",
            datasets: [
                {
                    label: ["Inpatient"],
                    backgroundColor: "green",
                    borderColor: "green",
                    data: [
                        {
                      x: 180801,
                      y: 1.5,
                      r: 10
                    },{
                      x: 180818,
                      y: 1.5,
                      r: 10
                    },
                    {
                        x: 180819,
                        y: 1.5,
                        r: 10
                    },
                    {
                        x: 180820,
                        y: 1.5,
                        r: 10
                    },{
                        x: 180901,
                        y: 1.5,
                        r: 10
                      }]
                  },
                  {
                    label: ["Outpatient"],
                    backgroundColor: "blue",
                    borderColor: "blue",
                    data: [
                        {
                      x: 180804,
                      y: 0.5,
                      r: 10
                    },{
                      x: 180816,
                      y: 0.5,
                      r: 10
                    },
                    {
                        x: 180819,
                        y: 0.5,
                        r: 10
                    },
                    {
                        x: 180820,
                        y: 0.5,
                        r: 10
                    },{
                        x: 180901,
                        y: 0.5,
                        r: 10
                      }]
                  }]
        }

        var options2 = {
            scales: {
              yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                  drawBorder: false,
                  display: false
                },
              }]
            }
          }

        this.respChart($("#bubble2"),'Bubble',bubbleChart2, options2);




        //Pie chart
        var primaryChart = {
            labels: [
                "Bronchus and lung",
                "Breast",
                "Colon",
                "Unknown",
                "Ovary",
                "Pancreas",
                "Other and ill-defined sites",
                "Esophagus",
                "Stomach"
            ],
            datasets: [
                {
                    data: [3769,2583,1838,1562,971,937,729,487,454],
                    backgroundColor: [
                        "#B61173",
                        "#E0335E",
                        "#EF6B30",
                        "#FF8100",
                        "#FF9800",
                        "#E0335E",
                        "#EF6B30",
                        "#FF8100",
                        "#FF9800",
                    ],
                    hoverBackgroundColor: [
                        "#EF6B30",
                        "#FF8100",
                        "#FF9800",
                        "#B61173",
                        "#E0335E",
                        "#EF6B30",
                        "#FF8100",
                        "#FF9800",
                        "#E0335E",
                    ],
                    hoverBorderColor: "#fff"
                }]
        };

        var projectChart = {
            labels: [
                "Project"
            ],
            datasets: [
                {
                    data: [300],
                    backgroundColor: [
                        "#B61173",
                    ],
                    hoverBackgroundColor: [
                        "#FF9800",
                    ],
                    hoverBorderColor: "#fff"
                }]
        };

        var genderChart = {
            labels: [
                "female",
                "male"
            ],
            datasets: [
                {
                    data: [300, 180],
                    backgroundColor: [
                        "#FF9800",
                        "#E0335E",
                    ],
                    hoverBackgroundColor: [
                        "#E0335E",
                        "#FF9800",
                    ],
                    hoverBorderColor: "#fff"
                }]
        };

        var vitalChart = {
            labels: [
                "not reported",
            ],
            datasets: [
                {
                    data: [300],
                    backgroundColor: [
                        "#E0335E",
                    ],
                    hoverBackgroundColor: [
                        "#FF9800",
                    ],
                    hoverBorderColor: "#fff"
                }]
        };
        
        var options = {
            legend: {
                display: false
            }
        };
        this.respChart($("#primary"),'Pie',primaryChart, options);

        this.respChart($("#project"),'Pie',projectChart, options);
        
        this.respChart($("#gender"),'Pie',genderChart, options);
        
        this.respChart($("#vital"),'Pie',vitalChart, options);
        
        


        //barchart
        var barChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Sales Analytics",
                    backgroundColor: "#5b6be8",
                    borderColor: "#5b6be8",
                    borderWidth: 1,
                    hoverBackgroundColor: "#5b6be8",
                    hoverBorderColor: "#5b6be8",
                    data: [65, 59, 81, 45, 56, 80, 50,20]
                }
            ]
        };
        this.respChart($("#bar"),'Bar',barChart);


        //radar chart
        var radarChart = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "Desktops",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "Tablets",
                    backgroundColor: "rgba(103, 168, 228, 0.2)",
                    borderColor: "#67a8e4",
                    pointBackgroundColor: "#67a8e4",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#67a8e4",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.respChart($("#radar"),'Radar',radarChart);

        //Polar area  chart
        var polarChart = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    18
                ],
                backgroundColor: [
                    "#77c949",
                    "#0097a7",
                    "#ffbb44",
                    "#f32f53"
                ],
                label: 'My dataset', // for legend
                hoverBorderColor: "#fff"
            }],
            labels: [
                "Series 1",
                "Series 2",
                "Series 3",
                "Series 4"
            ]
        };
        this.respChart($("#polarArea"),'PolarArea',polarChart);
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);
