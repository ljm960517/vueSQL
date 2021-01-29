<template>
  <div class="home" ref="home">
    <div class="router-bt">
      <div>
        <svg width="200" height="200" viewBox="0 0 100 200">
          <text x="40" y="40" fill="red">Demo</text>
          <path
            id="motion-path"
            d="M 10 10 L 110 10 L 110 60 L 10 60 Z"
          ></path>
        </svg>
      </div>
      <el-button type="success" v-model="sqlReport" disabled
        >数据报表页面</el-button
      >
      <el-button type="success" v-model="sqlScreen1" @click="routerTo(sqlScreen1)"
        >数据大屏页面demo1</el-button
      >
       <el-button type="success" v-model="sqlScreen2" @click="routerTo(sqlScreen2)"
        >数据大屏页面demo2</el-button
      >
        <el-button type="success" v-model="sqlScreen3" @click="routerTo(sqlScreen3)"
        >数据大屏页面demo3</el-button
      >
    </div>
    <TopView :topData="valueData" />
    <SalesView :salesData="valueData" />
    <keywordView :salesrank="valueData" />
    <BottomView />
  </div>
</template>

<script>
import TopView from "../components/TopView/index";
import SalesView from "../components/SalesView/index";
import keywordView from "../components/keywordView/index";
import BottomView from "../components/BottomView/index";
export default {
  name: "home",
  components: { TopView, SalesView, keywordView, BottomView },
  data() {
    return {
      valueData: {},
      heightbili: 0,
      widthbili: 0,
      sqlReport: "/",
      sqlScreen1: "/container",
      sqlScreen2:'/salesSql',
       sqlScreen3:'/public'
    };
  },
  created() {
    this.getValueData();
  },
  mounted() {
    var path = document.getElementById("motion-path");
    var pathLength = path.getTotalLength();
    //  window.onload = function(){
    //         console.log('页面加载完毕')
    //         watchChangeSize();

    //     }
    //     //实时页面宽高发生改变时候的监听事件,获取不到this实例
    //     window.onresize=function(){
    //         console.log('页面宽高发生变化')
    //         watchChangeSize();
    //     }
    //      //实时改变transform比例
    //     function watchChangeSize (){
    //         //可视区的宽/高(DOM)
    //         //offsetHeight（带边框）和clientHeight（不带边框）
    //        var bodyHeight=document.body.clientHeight  //网页可见区域的高度
    //    var bodyWidth=document.body.clientWidth //网页可见区域的高度
    //     var screenHeight=window.screen.height//网页可见区域的高度
    //   var screenWidth=window.screen.width //网页可见区域的高度
    //     var dom=document.getElementsByClassName('home')
    //     var domHeight=dom[0].clientHeight  //包含网页所有内容后的高度
    //  var domWidth=dom[0].clientWidth //包含网页所有内容后的宽度
    //   dom[0].style.transform=`scale(${bodyWidth/domWidth},${bodyHeight/domHeight})`
  // }
  },

  methods: {
    init() {
      console.log(document.body.clientWidth);
    },
    getValueData() {
      this.$http.get("/screen/data").then((res) => {
        this.valueData = res;
      });
    },
    routerTo(value) {
      this.$router.push(`${value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
  transform-origin: left top;
  .router-bt {
    position: fixed;
    top: 0;
    z-index: 99;
    opacity: 0.5;
    display: flex;
    height: 40px;
  }
}
#motion-path {
  fill: none;
  stroke:brown;
  stroke-width: 8;
  animation: taobao 5s linear infinite forwards;
}
@keyframes taobao {
  from {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }
  to {
    stroke-dasharray: 400;
    stroke-dashoffset: 0;
  }
}
</style>


