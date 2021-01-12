<template>
  <div class="salesrank-bg" :data="salesrank">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类销售排行</span>
        <div class="radio">
          <el-radio-group v-model="radio" @change="hand">
            <el-radio-button label="品类"></el-radio-button>
            <el-radio-button label="商品"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div id="salesrankChart" style="width:648px;height:385px"></div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  props: {
    salesrank: {
      type: Object,
      default: {}
    }
  },
  components: {},
  // 定义属性
  data() {
    return {
      radio: "品类",
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    datanum(){
      if(this.radio == '品类'){
        return this.salesrank.category.data1
      }else{
        return this.salesrank.category.data2
      }
    },
    title(){
 if(this.radio == '品类'){
        return '品类分布'
      }else{
        return '商品分布'
      }
    }
  },
  // 监控data中的数据变化
  watch: {
    'radio'(){
       this.getChart(this.datanum,this.title);
    }
  },
  // 方法集合
  methods: {
    hand(value) {
      this.radio = value;
    },
    getChart(datanum,title) {
      var myChart = this.$echarts.init(
        document.getElementById("salesrankChart"));
      
      var chartdata = []; //含xy轴数据
      var legenddata = []; //外部选项数据
      for (var i = 0; i < datanum.data1.length; i++) {
        var obj = new Object();
        obj.value = datanum.data1[i];
        obj.name = datanum.axisX[i];
        legenddata.push(obj.name);
        chartdata.push(obj);
      }

      var options = {
        title:{
       text:title
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          top:50,
          data: legenddata
        },
        gird: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        series: [
          {
            name: "销售情况",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            data: chartdata
          }
        ]
      };
      myChart.setOption(options);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  updated(){
this.getChart(this.datanum,this.title);
  }
};
</script>

<style lang="scss" scoped>
.salesrank-bg {
  width: 49%;
  margin-left: 2%;
  .clearfix {
    height: 22px;
    display: flex;
    position: relative;
    align-items: center;
    .radio {
      position: absolute;
      right: 0;
    }
  }
}
</style>
