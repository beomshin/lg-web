<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from "@/views/page/test/Header";

export default {
  name: 'App',
  components: {Header},
}
</script>

<style lang="scss">

</style>
