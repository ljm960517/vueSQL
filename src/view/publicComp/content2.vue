<template>
  <div class="content2">
      <Cont
      title="今日情况"
      status="已调节"
      time="2021-02"
      width="45%"
      widthone="45%"
      widthtwo="45%"
      height="66%"
      heightone="100%"
      heighttwo="100%"
    >
       <div slot="chart-one" style="width: 100%; height: 100%">
         <div class="chartHeight">
        <div class="chart-one-two">
          <div>今日总数</div>
          <div style="color:#eeb1fd">54</div>
          <div class="textimg">环比<span><img src="../../picture/iconup.png" alt="" width="50%"></span>%</div>
        </div>
        </div>
        <div class="chartHeight2">
          <div class="line"></div>
        </div>
         <div class="chartHeight">
        <div class="chart-one-two">
           <div>本周总数</div>
          <div style="color:#24c9ff">54</div>
          <div class="textimg">环比<span><img src="../../picture/icondown.png" alt="" width="50%"></span>3%</div>
        </div>
        </div>
      </div>

      <div slot="chart-two" style="width: 100%; height: 100%">
         <div class="chartHeight">
        <div class="chart-one-two">
          <div>今日总数</div>
          <div style="color:#ffff00">20</div>
          <div class="textimg">环比<span><img src="../../picture/icondown.png" alt="" width="50%"></span>%</div>
        </div>
        </div>
        <div class="chartHeight2">
          <div class="line"></div>
        </div>
         <div class="chartHeight">
        <div class="chart-one-two">
           <div>本周总数</div>
          <div style="color:#ff6c00">22</div>
          <div class="textimg">环比<span><img src="../../picture/iconup.png" alt="" width="50%"></span>3%</div>
        </div>
        </div>
      </div>
      
      </Cont>
      <Cont
      title="通知"
      status="已调节"
      time="2021-02"
      width="48%"
      widthone="100%"
      height="66%"
      heightone="100%"
    >
    <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-two">
          <div class="text" v-for="(item,index) in noticeManage" :key="index">
                 <div  style="width:100%" v-if="item.index>startIndex&&item.index<endIndex">{{item.index}}{{item.message}}{{item.time}}</div>
          </div>
        </div>
    </div>
      </Cont>
    <div class="other">
       <Cont
       title="同比分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="63%"
      widthtwo="33%"
      height="100%"
       heightone="100%"
      heighttwo="100%"
    >
     <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="pumiddboxtbott1" style="width: 100%; height: 100%"></div>
        </div>
      </div>
      <div slot="chart-two" style="width: 100%; height: 100%">
        <div class="chart-one-two" >
           <div style="color:white;font-size:20px">今日总数</div>
          <div style="color:#eeb1fd;font-size:40px">54</div>
        </div>
      </div>
    </Cont>
    </div>
</div>
</template>

