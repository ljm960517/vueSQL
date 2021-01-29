<template>
  <div class="bg">
      <Header 
      title="数据分析"
      />
      <div class="content">
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
  </div>
</template>

<script>
import Header from "./publicComp/header";
import Content1 from "./publicComp/content1";
import Content2 from "./publicComp/content2";
import Content3 from "./publicComp/content3";
export default {
    components:{
        Header,Content1,Content2,Content3
    },
    mounted(){
        window.onload = function () {
      console.log("页面加载完毕");
    var bodyWidth=document.body.clientWidth  //网页可见区域的宽度
      var bodyHeight=document.body.clientHeight  //网页可见区域的高度
          var screenHeight=window.screen.height//网页可见区域的高度
      var screenWidth=window.screen.width  //网页可见区域的宽度
      var dom=document.getElementsByClassName('bg')
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
      var dom=document.getElementsByClassName('bg')
        var domHeight=dom.clientHeight  //包含网页所有内容后的高度
     var domWidth=dom.clientWidth //包含网页所有内容后的宽度
      dom[0].style.transform=`scale(${bodyWidth/domWidth},${bodyHeight/domHeight})`
    };
    }
};
</script>

<style lang='scss' scoped>
.bg {
  width: calc(100vw);
  height: calc(100vh);
  background: url("../picture/bg2.jpg") no-repeat;
  background-size: 100% 100%;
  .content{
      width: 100%;
      height: 90%;
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
  }
}
</style>