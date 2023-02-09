<template>
  <div style="width: 700px">
    <button type="button"
            class="list-group-item list-group-item-action"
            :class="comment.depth == 1 ? 'pink' : ''"
            @click.stop="ActiveDiv(index, 0)"
    >
      <template v-if="comment.depth == 2">└ </template>{{comment.content}} - {{comment.writer}} - {{comment.regDt}}
      <div style="float: right">
        <template v-if="comment.anonym == 1">
          <button
              class="btn btn-outline-primary"
              type="button" id="button-addon2"
              @click.stop="ActiveDiv(index, 1)"
          >수정</button>
          <button
              class="btn btn-outline-danger"
              type="button" id="button-addon2"
              style="margin-left: 5px"
              @click.stop="ActiveDiv(index, 2)"
          >삭제</button>
        </template>
        <template v-else-if="comment.anonym == 0 && comment.created == 1">
          <button
              class="btn btn-outline-primary"
              type="button" id="button-addon2"
              @click.stop="ActiveDiv(index, 1)"
          >수정</button>
          <button
              class="btn btn-outline-danger"
              type="button" id="button-addon2"
              style="margin-left: 5px"
              @click.stop="ActiveDiv(index, 2)"
          >삭제</button>
        </template>

      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoardComment",
  props: ['comment', 'index'],
  methods: {
    ActiveDiv(index, type) {
      this.$emit('ActiveDiv', {index, type})
    },
  }
}
</script>

<style scoped>
.pink {
  background-color: lightblue;
}
</style>