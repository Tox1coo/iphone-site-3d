<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLoading } from "../../store/loading/loading"
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
export default defineComponent({
	setup() {
		const loading = useLoading();
		const messeges: Array<string> = [
			'The iPhone 14 offers up to 20 hours of battery life for video playback, up to 16 hours for streaming video playback, and up to 80 hours for audio playback.',
			'The iPhone 14 Plus offers up to 26 hours of video playback, up to 20 hours of streaming video playback, and up to 100 hours of audio playback.'
		];
		onMounted(() => {
			const interval = setInterval(() => {
				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		});
		onBeforeUnmount(() => {
			window.removeEventListener('resize', animate)
		})
		function animate() {
			const t1 = gsap.timeline({});

			const batteryElemetns = document.querySelectorAll('li');

			batteryElemetns.forEach(li => {
				t1.to(li, {
					scrollTrigger: {
						trigger: li,
						start: 'top center',
						end: 'bottom center',
						scrub: 1
					},
					opacity: 1
				})
			});

			return () => {
				if (t1) t1.kill()
			}
		}
		return { messeges }
	},
});
</script>

<template>
	<section id="battery" ref="battery" class="battery">
		<div class="battery__texts">
			<Title class="gradient-title" :title="'Go All Day With Single Charge...'"></Title>
			<TextBlock v-for="(text, index) in messeges" :key="index" :text="text" class="text text--small"></TextBlock>
		</div>
		<div class="battery__animation">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</div>
	</section>
</template>


<style lang="scss">
.battery {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: rgba($primary1, 0.2);

	&__texts {
		z-index: $zTop + 1;
		font-size: 2.5rem;
		flex: 0 1 50%;

		.title {
			font-size: 4em;
		}

		.text {

			background: $linearText;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 2;
			font-weight: 700;
		}
	}

	&__animation {
		width: 20rem;
		height: 40rem;
		border: 3px solid $primaryBackgroundDark;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		padding: 5px;
		gap: 5px;
		position: relative;

		li {
			list-style: none;
			width: 100%;
			height: calc((40rem / 4) - 2px);
			background: $linear-gradient;
			opacity: 0;

		}

		&::after {
			content: '';
			display: block;
			width: 50%;
			height: 2rem;
			background-color: #000;
			position: absolute;
			bottom: -2rem;
			left: 50%;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			transform: translateX(-50%)
		}
	}
}
</style>