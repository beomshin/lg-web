<template>
  <div>
    <table class="table table-hover">
      <board-list-top
        :heads="heads"
        />
      <board-list-body
        :boards="boards"
        :cur-page="curPage"
        :page-num="pageNum"
        @ChooseBoard="ChooseBoard"
        />
    </table>
    <board-pagination
      :cur-page="curPage"
      :total-page="totalPage"
      @ChoosePage="ChoosePage"
      />
    <hr>
    <div style="display: flex">
      <board-subject
        :subjects="subjects"
        :subject="subject"
        @ChangeSubject="ChangeSubject"
      />
      <board-keyword
        @ChooseKeyword="ChooseKeyword"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BoardListTop from "@/components/board/BoardListTop";
import BoardListBody from "@/components/board/BoardListBody";
import BoardPagination from "@/components/board/BoardPagination";
import BoardKeyword from "@/components/board/BoardKeyword";
import BoardSubject from "@/components/board/BoardSubject";

export default {
  name: "BoardList",
  components: {BoardSubject, BoardKeyword, BoardPagination, BoardListBody, BoardListTop},
  props: ['boards', 'curPage', 'totalPage', 'pageNum', 'subject'],
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

    const subjects = ref([
      {
        name: '전체',
        val: 0
      },
      {
        name: '제목',
        val: 1
      },
      {
        name: '내용',
        val: 2
      },
      {
        name: '작성자',
        val: 3
      }
    ])

    return {
      heads,
      subjects
    }
  },
  methods: {
    ChooseBoard(boardId) {
      this.$emit('ChooseBoard', boardId)
    },
    ChoosePage(page) {
      this.$emit('ChoosePage', page)
    },
    ChangeSubject(subject) {
      this.$emit('ChangeSubject', subject)
    },
    ChooseKeyword(keyword) {
      this.$emit('ChooseKeyword', keyword)
    }
  }
}
</script>

<style scoped>

</style>