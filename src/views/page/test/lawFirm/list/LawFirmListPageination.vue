<template>
  <nav aria-label="Page navigation example" style="cursor: pointer; margin-top: 5px">
    <ul class="pagination">
      <template v-for="(item, index) in totalPage" :key="index">
        <li class="page-item" :class="{'active' : index == curPage}" @click="FindLawFirmList(index)"><a class="page-link" >{{item}}</a></li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "LawFirmListPageination",
  props: ['totalPage', 'curPage'],
  methods: {
    FindLawFirmList(page) {
      this.$emit('pageMove', {page})
    }
  }
}
</script>

<style scoped>

</style>
