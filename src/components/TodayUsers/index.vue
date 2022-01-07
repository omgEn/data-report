<template>
  <common-card title='今日交易用户数' value='59,364'>
    <template v-slot:footer>
      <span>退货率</span>
      <span>5.82%</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  mixins: [CommonCardMixin]
}
</script>

<style lang='scss' scoped>

</style>
