<template>
  <div class="card3">
    <div class="title">销售走势图</div>
    <div id="card3" class="echart3"></div>
  </div>
</template>

<script>
export default {
  methods: {
    getChart() {
      var myChart3 = this.$echarts.init(document.getElementById("card3"));
      var option = {
        // backgroundColor: "#404A59",
        color: ["#036BC8", "#5EBEFC", "#2EF7F3"],

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
          data: ["2016年", "2017年", "2018年"],
        },
        grid: {
          left: "1%",
          right: "28%",
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
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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
            data: [90, 50, 39, 50, 120, 82, 80, 89, 92, 80, 102, 77],
          },
          {
            name: "",
            smooth: true,
            type: "line",
            symbolSize: 9,
            symbol: "circle",
            data: [70, 50, 50, 87, 90, 80, 70, 77, 86, 94, 96, 99],
          },
          {
            name: "",
            smooth: true,
            type: "line",
            symbolSize: 9,
            symbol: "circle",
            data: [100, 112, 80, 132, 60, 70, 90, 131, 121, 102, 95, 105],
          },
          {
            type: "pie",
            center: ["88%", "33%"],
            radius: ["30%", "35%"],
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: 335,
                name: "销售分析",
                itemStyle: {
                  normal: {
                    color: "#FF7E45",
                  },
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#ffd285",
                      fontSize: 14,
                    },
                  },
                },
              },
              {
                value: 180,
                name: "占位",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "#fff",
                  },
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#ffd285",
                    },
                    formatter: "\n\n销售渠道",
                  },
                },
              },
            ],
          },

          {
            type: "pie",
            center: ["88%", "72%"],
            radius: ["30%", "35%"],
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: 435,
                name: "销售分析",
                itemStyle: {
                  normal: {
                    color: "#4834CB",
                  },
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#fff",
                      fontSize: 14,
                    },
                  },
                },
              },
              {
                value: 100,
                name: "占位",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "#fff",
                  },
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#fff",
                    },
                    formatter: "\n\n销售方向",
                  },
                },
              },
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart3.setOption(option);
    },
  },
  mounted() {
    this.getChart();
  },
};
</script>


<style lang="scss" scoped>
.card3 {
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
  .echart3 {
    width: 100%;
    height: 80%;
  }
}
</style>