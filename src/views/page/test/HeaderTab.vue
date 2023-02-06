<template>
  <div class="tab">
    <ul class="nav nav-tabs">
      <template v-for="(item, index) in this.tabs" :key="index">
        <li class="nav-item" @click="Move(item.path)">
          <a class="nav-link">{{item.name}}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
  props: ['tabs'],
  methods: {
    Move(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .tab {
    margin-top: 30px;
  }
</style>
