<template>
  <thead>
    <tr>
      <template v-for="(item, index) in heads" :key="index">
        <th scope="col" :style="`width: ${item.width}%`">{{item.name}}</th>
      </template>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "BoardListTop",
  props: ['heads']
}
</script>

<style scoped>

</style>