<template>
  <tbody>
    <tr class="tr"  style="cursor: pointer"
        v-for="(item, index) in messages"
        v-bind:key="index"
    >
      <td>{{(index + 1) + (curPage * pageNum)}}</td>
      <td>{{item.title}}</td>
      <td>{{item.content}}</td>
      <td>{{item.receiver}}</td>
      <td>{{item.sender}}</td>
      <td>{{item.readFlag == 1 ? '읽음' : '미읽음'}}</td>
      <td>{{item.regDt}}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "AlarmListBody",
  props: ['messages', 'curPage', 'pageNum'],
}
</script>

<style scoped>

</style>
