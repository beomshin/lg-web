<template>
  <hr>
  <div style="display: flex;">
    <ul class="list-group" style="margin-right: 10px; cursor: pointer">
      <li class="list-group-item" :class="{'color' : type == 0}">개인정보 수정</li>
      <li class="list-group-item" :class="{'color' : type == 1}">알림함</li>
      <li class="list-group-item" :class="{'color' : type == 2}">글목록</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

import {useCookies} from "vue3-cookies";
import {ref} from 'vue'
const { cookies } = useCookies();

export default {
  name: "MyPage",
  setup() {
    const type = ref(0)

    return {
      type
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  mounted() {
    if(!this.hasLogin) {
      window.location.replace('/')
    }
  }
}
</script>

<style scoped>
  li:hover {
    background-color: #F5F5DC;
  }

  .color {
    background-color: #F5F5DC;
  }
</style>
