<template>
  <test-header />
  <test-body/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TestHeader from '@/components/test/TestHeader.vue'
import TestBody from '@/components/test/TestBody.vue'

@Options({
  components: {
    TestHeader,
    TestBody
  }
})
export default class HomeView extends Vue {
}
</script>
