<template>
  <li class="list-group-item" >
    <h3>{{title}}</h3>
    <hr>
    <div v-if="!hasLogin">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="id" maxlength="16" placeholder="아이디">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="password" maxlength="32" placeholder="비밀번호">
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>
      </div>
    </div>
    <button class="btn btn-secondary">{{btnTitle}}</button>
  </li>
</template>

<script>
import {ref} from "vue";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();

export default {
  name: "BoardCommentForm",
  props: ['title', 'btnTitle'],
  setup() {
    const id = ref('')
    const password = ref('')
    const content = ref('')

    return {
      id,
      password,
      content
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
}
</script>

<style scoped>

</style>