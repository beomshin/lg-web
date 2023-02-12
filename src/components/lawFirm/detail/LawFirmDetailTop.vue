<template>
  <div class="card mb-3">
    <img :src="lawFirm.background"  class="card-img-top" style="height: 500px" >
    <div class="card-body">
      <h5 class="card-title">{{lawFirm.name}}</h5>
      <p class="card-text">대표명: {{lawFirm.repName}}</p>
      <p class="card-text"><small class="text-muted">재판수: {{lawFirm.trialCnt}}</small></p>
      <p class="card-text"><small class="text-muted">게시글수: {{lawFirm.boardCnt}}</small></p>
      <p class="card-text"><small class="text-muted">승소율: {{lawFirm.winRate}}%</small></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "LawFirmDetailTop",
  props: ['lawFirm']
}
</script>

<style scoped>

</style>