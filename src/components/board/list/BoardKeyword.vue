<template>
    <div style="display: flex">
      <div style="margin-left: 5px">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">키워드</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="keyword" @keyup.enter="ChooseKeyword">
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="ChooseKeyword" >검색</button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "BoardKeyword",
  setup() {
    const keyword = ref('')

    return {
      keyword
    }
  },
  mounted() {
    this.keyword = this.$route.query?.keyword || ''
  },
  methods: {
    ChooseKeyword() {
      this.$emit('ChooseKeyword', this.keyword)
    }
  }
}
</script>

<style scoped>

</style>