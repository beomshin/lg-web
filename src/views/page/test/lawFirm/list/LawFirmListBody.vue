<template>
  <div class="card" style="width: 18rem; cursor: pointer; margin: 10px">
    <img :src="lawFirm.profile" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text" style="font-size: 8px">
        로펌명: {{lawFirm.name}}<br>
        대표명: {{lawFirm.repName}}<br>
        재판수: {{lawFirm.trialCnt}}<br>
        게시글수: {{lawFirm.boardCnt}}<br>
        승소율: {{lawFirm.winRate}}%
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LawFirmListBody",
  props:['lawFirm']
}
</script>

<style scoped>

</style>
