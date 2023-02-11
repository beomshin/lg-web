<template>
  <HeaderTab :tabs="tabs"/>
  <Login/>
  <router-view/>
</template>

<script>
import Login from "@/views/page/test/member/Login";
import HeaderTab from "@/views/page/test/HeaderTab";
import {ref} from "vue";

export default {
  name: 'App',
  components: {HeaderTab, Login},
  setup() {
    const tabs = ref([{ name: '메인 페이지', path: '/'}, { name: '게시판 페이지', path: '/board'}, { name: '로펌 페이지', path: '/lawfirm/list'}])

    return {
      tabs
    }
  },
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

body {
  padding: 10px;
}

</style>
