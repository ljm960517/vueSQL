import echarts from 'echarts';

var data = [
    [[28604,77,17099,'Australia',1990],[31163,77.4,2440,'Canada',1990],[1516,68,1605773,'China',1990],[13670,74.7,10082,'Cuba',1990],[28599,75,49805,'Finland',1990],[29476,77.1,569499,'France',1990],[31476,75.4,789237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870776,'India',1990],[29550,79.1,129285,'Japan',1990],[2076,67.9,201954,'North Korea',1990],[12087,72,42954,'South Korea',1990],[24021,75.4,33934,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,381958,'Poland',1990],[19349,69.6,1475652,'Russia',1990],[10670,67.3,53905,'Turkey',1990],[26424,75.7,57117,'United Kingdom',1990],[37062,75.4,252810,'United States',1990]],
    [[44056,81.8,23973,'Australia',2015],[43294,81.7,35927,'Canada',2015],[13334,76.9,1376043,'China',2015],[21291,78.5,11562,'Cuba',2015],[38923,80.8,55057,'Finland',2015],[37599,81.9,64345,'France',2015],[44053,81.1,80545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311027,'India',2015],[36162,83.5,126571,'Japan',2015],[1390,71.4,251317,'North Korea',2015],[34644,80.7,503439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,386194,'Poland',2015],[23038,73.13,143918,'Russia',2015],[19360,76.5,78630,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321771,'United States',2015]]
];

 var option = {
    backgroundColor: 'rgba(1,202,217,.2)',
    grid: {
                                    left:60,
                                    right:40,
                                    top:45,
                                    bottom:40
                                },
    title: {
      top: 5,
      left:20,
        textStyle:{
          fontSize:10,
          color:'rgba(255,255,255,.6)'
        },
        text: '环比类型：日环比'
    },
    legend: {
        right: 10,
        top: 5,
        textStyle:{
          fontSize:10,
          color:'rgba(255,255,255,.6)'
        },
        data: ['1990', '2015']
    },
    xAxis: {
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.2)'
        }
      },
      splitLine:{
        lineStyle:{
          color:'rgba(255,255,255,.1)'
        }
      },
      axisLabel:{
          color:"rgba(255,255,255,.7)"
      }
    },
    yAxis: {
      axisLine:{
        lineStyle:{
          color:'rgba(255,255,255,.2)'
        }
      },
      splitLine:{
        lineStyle:{
          color:'rgba(255,255,255,.1)'
        }
      },
      axisLabel:{
          color:"rgba(255,255,255,.7)"
      },

        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};

export default{
    option
}