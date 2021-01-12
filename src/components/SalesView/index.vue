<template>
  <div class="sales-bg" :data="salesData">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <selectOption @selectIndex="selectIndex" />
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div class="content">
            <div id="salesChart" class="content-salesChart"></div>
            <div class="content-rank">
              <div class="rank-title">排行榜</div>
              <div class="rank-centent">
                <div v-for="(item, index) in rank" :key="index">
                  <div class="ranknum">
                    <div :class="['normal', +index < 3 ? 'special' : '']">
                      {{ index+1 }}
                    </div>
                    <div class='name'>{{item.name}}</div>
                    <div class='money'>{{item.money}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import selectOption from "./components/selectOption";
export default {
  components: { selectOption },
  props: {
    salesData: {
      type: Object,
      default: {}
    }
  },
  // 定义属性
  data() {
    return {
      value1: [new Date(2020, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)],
      chartIndex: "1"
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    chartTitle() {
      if (this.chartIndex == "1") {
        return "年度销售额";
      } else {
        return "年度访问量";
      }
    },
    xSet() {
      if (this.chartIndex == "1") {
        return this.salesData.orderFullYearAxis;
      } else {
        return this.salesData.userFullYearAxis;
      }
    },
    data() {
      if (this.chartIndex == "1") {
        return this.salesData.orderFullYear;
      } else {
        return this.salesData.userFullYear;
      }
    },
    rank(){
       if (this.chartIndex == "1") {
        return this.salesData.orderRank;
      } else {
        return this.salesData.userRank;
      }
    }
  },
  // 监控data中的数据变化
  watch: {
    chartIndex() {
      this.getChart(this.chartTitle, this.xSet, this.data);
    }
  },
  // 方法集合
  methods: {
    selectIndex(index) {
      this.chartIndex = index;
    },
    getChart(title, xSet, data) {
      var myChart = this.$echarts.init(document.getElementById("salesChart"));
      var options = {
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: "#666"
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: "category",
          data: xSet,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            color: "#333"
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee"
            }
          }
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data: data
          }
        ],
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      };
      myChart.setOption(options);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {
    this.getChart(this.chartTitle, this.xSet, this.data);
  }
};
</script>

<style lang="scss" scoped>
.sales-bg {
  margin-top: 20px;
  .clearfix {
    display: flex;
    align-items: center;
    position: relative;
    .el-range-editor.el-input__inner {
      position: absolute;
      right: 0;
    }
  }
  .content {
    display: flex;
    position: relative;
    .content-salesChart {
      width: 624px;
      height: 270px;
    }
    .content-rank {
      position: absolute;
      right: 0;
      top: 0;
      width: 268px;
      height: 100%;
      .rank-title {
        height: 17px;
        width: 100%;
      }
      .rank-centent {
        .ranknum {
          display: flex;
          position: relative;
          margin-top:10px;
          .normal {
            width: 20px;
            height: 20px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .special {
            background: #000;
            border-radius: 50%;
            color: #fff;
          }
          .name{
              margin-left: 10px;
              color: #333;
          }
          .money{
            position: absolute;
             right: 0;
          }
        }
      }
    }
  }
}
</style>
