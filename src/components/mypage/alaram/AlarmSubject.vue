<template>
  <div>
    <select class="form-select"
            aria-label="Default select example"
            @change="ChangeSubject($event.target.value)"
    >
      <template v-for="(item, index) in subjects" :key="index">
        <option :value="item.val" :selected="subject == item.val">{{item.name}}</option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: "AlarmSubject",
  props: ['subjects', 'subject'],
  methods: {
    ChangeSubject(subject) {
      this.$emit('ChangeSubject', subject)
    }
  }
}
</script>

<style scoped>

</style>