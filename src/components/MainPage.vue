<template>
  <div>
   <UserTitle/>
    <UserData/>
  </div>
</template>

<script>
import UserData from './UserData'
import UserTitle from './UserTitle'
export default {
  name: 'MainPage',
  components: {
    UserTitle,
    UserData
  },
  data () {
    return {
    }
  }
}
</script>
