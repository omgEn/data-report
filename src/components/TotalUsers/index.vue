<template>
  <common-card title="累计用户数" value="1,064,553">
    <template>
      <div id="total-users-chart" :style="{width: '100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span>日同比</span>
        <span class="emphasis">6.36%</span>
        <span class="increase"></span>
        <span class="month">月同比</span>
        <span class="emphasis">32.95%</span>
        <span class="decrease"></span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  mixins: [CommonCardMixin],
  mounted() {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    const option = {
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [150],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          data: [250],
          barWidth: 10,
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            console.log(params, api)
          }
        }
      ],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    }
    chart.setOption(option)
  }
}
</script>

<style lang='scss' scoped>
.total-user-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
