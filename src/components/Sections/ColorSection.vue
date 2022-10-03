<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import { useLoading } from "../../store/loading/loading";
import Scene2 from "../Scene/Scene2.vue";
import { dataColor } from "../../utils/dataColors"
import { colorsData } from '../../store/colors/colors'
import { changeColor } from "../../utils/changeColor"
export default defineComponent({
	setup() {
		const colors = dataColor;
		const activeColor = colorsData();
		const loading = useLoading();
		const colorElem = ref<HTMLElement>();

		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger);
			const interval = setInterval(() => {

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		})

		let updateColor = (name: string) => {

			changeColor(colors[name], 'updateActiveColor');
		};
		function animate() {

			gsap.to('.colors', {
				scrollTrigger: {
					trigger: '.colors',
					start: 'top top',
					end: `+=${colorElem.value?.offsetWidth + 1000}`,
					scrub: 1,
					pin: true,
					pinSpacing: true
				}
			})
			let t1 = gsap.timeline({
				scrollTrigger: {
					trigger: '.colors',
					start: 'top top',
					end: `+=${colorElem.value?.offsetWidth + 1000}`,
					scrub: 1,
				},
			}).to('.colors', {
				onStart: updateColor,
				onStartParams: ['deepPurple'],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ['deepPurple'],
			})
				.to('.colors', {
					onStart: updateColor,
					onStartParams: ['midNight'],
					onReverseComplete: updateColor,
					onReverseCompleteParams: ['midNight'],
				})
				.to('.colors', {
					onStart: updateColor,
					onStartParams: ['blue'],
					onReverseComplete: updateColor,
					onReverseCompleteParams: ['blue'],
				})
				.to('.colors', {
					onStart: updateColor,
					onStartParams: ['starLight'],
					onReverseComplete: updateColor,
					onReverseCompleteParams: ['starLight'],
				})
				.to('.colors', {
					onStart: updateColor,
					onStartParams: ['red'],
					onReverseComplete: updateColor,
					onReverseCompleteParams: ['red'],
				})


		}
		return { colors, activeColor, loading, colorElem }
	},
	components: { Scene2 }
});
</script>

<template>
	<section ref="colorElem" class="colors">
		<div :style="{background: `rgba(${ activeColor.getActiveColor.rgbaColorText}, 0.8)`}" class="colors__left"></div>
		<h1 class="title title--dark colors__title">
			{{activeColor.getActiveColor.name}}</h1>
		<div :style="{background: `rgba(${ activeColor.getActiveColor.rgbaColorText}, 0.5)`}" class="colors__right">
		</div>
		<Scene2></Scene2>
	</section>
</template>


<style lang="scss" scoped>
.colors {
	display: flex;
	width: 100vw !important;
	position: relative;
	overflow: hidden;


	&__left {
		display: inline-block;
		height: 100vh;
		min-width: 50vw;
	}

	&__right {
		display: inline-block;
		height: 100vh;
		min-width: 50vw;
	}

	&__title {
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -60%) rotate(-90deg);
		text-transform: uppercase;

		@media (max-width: 420px) {
			font-size: 2.5rem !important;
		}

		@media (max-width: 380px) {
			font-size: 2rem !important;
		}
	}

	@media(max-width: 510px) {
		&__left {
			min-width: 100vw;
		}

		&__right {
			display: none;
		}

		.title {
			top: 20px;
			text-transform: uppercase;
			transform: translate(-50%, 0);
		}
	}
}
</style>