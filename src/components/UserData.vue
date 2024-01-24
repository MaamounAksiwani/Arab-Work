<template>
  <body>
    <div v-if="loading" class="loading">
      <h1>Loading Data...</h1>
    </div>
    <div v-else>
      <UserList :users="users" />
      <div class="btnStyle">
        <button class="btn" @click="getUsers" :disabled="loading">NEXT</button>
      </div>
    </div>
  </body>
</template>

<script>
import UserList from './UserList'
export default {
  name: 'UserData',
  components: {
    UserList
  },
  data () {
    return {
      loading: true,
      users: []
    }
  },
  methods: {
    async getUsers () {
      try {
        this.loading = true
        const response = await fetch('https://randomuser.me/api/?results=5')
        const data = await response.json()
        this.users = data.results
      } catch (error) {
        console.error('Error fetching the users', error)
      } finally {
        this.loading = false
      }
    }
  },
  created () {
    this.getUsers()
  }
}
</script>

<style scoped>
body {
  font-family: "Rubik", sans-serif;
}

.btnStyle {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 25px;
}

.btn {
  border: none;
  border-radius: 15px;
  padding: 10px 45px;
  background-color: #027aaa;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  transition: 0.3s ease;
}

.btn:hover {
  background-color: #76d4f9;
}

.loading {
  display: flex;
  color: #027aaa;
  justify-content: center;
  align-items: center;
}
</style>
