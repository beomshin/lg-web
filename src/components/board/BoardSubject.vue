<template>
  <div>
    <select class="form-select"
            aria-label="Default select example"
            @change="ChangeSubject($event.target.value)"
    >
      <template v-for="(item, index) in subjects" :key="index">
        <option :value="item.val">{{item.name}}</option>
      </template>
    </select>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "BoardSubject",
  props: ['subjects'],
  mounted() {
    this.subject = this.subjects.val
  },
  methods: {
    ChangeSubject(subject) {
      this.$emit('ChangeSubject', subject)
    }
  }
}
</script>

<style scoped>

</style>