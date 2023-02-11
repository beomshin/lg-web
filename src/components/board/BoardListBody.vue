<template>
  <tbody>
    <tr class="tr"  style="cursor: pointer"
        v-for="(item, index) in boards"
        v-bind:key="index"
    >
      <td>{{(index + 1) + (curPage * 10)}}</td>
      <td>{{item.title}}</td>
      <td>{{lineName(item.lineType)}}</td>
      <td>{{item.writer}}
        <strong v-if="item.tierName">({{item.tierName}})</strong>
        <template v-if="item.writerType != 0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          </svg>
        </template>
      </td>
      <td>{{item.writeDt}}</td>
      <td>{{item.commentCnt - 1}}</td>
      <td>{{item.view}}</td>
      <td>{{item.recommendCnt}}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "BoardListBody",
  props: ['boards', 'curPage'],
  methods: {
    lineName(lineType) {
      switch (lineType) {
        case 0 : return '탑'
        case 1 : return '정글'
        case 2 : return '미드'
        case 3 : return '원딜'
        case 4 : return '서폿'
      }
    }
  }
}
</script>

<style scoped>

</style>