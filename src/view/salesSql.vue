<template>
  <div class="bg">
    <iframe
      src="static/index.html"
      frameborder="0"
      scrolling="yes"
      allowfullscreen="true"
      style="width: 100%; height: 100%"
    >
    </iframe>
    <div class="screen-content">
        <div class="title">销售大数据</div>
        <div class="firstLine">
          <div class="one">
            <card1 />
          </div>
          <div class="two">
             <card2 />
          </div>
        </div>
        <div class="secondLine">
          <div class="one">
            <card3 />
          </div>
          <div class="two">
            <card4 />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import card1 from "./salesComp/card1";
import card2 from "./salesComp/card2";
import card3 from "./salesComp/card3";
import card4 from "./salesComp/card4";
export default {
  components: { card1,card2, card3, card4 },
  // 定义属性
  data() {
    return {};
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.onload = function () {
      console.log("页面加载完毕");
    var bodyWidth=document.body.clientWidth  //网页可见区域的宽度
      var bodyHeight=document.body.clientHeight  //网页可见区域的高度
          var screenHeight=window.screen.height//网页可见区域的高度
      var screenWidth=window.screen.width  //网页可见区域的宽度
      var dom=document.getElementsByClassName('screen-content')
        var domHeight=dom.clientHeight  //包含网页所有内容后的高度
     var domWidth=dom.clientWidth //包含网页所有内容后的宽度
      dom[0].style.transform=`scale(${bodyWidth/domWidth},${bodyHeight/domHeight})`
    };
    //实时页面宽高发生改变时候的监听事件,获取不到this实例
    window.onresize = function () {
  console.log('页面发生改变')
 var bodyWidth=document.body.clientWidth  //网页可见区域的宽度
      var bodyHeight=document.body.clientHeight  //网页可见区域的高度
          var screenHeight=window.screen.height//网页可见区域的高度
      var screenWidth=window.screen.width  //网页可见区域的宽度
      var dom=document.getElementsByClassName('screen-content')
        var domHeight=dom.clientHeight  //包含网页所有内容后的高度
     var domWidth=dom.clientWidth //包含网页所有内容后的宽度
      dom[0].style.transform=`scale(${bodyWidth/domWidth},${bodyHeight/domHeight})`
    };
  },
};
</script>

<style lang='scss' scoped>
.bg {
  width: 100%;
  height: 100%;
  position: relative;
  iframe {
    z-index: 1;
  }
  .screen-content {
    height: calc(100vh);
    width: calc(100vw);
    z-index: 100;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    .title{
      text-align: center;
      color:white;
      font-size: 32px;
      padding: 10px;
    }
    .firstLine{
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      position: relative;
      .one,.two{
        width: 40%;
        height: 100%;
        border: 1px white solid;
        margin: 0 20px;
      }
      .one:before{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      top:7%;
      left: 8%;
      }
      .one:after{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      bottom:7%;
      left: 8%;
      }
       .two:before{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      top:7%;
      right: 8%;
      }
      .two:after{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      bottom:7%;
      right: 8%;
      }
    }
    .secondLine{
       width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      position: relative;
      .one,.two{
        width: 40%;
        height: 100%;
        border: 1px white solid;
         margin: 0 20px;
      }
      .one:before{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      top:7%;
      left: 8%;
      }
      .one:after{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      bottom:7%;
      left: 8%;
      }
        .two:before{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      top:7%;
      right: 8%;
      }
      .two:after{
              position: absolute;
      width: 7px;
      height: 7px;
      content: "";
      border-radius:50%;
      background: white;
      bottom:7%;
      right: 8%;
      }
    }
  }
}

</style>