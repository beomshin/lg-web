<template>
  <div v-for="(item, index) in files" :key="index">
    <template v-if="item.path.includes('MOV')">
      <video controls loop muted width=560 height=315>
        <source :src="item.path"/>
      </video>
    </template>
    <template v-else>
      <img :src="item.path" class="img-thumbnail">
    </template>
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
