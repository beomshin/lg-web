<template>
  <div>
    <select class="form-select" aria-label="Default select example" @change="ChooseGroup($event.target.value)">
      <option value="0">게시판</option>
      <option value="1">트라이얼</option>
    </select>
    <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="Apply">가입신청</button>
  </div>
</template>

<script>
export default {
  name: "LawFirmGroup",
  props: ['viewType'],
  methods: {
    ChooseGroup(val) {
      this.$emit('ChooseGroup', val)
    },
    Apply() {
      this.$emit('Apply')
    }
  }
}
</script>

<style scoped>

</style>
