           var data = [
             [5000, 10000, 6785.71],
             [4000, 10000, 6825],
             [3000, 6500, 4463.33],
             [2500, 5600, 3793.83],
             [2000, 4000, 3060],
             [2000, 4000, 3222.33],
             [2500, 4000, 3133.33],
             [1800, 4000, 3100],
             [1500, 1800, 1650]
           ];
           var cities = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
           var barHeight = 50;
           var option2 = {
             color: ['#7ecef4'],
             backgroundColor: 'rgba(1,202,217,.2)',
             grid: {
               left: 60,
               right: 60,
               top: 60,
               bottom: 40
             },
             legend: {
               show: true,
               data: ['价格范围', '均值']
             },
             angleAxis: {
               type: 'category',
               axisLine: {
                 lineStyle: {
                   color: 'rgba(255,255,255,.2)'
                 }
               },
               splitLine: {
                 lineStyle: {
                   color: 'rgba(255,255,255,.1)'
                 }
               },
               axisLabel: {
                 color: "rgba(255,255,255,.7)"
               },
               data: cities
             },
             radiusAxis: {
               axisLine: {
                 lineStyle: {
                   color: 'rgba(255,255,255,.2)'
                 }
               },
               splitLine: {
                 lineStyle: {
                   color: 'rgba(255,255,255,.1)'
                 }
               },
               axisLabel: {
                 color: "rgba(255,255,255,.5)"
               }
             },
             polar: {},
             series: [{
               type: 'bar',
               itemStyle: {
                 normal: {
                   color: 'transparent'
                 }
               },
               data: data.map(function (d) {
                 return d[0];
               }),
               coordinateSystem: 'polar',
               stack: '最大最小值',
               silent: true
             }, {
               type: 'bar',
               data: data.map(function (d) {
                 return d[1] - d[0];
               }),
               coordinateSystem: 'polar',
               name: '价格范围',
               stack: '最大最小值'
             }, {
               type: 'bar',
               itemStyle: {
                 normal: {
                   color: 'transparent'
                 }
               },
               data: data.map(function (d) {
                 return d[2] - barHeight;
               }),
               coordinateSystem: 'polar',
               stack: '均值',
               silent: true,
               z: 10
             }, {
               type: 'bar',
               data: data.map(function (d) {
                 return barHeight * 2
               }),
               coordinateSystem: 'polar',
               name: '均值',
               stack: '均值',
               barGap: '-100%',

               z: 10
             }],
             legend: {
               show: true,
               data: ['A', 'B', 'C']
             }
           };

           export default {option2}
