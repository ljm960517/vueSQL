<template>
   <div class="header-bg">
       <div>{{title}}</div>
   </div>
</template>

<script>
export default {
   props:{
       title:{
           type:String,
           default:''
       }
   }
}
</script>

<style lang='scss' scoped>
.header-bg {
    width: 100%;
    height: 10%;
    color: white;
    font-size: 24px;
    text-align: center;
    padding-top:10px ;
    box-sizing: border-box;
}
</style>