<template>
  <div class="content3">
       <Cont
      title="类别分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="100%"
      height="33%"
      heightone="100%"
    >
     <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="typechart" style="width: 100%; height: 100%"></div>
        </div>
      </div>
       </Cont>
         <Cont
      title="走势分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="100%"
      height="33%"
      heightone="100%"
    >
      <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="attchart" style="width: 100%; height: 100%"></div>
        </div>
      </div>
       </Cont>
         <Cont
      title="数据分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="100%"
      height="33%"
      heightone="100%"
    >
      <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="sqchart" style="width: 100%; height: 100%"></div>
        </div>
      </div>
       </Cont>
  </div>
</template>

<script>
import Cont from "./cont";
import option from './echarts3'
export default {
 components: {
    Cont,
  },
  methods:{
    getChart(){
       var myChart1 = this.$echarts.init(
        document.getElementById("typechart")
      );
       var myChart2 = this.$echarts.init(
        document.getElementById("attchart")
      );
      var myChart3 = this.$echarts.init(
        document.getElementById("sqchart")
      );
      myChart1.setOption(option.option1);
      myChart2.setOption(option.option2);
      myChart3.setOption(option.option3);
    }
  },
  mounted(){
    this.$nextTick( 
      this.getChart()
      )  
  }
}
</script>

<style lang='scss' scoped>
.content3 {
   width: 23%;
   height: 100%;
   color: white;
   .chart-one-one {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   }
}
</style>