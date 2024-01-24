<template>
  <div class="map-container">
    <h1 class="mapTitle">Google Map</h1>
       <GoogleMap :latitude='Number(latitude)' :longitude='Number(longitude)' />
  </div>
</template>

<script>
import GoogleMap from './GoogleMap.vue'

export default {
  components: {
    GoogleMap
  },
  props: {
    latitude: String,
    longitude: String
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
.mapTitle{
  color: #027aaa;
  text-align: center;
}
</style>
