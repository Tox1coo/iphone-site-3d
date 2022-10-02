<script lang="ts">

import { defineComponent, ref } from 'vue';



export default defineComponent({
	setup() {
		const jobs = ref<HTMLElement>();
		const texts = ref<HTMLElement>();

		const messeges = [
			{ text: 'SO.COLD.' },
			{ text: 'SO.BOLD.' },
		];
		return { messeges, jobs, texts };
	},
});
</script>

<template>
	<section ref="hero" class="hero">
		<div class="hero__inner">
			<video src="@/assets/iphone-video.mp4" preload="auto" autoplay="true" loop type="video/mp4" muted></video>

			<div class="hero__texts" ref="heroTexts">
				<h3 class="hero__title title">
					Iphone 14 Pro Max
				</h3>
				<Title class="gradient-title" v-for="(text,index) in messeges" :key="index" :title="text.text"></Title>
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

	&__texts {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: $zTop + 1;

		.gradient-title {
			font-size: 8rem;
			position: absolute;
			z-index: $zTop + 1;
			top: 50%;
			transform: translateY(-50%);
			left: 30px;

			&:last-child {
				left: auto;
				right: 30px;
				background: $linear-gradient-back;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			@media (max-width: 1270px) {
				font-size: 6rem;
			}
		}
	}

	&__title {
		position: absolute;
		top: 15px;
		left: 15px;
	}
}
</style>