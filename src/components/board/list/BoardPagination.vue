<template>
  <div>
    <nav aria-label="Page navigation example" style="cursor: pointer; margin-top: 5px">
      <ul class="pagination">
        <li class="page-item"
            v-for="(item, index) in totalPage" :key="index"
            :class="{'active' : index == curPage}">
          <a class="page-link" @click="ChoosePage(index)">
          {{item}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BoardPagination",
  props: ['curPage', 'totalPage'],
  methods: {
    ChoosePage(page) {
      this.$emit('ChoosePage', page)
    }
  }

}
</script>

<style scoped>

</style>