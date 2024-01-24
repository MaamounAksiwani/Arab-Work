<template>
  <body>
    <div class="container">
      <div class="user-list">
        <div v-for="(user, index) in users" :key="index" class="box-content">
          <h2>
            {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
          </h2>
          <p><span class="title">Email</span>: {{ user.email }}</p>
          <p><span class="title">Gender</span>: {{ user.gender }}</p>
          <p><span class="title">Country</span>: {{ user.location.country }}</p>
          <p>
            <span class="title">Date</span>: {{ formatDate(user.dob.date) }}
          </p>
          <button
            class="btnStyle"
            @click="
              getInfo(
                user.location.coordinates.latitude,
                user.location.coordinates.longitude
              )
            "
          >
            Get Location
          </button>
        </div>
      </div>
      <div class="mapPart">
        <div v-if="latitude && longitude" class="mapBox">
          <UserMap :latitude="latitude" :longitude="longitude" />
        </div>
        <div class="noSelected" v-else>
          Press on Get Location To See The Map
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import UserMap from './UserMap'
import moment from 'moment'

export default {
  name: 'UserList',
  components: {
    UserMap
  },
  props: {
    users: Array
  },
  data () {
    return {
      latitude: null,
      longitude: null
    }
  },
  watch: {},
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY')
    },
    async getInfo (latitude, longitude) {
      this.latitude = latitude
      this.longitude = longitude
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Rubik", sans-serif;
}

.title {
  font-weight: bold;
}

.box-content {
  padding: 10px 25px;
  background-color: #027aaa;
  margin: 15px 0px;
  border-radius: 5px;
  transition: 0.3s ease;
}

p,
h2 {
  color: #ccc;
}
.box-content:hover {
  background-color: #76d4f9;
}

.box-content:hover p,
.box-content:hover h2 {
  color: #000;
}
.btnStyle {
  border: none;
  background-color: #027aaa;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  color: #ccc;
  font-size: 14px;
  padding: 5px 25px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.user-list {
  flex: 1;
}

.mapPart {
  flex: 3;
  margin: 0px 25px;
}

.noSelected {
  width: 100%;
  text-align: center;
  font-size: 30px;
  color: #027aaa;
}
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column-reverse;
  }
  .box-content {
    flex-direction: column-reverse;
  }
  .mapPart{
    margin: 0px 0px 0px 0px;
  }
  .noSelected{
    text-align: center;
    font-size: 18px;
  }
}
</style>
