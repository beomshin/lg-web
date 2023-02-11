<template>
  <div>
    <nav aria-label="Page navigation example" style="cursor: pointer; margin-top: 5px">
      <ul class="pagination">
        <li class="page-item"
            v-for="(item, index) in totalPage" :key="index"
            :class="{'active' : index == curPage}">
          <a class="page-link">
          {{item}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BoardPagination",
  props: ['curPage', 'totalPage']
}
</script>

<style scoped>

</style>