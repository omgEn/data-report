<template>
  <div class="home">
   <top-view />
   <sales-view />
   <map-view />
   <bottom-view />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    MapView,
    SalesView
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
