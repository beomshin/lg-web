<template>
  <div>
    <hr>
    <h3>아이디 찾기</h3>
    <h2>인증했다고 치고....</h2>
    <button type="button" class="btn btn-secondary" style="margin-left: 5px" @click="FindId" >아이디 찾기</button>
    <br>
    <br>
    <div v-if="ids.length > 0">
      <h3>조회결과</h3>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">아이디</th>
          <th scope="col">가입일</th>
        </tr>
        </thead>
        <tbody>
        <tr class="tr"  style="cursor: pointer"
            v-for="(item, index) in ids"
            v-bind:key="index"
        >
          <td>{{(index + 1) }}</td>
          <td>{{item.loginId}}</td>
          <td>{{item.regDt}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import service from "@/service";
import MemberFindId from "@/dto/member/MemberFindId";
import {ref} from "vue";
export default {
  name: "FindLoginId",
  setup() {
    const ids = ref([])

    return {
      ids
    }
  },
  methods: {
    FindId() {
      service
          .MemberFindId(new MemberFindId('00000'), null, null)
          .then(res => {
             if(res.data.resultCode == '00000') {
               this.ids = res.data.content.ids
               alert('아이디 조회 성공')
             } else {
               alert('아이디 조회 실패')
             }
          })
          .catch(err => {
            alert('아이디 조회 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>
