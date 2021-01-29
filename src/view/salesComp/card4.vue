<template>
  <div class="card4">
    <div class="main_table t_btn8">
      <table>
        <thead>
          <tr>
            <th>销售价格</th>
            <th>销售市场</th>
            <th>销售任务</th>
            <th>销售量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21449</td>
            <td>26667</td>
            <td>18248</td>
            <td>20166</td>
          </tr>
          <tr>
            <td>12227</td>
            <td>21140</td>
            <td>18208</td>
            <td>20115</td>
          </tr>
          <tr>
            <td>14977</td>
            <td>20505</td>
            <td>25342</td>
            <td>20114</td>
          </tr>
          <tr>
            <td>17494</td>
            <td>19647</td>
            <td>20227</td>
            <td>20135</td>
          </tr>
          <tr>
            <td>16493</td>
            <td>18812</td>
            <td>20394</td>
            <td>20124</td>
          </tr>
           <tr>
            <td>16493</td>
            <td>18812</td>
            <td>20394</td>
            <td>20124</td>
          </tr>
           <tr>
            <td>16493</td>
            <td>18812</td>
            <td>20394</td>
            <td>20124</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card4 {
  background: url("../../picture/bg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  padding: 10px;
  box-sizing: border-box;
  table {
    width: 100%;
    thead {
      font-size: 14px;
      font-weight: 600;
      color: #61d2f7;
      text-align: center;
      tr {
        height: 42px;
      }
    }
    tbody {
      tr {
        td {
          color: #fff;
          font-size: 14px;
          text-align: center;
        }
      }
      tr:nth-child(1),
      tr:nth-child(3),
      tr:nth-child(5),
      tr:nth-child(7) {
        width: 98%;
        background-color: #2b3aa8;
        box-shadow: -10px 0px 15px #2c58a6 inset,
          /*左边阴影*/ 10px 0px 15px #2c58a6 inset; /*右边阴影*/
      }
    }
  }
}
</style>