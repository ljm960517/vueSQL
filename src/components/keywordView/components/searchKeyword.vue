<template>
  <div class="search-bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关键词搜索</span>
      </div>
      <div class="chart">
        <div
          id="searchuserChart"
          style="width:50%;height:105px;padding:0 10px"
        ></div>
        <div
          id="searchtimesChart"
          style="width:50%;height:105px;padding:0 10px"
        ></div>
      </div>
       <div class="rank-bg">
    <div class="table">
      <el-table :data="newTable" style="width: 100%">
        <el-table-column prop="city" label="城市"> </el-table-column>
        <el-table-column prop="rate" label="增长率"> </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="4"
      @prev-click='prev_click'
      @next-click='next_click'
      @current-change='current_change'
      >
      </el-pagination>
    </div>
  </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  components: {},
  // 定义属性
  data() {
    return {
      tableData:[],
      newTable:[],
      total:0,
      searchKeyword:{}
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  
  },
  // 监控data中的数据变化
  watch: {
  },
  // 方法集合
  methods: {
    prev_click(page){
   this.getTable(4*(page-1),4*page)
},
next_click(page){
   this.getTable(4*(page-1),4*page)
},
current_change(page){
  this.getTable(4*(page-1),4*page)
},
getTable(start,end){
this.newTable=this.tableData.slice(start,end)
},
 getValueData(){
       this.$http.get('/screen/data')
      .then(res=>{
        this.searchKeyword=res
        this.tableData=res.areaTop
        this.total=res.areaTop.length
        this.getTable(0,4)
      })
    },
    getChart() {
      var myChart1 = this.$echarts.init(
        document.getElementById("searchuserChart")
      );
       var myChart2 = this.$echarts.init(
        document.getElementById("searchtimesChart")
      );
      var options1 = {
          title:{
          text:'关键词搜索',
             textStyle: {
              fontSize: 14,
              color: '#666'
            },
          },
        xAxis: {
          type: "category",
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        gird: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series:{
             type:'line',
              areaStyle: {
                color: "blue"
              },
               //线条宽度
              lineStyle: {
                width: 1
              },
              //线条断电的显示度
              itemStyle: {
                opacity: 0
              },
              //平铺是否
              smooth: true,
               data: this.searchKeyword.userFullYear,
        }
      };
      var options2={
            title:{
          text:'搜索量',
             textStyle: {
              fontSize: 14,
              color: '#666'
            },
          },
        xAxis: {
          type: "category",
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        gird: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series:{
             type:'line',
              areaStyle: {
                color: 'purple'
              },
               //线条宽度
              lineStyle: {
                width: 1
              },
              //线条断电的显示度
              itemStyle: {
                opacity: 0
              },
              //平铺是否
              smooth: true,
               data: this.searchKeyword.orderUserTrend,
        }
      }
      myChart1.setOption(options1)
       myChart2.setOption(options2)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
     this.getValueData()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  updated(){
      this.getChart()
     
  }
};
</script>

<style lang="scss" scoped>
.search-bg {
  width: 49%;
  .chart {
    display: flex;
  }
  .rank-bg {
  width: 100%;
  height: 280px;
  .pagination {
    margin-top: 10px;
    float: right;
  }
}
}
</style>
