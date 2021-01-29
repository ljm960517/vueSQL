<template>
  <div class="card1">
    <div class="title">本月销售额</div>
    <div class="numList">
                    <div class="t_min">订单量 <i></i></div>
                    <div class="t_min">客流量 100 <i></i></div>
                    <div class="t_min">转换率 8% <i class="down"></i></div>
                </div>
    <div id="card1" class="echart1"></div>
  </div>
</template>

<script>
export default {
  methods: {
    getChart() {
      var myChart1 = this.$echarts.init(document.getElementById("card1"));
      var option = {
        // backgroundColor: "#404A59",
        color: ["#036BC8", "#FFF", "#5EBEFC", "#2EF7F3"],

        title: [
          {
            text: "",
            left: "1%",
            top: "6%",
            textStyle: {
              color: "#fff",
            },
          },
          {
            text: "",
            left: "83%",
            top: "6%",
            textAlign: "center",
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          x: 300,
          top: "7%",
          textStyle: {
            color: "#ffd285",
          },
          data: ['3月', '4月'],
        },
        grid: {
          left: "1%",
          right: "3%",
          top: "3%",
          bottom: "0",
          containLabel: true,
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20'],
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          type: "value",
        },
        series: [
          {
            name: "",
            smooth: true,
            type: "line",
            symbolSize: 9,
            symbol: "circle",
            data: [1200, 1400, 1000, 1200, 3000, 2300, 1300, 1700, 1400, 1200, 3000, 2300, 2400, 2100, 2800, 3100, 3000, 2800, 2700, 2900],
          },
          {
            name: "",
            smooth: true,
            type: "line",
            symbolSize: 9,
            symbol: "circle",
            data:  [2000, 1200, 3000, 2000, 1700, 3000, 2000, 1800, 2000, 1900, 3000, 2000, 2500, 2200, 2600, 2700, 2900, 3000, 3200, 3100],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option);
    },
  },
  mounted() {
    this.getChart();
  },
};
</script>

<style lang="scss" scoped>
.card1 {
  background: url("../../picture/bg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  padding: 10px;
  box-sizing: border-box;
  .title {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
  }
  .numList{
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      .t_min{
          text-align: center;
          width:25%;
          height: 50%;
          background:url('../../picture/t_border.png') no-repeat;
          background-size: 100% 100%;
          margin: 0 10px;
          color: white;
      }
  }
  .echart1 {
    width: 100%;
    height: 60%;
  }
}
</style>