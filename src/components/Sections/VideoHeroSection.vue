<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
	setup() {
		const jobs = ref<HTMLElement>();
		const texts = ref<HTMLElement>();

		const messeges = [
			{ text: 'SO COLD' },
			{ text: 'SO BOLD' },
		];
		onMounted(() => {

		})
		return { messeges, jobs, texts };
	},
});
</script>

<template>
	<section ref="hero" class="hero">
		<div class="hero__inner">
			<video src="@/assets/iphone-video.mp4" preload="auto" autoplay="true" loop type="video/mp4" muted></video>

			<div class="hero__texts" ref="heroTexts">
				<TextGradient v-for="(text,index) in messeges" :key="index" :text="text.text"></TextGradient>
			</div>
		</div>
	</section>
</template>


<style lang="scss">
.hero {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;

	&__inner {
		position: relative;
		width: 100%;
		height: 100%;
	}

	video {
		min-height: 100vh;
		min-width: 100%;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}

}
</style>