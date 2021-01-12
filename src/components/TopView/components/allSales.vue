<template>
  <div class="allSales" :data="allSales">
    <commonCard title="累计销售额" :value="'¥' + salesToday">
      <template v-slot:chart>
        <div class="salesGrowthLastDay">
          日同比 {{ salesGrowthLastDay }}%
          <div :class="salesGrowthLastDay > 50 ? 'increase' : 'decrease'" />
        </div>
        <div class="salesGrowthLastMonth">
          月同比 {{ salesGrowthLastMonth }}%
          <div :class="salesGrowthLastMonth > 50 ? 'increase' : 'decrease'" />
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">¥{{ salesLastDay }}</span>
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
  //prop:salesToday,salesGrowthLastDay,salesGrowthLastMonth,salesLastDay
  components: { commonCard },
  props: {
    allSales: {
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
    //tothousands()是通过mixins引入的
    salesToday() {
      return this.toThousands(this.allSales.salesToday);
    },
    salesGrowthLastDay() {
      return this.allSales.salesGrowthLastDay;
    },
    salesGrowthLastMonth() {
      return this.allSales.salesGrowthLastMonth;
    },
    salesLastDay() {
      return this.toThousands(this.allSales.salesLastDay);
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>

<style lang="scss" scoped>
  .salesGrowthLastDay,
  .salesGrowthLastMonth {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-top: 3px;
    color: #666;
  }
  .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }

.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent green transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: red transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
