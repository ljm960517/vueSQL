<template>
  <div class="main-box-mid">
    <div class="bar">
      <div class="bar-text">
        <div class="text-num-one">12581189</div>
        <div class="text-text">2018年总收入情况</div>
      </div>
      <div class="bar-text">
        <div class="text-num-two">12581189</div>
        <div class="text-text">2018年总收入情况</div>
      </div>
    </div>
     <div class="map">
        <div class="map1"><img class="img1" src="../../picture/lbx.png"></div>
        <div class="map2"><img class="img2" src="../../picture/map.png"></div>
        <div class="map3" id="map_1"></div>
      </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// import options1 from './echartMid'
import "../../../node_modules/echarts/map/js/china";
import options from './echartMid'
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
      var myChart1 = this.$echarts.init(document.getElementById("map_1"));
      myChart1.setOption(options);
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
@keyframes mapFirst
{
from {transform: rotate(0deg);}
to {transform: rotate(359deg);}
}
.main-box-mid {
  position: relative;
  width: 40%;
  padding: 10px;
  box-sizing: border-box;
  .map{
    width: 100%;
    height: 353px;
    display: flex;
    justify-content: center;
    align-items: center;
    .map1{
      position: absolute;
      opacity: .5;
      width: 90%;
      z-index: 2;
      .img1{
        width: auto; max-width: 100%;
        animation: mapFirst 15s infinite linear;
      }
    }
     .map2{
      position: absolute;
      opacity: .5;
      width: 80%;
      z-index: 1;
      .img2{
        width: auto; max-width: 100%;
      }
    }
     .map3{
      position: absolute;
      width: 100%;
      z-index: 5;
      height: 353px;
    }

  }
  .bar {
    background: rgba(101, 132, 226, 0.1);
    box-sizing: border-box;
    width: 100%;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    .bar-text {
      text-align: center;
      width: 40%;
      height: 60px;
      .text-text{
        color: white;
        padding-top: 10px;
        font-size: 12px;
      }
      .text-num-one,
      .text-num-two {
        color: #ffeb7b;
        font-size: 24px;
        font-family: electronicFont;
        font-weight: bold;
        border: 1px solid rgba(25, 186, 139, 0.17);
        position: relative;
      }
      .text-num-one:before {
        position: absolute;
        width: 7px;
        height: 7px;
        content: "";
        top: 0;
        left: 0;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      .text-num-two:after {
        position: absolute;
        width: 7px;
        height: 7px;
        content: "";
        bottom: 0;
        right: 0;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
    }
  }
}
</style>