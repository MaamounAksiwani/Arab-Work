<template>
  <gmap-map :center="center" :zoom="5" class="map">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :title="m.title"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    ></gmap-marker>
  </gmap-map>
</template>
<script>
export default {
  props: {
    latitude: Number,
    longitude: Number
  },
  data () {
    return {
      center: { lat: this.latitude, lng: this.longitude },
      markers: [
        {
          position: { lat: this.latitude, lng: this.longitude }
        }
      ]
    }
  }
}
</script>

<style scoped>
.map{
    width: 100%;
    height: 1250px
}
@media (max-width: 767px) {
  .map {
    height:400px;
  }
}
</style>
