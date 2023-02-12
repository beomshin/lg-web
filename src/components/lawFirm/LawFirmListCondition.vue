<template>
  <div style="display: flex">
    <div>
      <select class="form-select" aria-label="Default select example" v-model="subject">
        <option value="0">전체</option>
        <option value="1">로펌명</option>
        <option value="2">대표명</option>
      </select>
    </div>
    <div style="margin-left: 5px">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">키워드</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="keyword" @keyup.enter="FindLawFirmList">
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="FindLawFirmList" >검색</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "LawFirmListCondition",
  setup() {
    const subject = ref(0)
    const keyword = ref('')

    return {
      subject,
      keyword
    }
  },
  methods: {
    FindLawFirmList() {
      this.$emit('FindKeyword', { subject: this.subject, keyword: this.keyword})
    }
  }
}
</script>

<style scoped>

</style>
