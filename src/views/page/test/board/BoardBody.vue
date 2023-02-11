<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BoardBody",
  data () {
    return {
      comp: 'BoardListView'
    }
  }
}
</script>

<style scoped>

</style>