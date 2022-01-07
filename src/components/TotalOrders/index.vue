<template>
  <common-card title='累计订单量' value='3,115,465'>
    <template>
      <div id="total-orders-chart" :style="{width: '100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class='emphasis'>2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  mixins: [CommonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    // const chart = this.$echarts.init(chartDom, 'light', { renderer: 'svg' })
    const chart = this.$echarts.init(chartDom)
    const option = {
      xAxis: {
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [100, 200, 100, 200, 120, 130, 140, 160, 170, 300, 122, 344, 67, 68],
        areaStyle: {
          color: 'puple'
        }
      }]
    }
    chart.setOption(option)
  }
}
</script>

<style lang='scss' scoped>

</style>
