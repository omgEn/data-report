<template>
  <common-card title='累计用户数' value='1,064,553'>
    <template v-slot:footer>
      <span>日间比 6.36%</span>
      <span>月同比 32.95%</span>
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
