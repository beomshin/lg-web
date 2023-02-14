<template>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
    <div class="col-sm-10">
      <textarea class="form-control" aria-label="With textarea" placeholder="내용" disabled :value="message.content" ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlarmCard",
  props: ['message'],
}
</script>

<style scoped>

</style>
