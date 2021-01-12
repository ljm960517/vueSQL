<template>
  <div :data="allUsers">
    <commonCard title="累计用户数" :value="userToday">
      <template v-slot:chart>
        <div id="allUsers" style="width:100%;height:50px"></div>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }}%</span>
          <div :class="userGrowthLastDay > 50 ? 'increase' : 'decrease'"></div>
          <span class="month">月同比</span>
          <span class="emphasis">{{ userGrowthLastMonth }}%</span>
          <div
            :class="userGrowthLastMonth > 50 ? 'increase' : 'decrease'"
          ></div>
        </div>
      </template>
    </commonCard>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import commonCard from "../../commonCard/index";
import mixin from "../../../mixins/public";
export default {
  mixins: [mixin],
  components: {
    commonCard
  },
  props: {
    allUsers: {
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
    userToday() {
      return this.toThousands(this.allUsers.userToday);
    },
    userGrowthLastDay() {
      return this.allUsers.userGrowthLastDay;
    },
    userGrowthLastMonth() {
      return this.allUsers.userGrowthLastMonth;
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
     getChart() {
       var myChart=this.$echarts.init(document.getElementById('allUsers'))
       var options={
            tooltip: {},
            // legend: {
            //     data:['销量']
            // },
            xAxis: {
                type:'value',
                show:false
            },
            yAxis: {
              type: 'category',
              //y轴有类型的话就不会重叠，只会并排
              // data:['增长数'],
               show: false
            },
            series: [{
                name:'昨日平台增长用户数',
                type: 'bar',
                //stack后面名字相同的会在同一行，barwidth可以只定义一个
                stack:'总量',
                data: [this.allUsers.userLastDay],
                barWidth: '10',
                 itemStyle: {
              color: '#45c946'
            }
            },
            {
               name: '今日总共平台用户数',
                type: 'bar',
                stack:'总量',
                data: [this.allUsers.userToday],
                //定制图表颜色
                 itemStyle: {
              color: '#eee'
            }
            },{
              //type自定义
              type:'custom',
              stack:'总量',
              data:[this.allUsers.userLastDay],
              //自定义绘制
               renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [{
                  type: 'path',
                  shape: {
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }, {
                  type: 'path',
                  shape: {
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }]
              }
            }
            }],
            //位置
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
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated(){
    this.getChart()
  }
};
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;

  .month {
    margin-left: 10px;
  }
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
