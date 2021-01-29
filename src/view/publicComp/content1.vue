<template>
  <div class="content1">
    <Cont
      title="来源分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="45%"
      widthtwo="45%"
      height="33%"
      heightone="100%"
      heighttwo="100%"
    >
      <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div v-for="(item, index) in list" :key="index">
            <div
              class="ball"
              :style="
                'background:' +
                item.color +
                ';' +
                'left:' +
                item.left +
                ';' +
                'top:' +
                item.top
              "
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div slot="chart-two" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="puleftboxtmidd2" style="width: 100%; height: 100%"></div>
        </div>
      </div>
    </Cont>
    <Cont
      title="环比分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="45%"
      widthtwo="45%"
      height="33%"
       heightone="100%"
      heighttwo="100%"
    >
      <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="puleftboxtmidd1" style="width: 100%; height: 100%"></div>
        </div>
      </div>
      <div slot="chart-two" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="puleftboxtmidd3" style="width: 100%; height: 100%"></div>
        </div>
      </div>
    </Cont>
    <Cont
      title="区域分析"
      status="已调节"
      time="2021-02"
      width="100%"
      widthone="60%"
      widthtwo="30%"
      height="33%"
       heightone="100%"
      heighttwo="100%"
    >
      <div slot="chart-one" style="width: 100%; height: 100%">
        <div class="chart-one-one">
          <div id="puleftboxtbott1" style="width: 100%; height: 100%"></div>
        </div>
      </div>
      <div slot="chart-two" style="width: 100%; height: 100%">
        <div class="chart-one-two">
          <div>今日总数</div>
          <div style="color:#eeb1fd">54</div>
          <div class="textimg">环比<span><img src="../../picture/iconup.png" alt="" width="50%"></span>%</div>
          <div>本周总数</div>
          <div style="color:#24c9ff">54</div>
          <div class="textimg">环比<span><img src="../../picture/icondown.png" alt="" width="50%"></span>3%</div>
        </div>
      </div>
    </Cont>
  </div>
</template>

<script>
import Cont from "./cont";
import optionone from "./echarts1";
import optiontwo from "./echarts2";
export default {
  data() {
    return {
      list: [
        { name: "内容1", color: "red", left: "0", top: "0" },
        { name: "内容2", color: "yellow", left: "20%", top: "20%" },
        { name: "内容3", color: "orange", left: "40%", top: "40%" },
        { name: "内容4", color: "green", left: "60%", top: "60%" },
        { name: "内容5", color: "gray", left: "80%", top: "80%" },
      ],
    };
  },
  components: {
    Cont,
  },
  methods: {
    getChart() {
      var myChart1 = this.$echarts.init(
        document.getElementById("puleftboxtmidd2")
      );
      var option1 = {
        color: ["#7ecef4"],
        backgroundColor: "rgba(1,202,217,.2)",
        grid: {
          left: 10,
          right: 0,
          top: 30,
          bottom: 0,
          containLabel: true,
        },

        xAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0)",
            },
          },
          axisLabel: {
            color: "rgba(255,255,255,0)",
          },
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.5)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            color: "rgba(255,255,255,.5)",
          },
          data: ["rank1", "rank2", "rank3", "rank4", "rank5"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  { offset: 0, color: "rgba(230,253,139,.7)" },
                  { offset: 1, color: "rgba(41,220,205,.7)" },
                ]),
              },
            },
            data: [18203, 23489, 29034, 104970, 131744],
          },
        ],
      };
      myChart1.setOption(option1);
      var myChart2 = this.$echarts.init(
        document.getElementById("puleftboxtmidd1")
      );
      myChart2.setOption(optionone.option2);
      var myChart3 = this.$echarts.init(
        document.getElementById("puleftboxtmidd3")
      );
      myChart3.setOption(option1);
      var myChart4 = this.$echarts.init(
        document.getElementById("puleftboxtbott1")
      );
      myChart4.setOption(optiontwo.option);
    },
  },
  mounted() {
    this.$nextTick( 
      this.getChart()
      )  
  },
};
</script>

<style lang='scss' scoped>
.content1 {
  width: 43%;
  height: 100%;
  color: white;
  .title {
    width: 100%;
    height: 10%;
    color: white;
    font-size: 14px;
    text-align: center;
    display: flex;
  }
  .chart {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;

    .chart-one {
      width: 45%;
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
      margin-right: 5px;
    }
    .chart-two {
      width: 45%;
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
      margin-left: 5px;
    }
    .chart-two {
      width: 45%;
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
      margin-left: 5px;
    }
    .chart-three {
      width: 90%;
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
    }
  }
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
.chart-one-two {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
</style>