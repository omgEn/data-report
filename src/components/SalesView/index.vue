<template>
  <div class="sale-views">
    <v-echart :option="data"></v-echart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        color: ['#3398Db'],
        series: [
          {
            type: 'bar',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
            barWidth: '60%'
          }
        ],
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '11:00',
            '12:00'
          ]
        },
        yAxis: {},
        tooltip: {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sale-views {
  width: 100%;
  height: 300px;
}
</style>
