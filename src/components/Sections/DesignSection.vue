<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLoading } from "../../store/loading/loading"

import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
export default defineComponent({
	setup() {
		const design = ref<HTMLElement>();
		const designTitle1 = ref<HTMLElement>();
		const designTitle2 = ref<HTMLElement>();
		const loading = useLoading();

		const messeges = [
			{ text: "Flaw-Less Design With Strong Durability." },
			{ text: "Flat-Edge Design With Toughest Smartphones Glass" },
		];
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger)

			const interval = setInterval(() => {

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		})

		function animate() {
			let t1 = gsap
				.timeline({
					scrollTrigger: {
						trigger: '.design__texts',
						start: "top-=700 bottom",
						end: "bottom top",
						scrub: 1,
					}
				})
				.fromTo('.design__title--first', { x: 0 }, { x: "10%" }, "key1")
				.fromTo('.design__title--second', { x: 0 }, { x: "-10%" }, "key1");
			return () => {
				if (t1) t1.kill()
			}
		}
		return {
			messeges, design, designTitle1,
			designTitle2
		}
	},
});
</script>

<template>
	<section id="design" ref="design" class="design">
		<div class="design__texts">
			<Title class="title title--dark design__title" v-for="(text, index) in messeges" :key="index"
				:refs="`designTitle${index}`" :title="text.text"
				:class="{'design__title--first': index===0, 'design__title--second': index===1}"></Title>
		</div>
	</section>
</template>


<style lang="scss">
.design {
	width: 100vw;
	height: 100vh;

	@media (max-width: 650px) {
		height: 50vh;
	}

	&__texts {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		.title--dark {
			width: 80%;
			font-size: 9rem;
			position: absolute;
			top: 8rem;
			left: 8rem;

			&:last-child {

				text-align: right;
				bottom: 8rem;
				top: auto;
				right: 8rem;
				left: auto;
				z-index: $zTop + 1;
			}

			@media (max-width: 1270px) {
				font-size: 6rem;
			}

			@media (max-width: 520px) {
				left: 3rem;

				&:last-child {

					right: 3rem;
				}
			}
		}
	}
}
</style>