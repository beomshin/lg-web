<template>
  <div>
    <board-detail-tab
        :board-id="board.boardId"
        :writer-type="board.writerType"
        :created="board.created"
        :recommend="board.recommend"
        @Recommend="Recommend"
        @Report="Report"
        @DeleteBoard="DeleteBoard"
        @UpdateBoard="UpdateBoard"
      />

    <hr>
    <board-detail-body
        :total-comment-cnt="totalCommentCnt"
        :board="board"
      />
    <hr>
    <board-detail-files
      :files="board.files"
      />
  </div>
  <hr>
</template>

<script>
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {ref} from "vue";
import {useCookies} from "vue3-cookies";
import BoardDetailBody from "@/components/board/detail/BoardDetailBody";
import BoardDetailTab from "@/components/board/detail/BoardDetailTab";
import BoardDetailFiles from "@/components/board/detail/BoardDetailFiles";
const { cookies } = useCookies();


export default {
  name: "BoardDetail",
  components: {BoardDetailFiles, BoardDetailTab, BoardDetailBody},
  props: ['board', 'totalCommentCnt'],
  setup() {
    const router = useRouter()
    const route = useRoute()
    const boardId = route.query.boardId
    const type = ref(0)
    const password = ref('')
    const comments = ref([])
    const commentCnt = ref(0)

    return {
      type,
      password,
      comments,
      commentCnt,
      boardId,
    }
  },
  methods: {
    Recommend() {
      this.$emit('Recommend')
    },
    Report() {
      this.$emit('Report')
    },
    DeleteBoard() {
      this.$emit('DeleteBoard')
    },
    UpdateBoard() {
      this.$emit('UpdateBoard')
    }
  }
}
</script>

<style scoped>

</style>