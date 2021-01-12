<template>
  <div class="allSales" :data="allOrders">
    <commonCard title="累计销售额" :value="orderToday">
      <template v-slot:chart>
        <div id="allOrders" style="width:100%;height:50px"></div>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">¥{{ orderLastDay }}</span>
      </template>
    </commonCard>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import mixin from "../../../mixins/public";
import commonCard from "../../commonCard/index";
export default {
  mixins: [mixin],
  components: { commonCard },
  props: {
    allOrders: {
      type: Object,
      default: {}
    }
  },
  // 定义属性
  data() {
    return {};
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    orderToday() {
      return this.toThousands(this.allOrders.orderToday);
    },
    orderLastDay() {
      return this.toThousands(this.allOrders.orderLastDay);
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getChart() {
      var myChart = this.$echarts.init(document.getElementById("allOrders"));
      if (this.allOrders.orderTrend.length > 0) {
        var options = {
          //show是不显示x轴系数，boundaryGap：faLse就是贴边没有边距
          xAxis: {
            type: "category",
            show: false,
            boundaryGap: false
          },
          //不显示y轴系数
          yAxis: {
            show: false
          },
          //l类型是线条
          series: [
            {
              type: "line",
              data: this.allOrders.orderTrend,
              //面积颜色
              areaStyle: {
                color: "purple"
              },
              //线条宽度
              lineStyle: {
                width: 0
              },
              //线条断电的显示度
              itemStyle: {
                opacity: 0
              },
              //平铺是否
              smooth: true
            }
          ],
          //位置
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        };
      } else {
        var options = null;
      }

      myChart.setOption(options);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  updated(){
this.getChart();
  }
};
</script>

<style lang="scss" scoped>
  .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
