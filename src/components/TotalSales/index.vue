<template>
  <common-card title="累计销售额" value="￥32,208,165">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class='emphasis'>7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>日同比</span>
          <span class='emphasis'>7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class='emphasis'>￥30,000,00</span>
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
.compare-wrapper{
  width: 100%;
  height: 100%;
}
.compare {
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 12px;
  margin-top: 3px;
  color: #666;
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
