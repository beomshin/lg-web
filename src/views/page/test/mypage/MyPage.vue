<template>
  <hr>
  <div style="display: flex;">
    <ul class="list-group" style="margin-right: 10px; cursor: pointer">
      <li class="list-group-item" :class="{'color' : type == 0}" @click="Move(0)">개인정보 수정</li>
      <li class="list-group-item" :class="{'color' : type == 1}" @click="Move(1)">알림함</li>
      <li class="list-group-item" :class="{'color' : type == 2}" @click="Move(2)">글목록</li>
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
  },
  methods: {
    Move(type) {
      if (this.type == type) return;
      this.type = type

      if (type == 0) {
        this.$router.push({
          name: 'MyMemberPage'
        })
      } else if (type == 1) {
        this.$router.push({
          name: 'MyAlarmPage'
        })
      } else if (type == 2) {
        this.$router.push({
          name: 'MyBoardPage'
        })
      }


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
