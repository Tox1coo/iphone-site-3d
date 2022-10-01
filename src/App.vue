<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent, reactive, ref } from 'vue';
import Scene1 from "./components/Scene/Scene1.vue"
import { useLoading } from "./store/loading/loading"
import SectionJobs from './components/Sections/SectionJobs.vue';
import VideoHeroSection from './components/Sections/VideoHeroSection.vue';
import BatterySection from './components/Sections/BatterySection.vue';
import DesignSection from './components/Sections/DesignSection.vue';
import DisplaySection from './components/Sections/DisplaySection.vue';
import ProcessorSection from './components/Sections/ProcessorSection.vue';
import ColorSection from './components/Sections/ColorSection.vue';
import CameraSection from './components/Sections/CameraSection.vue';
import PricingSection from './components/Sections/PricingSection.vue';

export default defineComponent({
  setup() {
    const loading = useLoading();
    return { loading }
  },
  components: { Scene1, SectionJobs, VideoHeroSection, BatterySection, DesignSection, DisplaySection, ProcessorSection, ColorSection, CameraSection, PricingSection }
})
</script>

<template>
  <main v-show="loading.getIsLoading" class="main">
    <SectionJobs></SectionJobs>
    <Scene1></Scene1>
    <VideoHeroSection></VideoHeroSection>

    <DesignSection></DesignSection>
    <DisplaySection></DisplaySection>
    <ProcessorSection></ProcessorSection>
    <BatterySection></BatterySection>
    <ColorSection></ColorSection>
    <CameraSection></CameraSection>
    <PricingSection></PricingSection>
  </main>
  <Loading v-if="!loading.getIsLoading"></Loading>
</template>

<style scoped lang="scss">

</style>


