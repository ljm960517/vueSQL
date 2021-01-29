<template>
  <div class="content1-one" :style="'width:'+width+';'+'height:'+height">
    <div class="title">{{ title }}</div>
    <div class="time">
      <span style="position: absolute; left: 20%">{{status}}</span
      ><span style="position: absolute; right: 20%">{{time}}</span>
    </div>
    <div class="chart">
      <div class="chart-one" :style="'width:'+widthone+';'+'height:'+heightone">
        <slot name="chart-one"></slot>
      </div>
      <div class="chart-two" :style="'width:'+widthtwo+';'+'height:'+heighttwo">
        <slot name="chart-two"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
       width: {
      type: String,
      default: "",
    },
     widthone: {
      type: String,
      default: "",
    },
     widthtwo: {
      type: String,
      default: "",
    },
        height: {
      type: String,
      default: "",
    },
        heightone: {
      type: String,
      default: "",
    },
     heighttwo: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang='scss' scoped>
.content1-one {
  width: 100%;
  background: url("../../picture/prighttop.png") no-repeat;
  background-size: 100% 100%;
  .title {
    width: 100%;
    height: 10%;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .time {
    width: 100%;
    height: 10%;
    font-size: 14px;
    position: relative;
    color: white;
  }
  .chart {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;

    .chart-one {
      width: 45%;
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
    }
    .chart-two {
      height: 100%;
      background: rgba(1, 202, 217, 0.2);
    }
  }
}
</style>