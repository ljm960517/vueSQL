<template>
<div :data='todayUsers'>
<commonCard
 title='今日交易用户数'
 :value='orderUser'
>
<template v-slot:chart>
  <div id='todayUsers' style="width:100%;height:50px"></div>
  </template>
<template v-slot:footer>
  <span>退货率</span>
  <span class="emphasis">{{returnRate}}%</span>
  </template>
  </commonCard>
 </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import commonCard from '../../commonCard/index'
import mixin from '../../../mixins/public';
export default {
  mixins:[mixin],
  components: {
    commonCard
  },
  props:{
     todayUsers:{
       type:Object,
       default:{}
     }
  },
  // 定义属性
  data() {
    return {
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    orderUser(){
      return this.toThousands(this.todayUsers.orderUser)
    },
    returnRate(){
      return this.toThousands(this.todayUsers.returnRate)
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getChart(){
      var myChart=this.$echarts.init(document.getElementById('todayUsers'))
      var options={
        color: ['#3398DB'],
            tooltip: {},
            // legend: {
            //     data:['销量']
            // },
            xAxis: {
               type: 'category',
                data:this.todayUsers.orderUserTrendAxis,
                show:false
            },
            yAxis: {
               show: false
            },
            series: [{
                name: '用户实时交易量',
                //类型，柱状图
                type: 'bar',
                data: this.todayUsers.orderUserTrend,
                barWidth: '60%'
            }],
             grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }
      }
      myChart.setOption(options)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  updated(){
    this.getChart()}
}
</script>

<style lang='scss' scoped>
 .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>