<template>
  <div v-for="(item, index) in files" :key="index">
    <img :src="item.path" class="img-thumbnail">
  </div>
</template>

<script>
export default {
  name: "BoardDetailFiles",
  props: ['files']
}
</script>

<style scoped>

</style>