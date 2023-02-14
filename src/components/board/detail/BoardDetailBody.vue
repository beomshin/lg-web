<template>
  <div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">프로필</label><br>
      <template v-if="board.profile">
        <img :src="board.profile" class="img-thumbnail" style="width: 150px; height: 150px">
      </template>
      <template v-else>
        <img src="https://s3.ap-northeast-2.amazonaws.com/law.gg.bucket/c5598ec4-5a14-4a32-952f-2d0bc87e24ca.png" class="img-thumbnail" style="width: 150px; height: 150px">
      </template>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.title">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">작성일</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writeDt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">글쓴이</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writer">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">조회수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.view">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">추천수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.recommendCnt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">댓글수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="totalCommentCnt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">티어</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board?.tierName || '미정'">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">타입</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.postName + '타입'">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" disabled :value="board.content" ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardDetailBody",
  props: ['board', 'totalCommentCnt']
}
</script>

<style scoped>

</style>
