<template>
  <div class="main-box-left">
    <div class="boxall">
      <div class="alltitle">图表一</div>
      <div class="allnav" id="echart1"></div>
      <div class="boxfoot"></div>
    </div>
    <div class="boxall">
      <div class="alltitle">图表二</div>
      <div class="allnav" id="echart2"></div>
      <div class="boxfoot"></div>
    </div>
    <div class="boxall">
      <div style="height: 100%; width: 100%">
        <div class="sy" id="fb1"></div>
        <div class="sy" id="fb2"></div>
        <div class="sy" id="fb3"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import options from "./echartLeft";
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
      var myChart1 = this.$echarts.init(document.getElementById("echart1"));
      myChart1.setOption(options.options1);
      var myChart2 = this.$echarts.init(document.getElementById("echart2"));
      myChart2.setOption(options.options2);
      var myChart3 = this.$echarts.init(document.getElementById("fb1"));
      myChart3.setOption(options.fb1);
      var myChart4 = this.$echarts.init(document.getElementById("fb2"));
      myChart4.setOption(options.fb2);
      var myChart5 = this.$echarts.init(document.getElementById("fb3"));
      myChart5.setOption(options.fb3);
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
.main-box-left {
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