<script>
import Cont from "./cont";
export default {
  data(){
    return{
      noticeManage: [
        { index: 1, message: '会议通知', time: '2019-11-27' },
        { index: 2, message: '电梯故障通知', time: '2019-11-27' },
        { index: 3, message: '停车通知', time: '2019-11-27' },
        { index: 4, message: '停水通知', time: '2019-11-27' },
        { index: 5, message: '社区互动', time: '2019-11-27' },
        { index: 6, message: '会议通知', time: '2019-11-27' },
        { index: 7, message: '电梯故障通知', time: '2019-11-27' },
        { index: 8, message: '停车通知', time: '2019-11-27' },
        { index: 9, message: '停气通知', time: '2019-11-27' },
        { index: 10, message: '社区互动', time: '2019-11-27' }
      ],
      startIndex:0,
      endIndex:6
    }
  },
   components: {
    Cont,
  },
  mounted(){
this.scroll()
this.$nextTick( 
      this.getChart()
      ) 
  },
  methods:{
    scroll(){
      setInterval(()=>{
        if(this.endIndex<=this.noticeManage.length+4){
           this.startIndex++,
           this.endIndex++
        }else{
          this.startIndex=0,
           this.endIndex=6
        }
      },2000)
    },
    getChart(){
      var myChart = this.$echarts.init(
        document.getElementById("pumiddboxtbott1")
      );
      var option = {
                       backgroundColor: 'rgba(1,202,217,.2)',
                            grid: {
                                      left:60,
                                      right:60,
                                      top:70,
                                      bottom:40
                                    },

                      toolbox: {
                          feature: {
                              dataView: {show: true, readOnly: false},
                              magicType: {show: true, type: ['line', 'bar']},
                              restore: {show: true},
                              saveAsImage: {show: true}
                          }
                      },
                      legend: {
                        top:10,
                        textStyle:{
                          fontSize: 10,
                          color:'rgba(255,255,255,.7)'
                        },
                          data:['2017年','2018年','同比增速']
                      },
                      xAxis: [
                          {
                              type: 'category',
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

                              data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                              axisPointer: {
                                  type: 'shadow'
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value',
                              name: '',
                              min: 0,
                              max: 250,
                              interval: 50,
                              axisLine:{
                                lineStyle:{
                                  color:'rgba(255,255,255,.3)'
                                }
                              },
                              splitLine:{
                                lineStyle:{
                                  color:'rgba(255,255,255,.01)'
                                }
                              },

                              axisLabel: {
                                  formatter: '{value} ml'
                              }
                          },
                          {
                              type: 'value',
                              name: '',
                              max: 25,
                              interval: 5,
                              axisLine:{
                                lineStyle:{
                                  color:'rgba(255,255,255,.3)'
                                }
                              },
                              splitLine:{
                                lineStyle:{
                                  color:'rgba(255,255,255,.1)'
                                }
                              },
                              axisLabel: {
                                  formatter: '{value} °C'
                              }
                          }
                      ],
                      series: [

                          {
                              name:'2017年',
                              type:'bar',
                              itemStyle: {
                                              normal: {
                                                  color: new this.$echarts.graphic.LinearGradient(
                                                      0, 0, 0, 1,
                                                      [
                                                          {offset: 0, color: '#b266ff'},
                                                          {offset: 1, color: '#121b87'}
                                                      ]
                                                  )
                                              }
                                          },
                              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                          },
                          {
                              name:'2018年',
                              type:'bar',
                              itemStyle: {
                                              normal: {
                                                  color: new this.$echarts.graphic.LinearGradient(
                                                      0, 0, 0, 1,
                                                      [
                                                          {offset: 0, color: '#00f0ff'},
                                                          {offset: 1, color: '#032a72'}
                                                      ]
                                                  )
                                              }
                                          },
                              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                          },
                          {
                              name:'同比增速',
                              type:'line',
                              itemStyle: {
                                              normal: {
                                                  color: new this.$echarts.graphic.LinearGradient(
                                                      0, 0, 0, 1,
                                                      [
                                                          {offset: 0, color: '#fffb34'},
                                                          {offset: 1, color: '#fffb34'}
                                                      ]
                                                  )
                                              }
                                          },
                              yAxisIndex: 1,
                              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                          }
                      ]
                  };
                        myChart.setOption(option);
    }
  }
};
</script>

<style lang='scss' scoped>
.content2 {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content:space-around;
  position: relative;
}
.chart-one-one {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .ball {
    position: absolute;
    text-align: center;
    width: 35px;
    height: 35px;
    font-size: 12px;
    border-radius: 50%;
  }
}
.chartHeight{
  width: 100%;
  height: 49%;
}
.chartHeight2{
   width: 100%;
  height: 2%;
  .line{
    border-top: 1px solid green;
  }
}
.chart-one-two {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text{
    color: white;
    width: 100%;
    white-space: nowrap;
      overflow: hidden;
      font-size: 14px;
      line-height: 36px;
  }
  .text:nth-child(3n){
    background:rgba(1,202,217,.2);
    color:black
  }
 .textimg{
   display: flex;
   align-items: center;
   span{
     display: flex;
   align-items: center;
   justify-content: center;
   }
 }
}
.other{
  width: 100%;
  height: 33%;
  position: absolute;
  top:66%;
  left: 0;
}
</style>