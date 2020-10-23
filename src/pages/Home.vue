<template>
  <div>
    <nav-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'

export default {
  name: 'Home',
  components:{
    NavHeader
  }
}
</script>

<style>

</style>