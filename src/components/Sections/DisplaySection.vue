<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useLoading } from "../../store/loading/loading";

export default defineComponent({
	setup() {
		const loading = useLoading();
		const messeges = [
			{ title: "Super Retina XDR Display", texts: ["Super bright and high resolution display. Get an silky smooth scrolling experience with 120Hz display.", "Super Retina and Super Retina XDR also feature High Dynamic Range (HDR), which delivers a broad range of dark and light areas in photos and video."], align: 'flex-end', alignText: 'right' },
			{ title: "Big is better", texts: ['The iPhone 14 models come in 6.1- and 6.7-inch sizes. The new 6.7-inch iPhone 14 is called the "iPhone 14 Plus".'], align: 'flex-start', alignText: 'left' },
			{ title: "Protection above all!", texts: ["A durable Ceramic Shield front cover protects the iPhone's display from bumps and drops, and the iPhone 14 models are IP68 water resistant, allowing them to withstand a depth of 6 meters for up to 30 minutes."], align: 'flex-end', alignText: 'right' },
		];
		const titles: Array<String> = ['Tougher then ever!', "Every touch matters."];
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger)
			const interval = setInterval(() => {

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		});


		function animate() {
			let t1 = gsap.timeline({
				scrollTrigger: {
					trigger: '.gradient-title0',
					start: 'top-=100 bottom',
					end: 'bottom top',
					scrub: 1,
				}
			})
				.fromTo('.gradient-title0', { x: 0 }, { x: '20%' }, "key1")
				.fromTo('.gradient-title1', { x: 0 }, { x: '-20%' }, "key1")
			return () => {
				if (t1) t1.kill()
			}
		}
		return { messeges, titles };
	},
});
</script>

<template>
	<section id="display" ref="display" class="display">
		<div class="display__inner">
			<div class="display__titles">
				<Title :title="'Immersive Display'" class="gradient-title gradient-title--light"></Title>
			</div>
			<div :style="{'align-items': block.align,'text-align': block.alignText}" v-for="(block, index) in messeges"
				:id="`blockText${index+1}`" :key="index" class="display__block">
				<Title :title="block.title" class="title"></Title>
				<TextBlock v-for="(text, index) in block.texts" :key="index" :text="text" class="text text--small">
				</TextBlock>
			</div>
			<div class="display__footer">
				<Title v-for="(title, index) in titles" :key="index" :title="title"
					class="gradient-title gradient-title--light" :class="`gradient-title${index}`"></Title>
			</div>
		</div>
	</section>
</template>


<style lang="scss">
.display {
	min-height: 200vh;
	background-color: $primaryBackgroundDark;
	position: relative;

	&__titles {

		.gradient-title {
			position: absolute;
			top: 5rem;
			left: 8rem;
			width: 30%;

			@media (max-width: 910px) {
				width: 50%;
			}

			@media (max-width: 520px) {
				left: 3rem;
			}
		}
	}

	&__inner {
		height: 200vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 5rem;

		@media (max-width: 520px) {
			padding: 2rem;
		}
	}

	&__block {
		font-size: 2rem;
		display: flex;
		flex-direction: column;

		.title {
			color: #fff;
		}

		.text {
			width: 50%;
		}
	}

	&__footer {
		display: flex;
		flex-direction: column;
		position: relative;
		justify-content: center;
		align-items: center;
		transform: rotate(-15deg);
		transform-origin: center;
		z-index: $zTop + 1;

		.gradient-title {
			position: relative;
			line-height: 1.5;
			pointer-events: none;

			@media (max-width: 520px) {
				font-size: 2.5rem !important;
			}
		}
	}
}
</style>