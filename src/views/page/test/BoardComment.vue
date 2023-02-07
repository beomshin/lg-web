<template>
  <div>
    <div>
      <hr>
      <h2>댓글 달기</h2>
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
      <button class="btn btn-secondary" @click="Enroll">댓글달기</button>
    </div>
    <div>
      <hr>
      <h2>댓글 ({{this.commentCnt}})개</h2>
      <ul class="list-group">
        <template v-for="(key, idx) in comments.keys()" :key="idx">
          <template v-for="(item, index) in comments[key]" :key="index">

            <template v-if="item.depth == 1">
              <button type="button" class="list-group-item list-group-item-action" style="background-color: lightpink" @click="SHOW(idx, item.boardCommentId)">
                {{item.content}} - {{item.writer}}
              </button>
              <li class="list-group-item" v-if="commentIdx == idx && active">
                <h3>대댓글 달기</h3>
                <hr>
                <div v-if="!hasLogin">
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="id2" maxlength="16" placeholder="아이디">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" v-model="password2" maxlength="32" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content2" ></textarea>
                  </div>
                </div>
                <button class="btn btn-secondary" @click="EnrollComment">대댓글달기</button>
              </li>
            </template>

            <template v-else-if="item.depth == 2">
              <button type="button" class="list-group-item list-group-item-action" @click="SHOW(idx, item.bundleId)">
                └ {{item.content}} - {{item.writer}}
              </button>
            </template>

          </template>

        </template>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
import EnrollBoardMemberComment from "@/dto/member/EnrollBoardMemberComment";
import EnrollBoardAnonymComment from "@/dto/member/EnrollBoardAnonymComment";
const { cookies } = useCookies();

export default {
  name: "BoardComment",
  props: ['boardId', 'hasLogin','comments', 'commentCnt'],
  setup () {
    const id = ref('')
    const password = ref('')
    const content = ref('')
    const id2 = ref('')
    const password2 = ref('')
    const content2 = ref('')
    const active = ref(false)
    const commentIdx = ref(0)
    const bundleId = ref(0)

    return {
      id,
      password,
      content,
      commentIdx,
      active,
      id2,
      password2,
      content2,
      bundleId
    }
  },
  methods: {
    Enroll() {
      if (this.hasLogin) {
        this.EnrollMemberComment(this.content,null, 1);
      } else {
        this.EnrollAnonymComment(this.content,null, 1, this.id, this.password);
      }
    },
    EnrollComment () {
      if (this.hasLogin) {
        this.EnrollMemberComment(this.content2, this.bundleId, 2);
      } else {
        this.EnrollAnonymComment(this.content2, this.bundleId, 2, this.id2, this.password2);
      }
    },
    EnrollMemberComment(content, bundleId, depth) {
      const request = new EnrollBoardMemberComment(this.boardId, bundleId, content, depth)
      let token = 'Bearer ' + cookies.get('lg.m.log');
      service
          .enrollMemberComment(request, {
            "Authorization": token
          })
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
              this.content = ''
              this.active = false;
              this.$emit('ReFindComment')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
    EnrollAnonymComment(content,bundleId, depth, id, password) {
      const request = new EnrollBoardAnonymComment(this.boardId, bundleId, id, password, content, depth)
      service
          .enrollAnonymComment(request, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
              this.content = ''
              this.active = false;
              this.$emit('ReFindComment')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
    SHOW(index, bundleId) {
      if (this.commentIdx == index) {
        this.active = !this.active
        this.commentIdx = index
      } else {
        this.commentIdx = index
        this.active = true
      }
      this.id2 = ''
      this.password2 = ''
      this.content2 = ''
      this.bundleId = bundleId
    }
  }
}
</script>

<style scoped>

</style>
