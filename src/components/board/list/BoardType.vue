<template>
  <div style="margin-top: 5px; margin-bottom: 5px">
    <select class="form-select" aria-label="Default select example" @change="ChooseType($event.target.value)">
      <template v-for="(item, index) in types" :key="index">
        <option :value="item.val" :selected="type == item.val">{{item.name}}</option>
      </template>
    </select>
    <select style="margin-left: 5px" class="form-select" aria-label="Default select example" @change="ChoosePageNum($event.target.value)">
      <template v-for="(item, index) in pageNums" :key="index">
        <option :value="item.val" :selected="pageNum == item.val">{{item.name}}</option>
      </template>
    </select>
    <button type="button" class="btn btn-sm" :class="{'btn-secondary': topic == '0', 'btn-outline-secondary' : topic != '0'}" style="margin-left: 5px" @click="FindAll">전체</button>
    <button type="button" class="btn btn-sm" :class="{'btn-secondary': topic == '1', 'btn-outline-secondary' : topic != '1'}" style="margin-left: 5px" @click="FindHot">HOT</button>
    <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="MoveDetail">글쓰기</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "BoardType",
  props: ['pageNum', 'topic', 'type'],
  setup() {
    const types = ref([
      {
        name: '탑',
        val: 0
      },
      {
        name: '정글',
        val: 1
      },
      {
        name: '미드',
        val: 2
      },
      {
        name: '원딜',
        val: 3
      },
      {
        name: '서폿',
        val: 4
      },
      {
        name: '전체',
        val: 5
      }
    ])

    const pageNums = ref([
      {
        name: '10',
        val: 10
      },
      {
        name: '30',
        val: 30
      },
      {
        name: '50',
        val: 50
      },
    ])

    return {
      types,
      pageNums
    }
  },
  methods: {
    FindAll() {
      this.$emit('FindAll')
    },
    FindHot() {
      this.$emit('FindHot')
    },
    MoveDetail() {
      this.$emit('MoveDetail')
    },
    ChooseType(type) {
      this.$emit('ChooseType', type)
    },
    ChoosePageNum(pageNum) {
      this.$emit('ChoosePageNum', pageNum)
    },
  }
}
</script>

<style scoped>

</style>