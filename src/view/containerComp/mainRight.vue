<template>
  <div class="main-box-right">
    <div class="boxall">
      <div class="alltitle">图表一</div>
      <div class="allnav" id="echart4"></div>
      <div class="boxfoot"></div>
    </div>
    <div class="boxall">
      <div class="alltitle">图表二</div>
      <div class="allnav" id="echart5"></div>
      <div class="boxfoot"></div>
    </div>
    <div class="boxall">
      <div class="alltitle">图表三</div>
      <div class="allnav" id="echart6"></div>
      <div class="boxfoot"></div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import options from "./echartRight";
export default {
  components: {},
  // 定义属性
  data() {
    return {};
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getEchart() {
      var options1 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b",
            },
          },
        },
        legend: {
          top: "0%",
          data: ["安卓", "IOS"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },

            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
            ],
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20,
          },
        ],

        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "安卓",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            data: [
              3,
              4,
              3,
              4,
              3,
              4,
              3,
              6,
              2,
              4,
              2,
              4,
              3,
              4,
              3,
              4,
              3,
              4,
              3,
              6,
              2,
              4,
              2,
              4,
            ],
          },
          {
            name: "IOS",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            data: [
              5,
              3,
              5,
              6,
              1,
              5,
              3,
              5,
              6,
              4,
              6,
              4,
              8,
              3,
              5,
              6,
              1,
              5,
              3,
              7,
              2,
              5,
              1,
              4,
            ],
          },
        ],
      };
      var myChart1 = this.$echarts.init(document.getElementById("echart4"));
      myChart1.setOption(options1);
      var myChart2 = this.$echarts.init(document.getElementById("echart5"));
      myChart2.setOption(options.options2);
      var myChart3 = this.$echarts.init(document.getElementById("echart6"));
      myChart3.setOption(options.options3);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      this.getEchart();
    });
  },
};
</script>

<style lang='scss' scoped>
.main-box-right {
  width: 30%;
  .boxall {
    border: 1px solid rgba(25, 186, 139, 0.17);
    height: 154px;
    margin-bottom: 10px;
    position: relative;
    .alltitle {
      color: white;
      font-size: 14px;
      text-align: center;
    }
    .allnav {
      height: calc(100% - 20px);
      width: 100%;
    }
    .sy {
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 0.25rem;
    }
    .boxfoot {
      color: white;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
    .boxfoot:before {
      position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      bottom: 0;
      left: 0;
    }
    .boxfoot:after {
      position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      bottom: 0;
      right: 0;
    }
  }
  .boxall:before {
    position: absolute;
    width: 7px;
    height: 7px;
    content: "";
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
    top: 0;
    left: 0;
  }
  .boxall:after {
    position: absolute;
    width: 7px;
    height: 7px;
    content: "";
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
    top: 0;
    right: 0;
  }
}
</style>