<template>
  <div>
    <table class="table table-hover">
      <board-list-top
        :heads="heads"
        />
      <board-list-body
        :boards="boards"
        :cur-page="curPage"
        />
    </table>
    <board-pagination
      :cur-page="curPage"
      :total-page="totalPage"
      />
  </div>
</template>

<script>
import { ref } from 'vue'
import BoardListTop from "@/components/board/BoardListTop";
import BoardListBody from "@/components/board/BoardListBody";
import BoardPagination from "@/components/board/BoardPagination";

export default {
  name: "BoardList",
  components: {BoardPagination, BoardListBody, BoardListTop},
  props: ['boards', 'curPage', 'totalPage'],
  setup() {
    const heads = ref([
      {
        name: '번호',
        width: 5
      },
      {
        name: '제목',
        width: 25
      },
      {
        name: '라인',
        width: 5
      },
      {
        name: '글쓴이',
        width: 20
      },
      {
        name: '작성일',
        width: 15
      },
      {
        name: '댓글수',
        width: 10
      },
      {
        name: '댓글수',
        width: 10
      },
      {
        name: '추천수',
        width: 10
      }
    ])

    return {
      heads
    }
  }
}
</script>

<style scoped>

</style>