<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { defineComponent, onMounted, ref } from 'vue';
import { useLoading } from "../../store/loading/loading"

export default defineComponent({
	setup() {
		const loading = useLoading();
		const jobs = ref<HTMLElement>();
		const messeges = [
			{ text: "\"You can't connect the dots looking forward; you can only connect them looking backwards.", delay: 0.2 },
			{ text: "So you have to trust that the dots will somehow connect in your future.", delay: 0.4 },
			{ text: " You have to trust in something - your gut, destiny, life, karma, whatever.", delay: 0.6 },
			{ text: "This approach has never let me down, and it has made all the difference in my life.\"", delay: 0.8 },
			{ text: "Steve Jobs on life, 2005", delay: 1 },
		];
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger);
			const interval = setInterval(() => {
				console.log(loading.getIsLoading);

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)

			const end = `${jobs.value.clientHeight}`;
			console.log(end);

		})
		function animate() {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				trigger: "#jobs",
				start: "top top",
				pin: true,
				pinSpacing: false
			});
		}
		return { messeges, jobs }
	},

	mounted() {

	},
	methods: {

	}
});
</script>

<template>
	<section ref="jobs" class="jobs" id="jobs">
		<div class="jobs__texts">
			<div v-for="(text,index) in messeges" class="jobs__text">
				<TextGradient :key="index" :text="text.text" :animationDelay="text.delay">
				</TextGradient>
			</div>
		</div>
	</section>
</template>


<style lang="scss">
.jobs {
	min-width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	position: relative;
	align-items: center;

	&__texts {
		width: 100vw;
		height: 100vh;
		background-color: $primary1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__text {
		width: 50%;
		overflow: hidden;

		&:last-child {
			text-align: right;
		}

		&:first-child {
			text-indent: 5px;
		}

	}
}
</style>