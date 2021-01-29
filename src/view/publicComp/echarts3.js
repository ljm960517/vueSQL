var option1 = {
    color:['#76c4bf','#e5ffc7','#508097','#4d72d9'],
      backgroundColor: 'rgba(1,202,217,.2)',
      grid: {
                                      left:10,
                                      right:40,
                                      top:0,
                                      bottom:0,
                containLabel: true
                                  },
                // legend: {
                //     x : 'center',
                //     y : 'bottom',
                //     textStyle:{
                //       fontSize: 10,
                //       color:'rgba(255,255,255,.7)'
                //     },
                //     data:['涉蒙','涉疆','涉军','涉恐','涉藏','涉稳','涉警']
                // },
                calculable : true,
                series : [

                    {
                        name:'面积模式',
                        type:'pie',
                        radius : [10, 70],
                        center : ['50%', '50%'],
                        roseType : 'area',
                        data:[
                            {value:10, name:'一'},
                            {value:5, name:'二'},
                            {value:15, name:'三'},
                            {value:25, name:'四'},
                            {value:5, name:'五'},
                            {value:15, name:'六'},
                            {value:15, name:'七'}

                        ]
                    }
                ]
            };


var option2 = {
    color:['#7de494','#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
      backgroundColor: 'rgba(1,202,217,.2)',

      grid: {
        left:30,
        right:40,
        top:30,
        bottom:20,
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
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
          data: ['6-08','6-09','6-10','6-11','6-12','6-13','6-14']
      },
      yAxis: {
          type: 'value',
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
      },
      series: [
          {
              name:'2014年',
              type:'line',
              stack: '总量',
                areaStyle: {normal: {}},
              data:[120, 132, 101, 134, 90, 230, 210]
          }

      ]
      };

      var   option3 = {
        color:['#00f1fc','#00b7ee', '#5578cf', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
          backgroundColor: 'rgba(1,202,217,.2)',
          grid: {
                                          left:20,
                                          right:20,
                                          top:0,
                                          bottom:20
                                      },
                  legend: {
                    top:10,
                    textStyle:{
                      fontSize: 10,
                      color:'rgba(255,255,255,.7)'
                    },
                      data:['境外','境内']
                  },
                  series : [
           {
               name: '访问来源',
               type: 'pie',
               radius : '55%',
               center: ['50%', '55%'],
               data:[
                   {value:335, name:'境外'},
                   {value:310, name:'境内'}

               ],
               itemStyle: {
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
               }
           }
       ]
      };

export default{option1,option2,option3}