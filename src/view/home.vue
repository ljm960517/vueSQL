<template>
  <div class="home" ref='home'>
    <div class="router-bt">
    <el-button type="success" v-model="sqlReport" disabled>数据报表页面</el-button>
    <el-button type="success" v-model="sqlScreen" @click='routerTo(sqlScreen)'>数据大屏页面</el-button>
    </div>
    <TopView
    :topData='valueData'
     />
    <SalesView 
    :salesData='valueData'
    />
    <keywordView 
    :salesrank='valueData'
    />
    <BottomView />
  </div>
</template>

<script>
  import TopView from '../components/TopView/index'
  import SalesView from '../components/SalesView/index'
   import keywordView from '../components/keywordView/index'
  import BottomView from '../components/BottomView/index'
export default {
  name: 'home',
  components:{TopView,SalesView,keywordView,BottomView},
  data(){
     return{
valueData:{},
heightbili:0,
widthbili:0,
sqlReport:'/',
sqlScreen:'/container'
     }
  },
  created(){
     this.getValueData()
  },
  mounted(){
    //获取屏幕宽高等，进行固定宽高比，缩放方法被注释了
    this.$nextTick(()=>{
      var dom=this.$refs.home //获取设计页面的dom
     var domHeight=dom.clientHeight  //包含网页所有内容后的高度
     var domWidth=dom.clientWidth //包含网页所有内容后的宽度
      var screenHeight=window.screen.height//网页可见区域的高度
      var screenWidth=window.screen.width  //网页可见区域的宽度
       var bodyHeight=document.body.clientHeight  //网页可见区域的高度
       var bodyWidth=document.body.clientWidth  //网页可见区域的宽度
      console.log(domWidth,domHeight)
      console.log(screenWidth,screenHeight)
      console.log(bodyWidth,bodyHeight)
      // this.heightbili=window.screen.height/dom.clientHeight
      // this.widthbili=window.screen.width/dom.clientWidth
      // dom.style.transform=`scale(${this.widthbili},${this.heightbili})`
    })
  },
  methods:{
       getValueData(){
       this.$http.get('/screen/data')
      .then(res=>{
        this.valueData=res
      })
    },
    routerTo(value){
     this.$router.push(`${value}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    .home{
      width:100%;
      padding: 20px;
      background: #eee;
      box-sizing: border-box;
      transform-origin: left top;
      .router-bt{
        position: fixed;
        top:0;
        z-index: 99;
        opacity: 0.5;
      }
    }
</style>


