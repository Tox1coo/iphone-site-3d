<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent, reactive, ref } from 'vue';
import Scene1 from "./components/Scene/Scene1.vue"
import { useLoading } from "./store/loading/loading"
export default defineComponent({
  setup() {
    const loading = useLoading();
    return { loading }
  },
  components: { Scene1 }
})
</script>

<template>
  <main v-show="loading.getIsLoading" class="main">
    <Scene1></Scene1>
  </main>
  <Loading v-if="!loading.getIsLoading"></Loading>
</template>

<style scoped lang="scss">
.main {}
</style>


