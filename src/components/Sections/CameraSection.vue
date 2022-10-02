<script lang="ts">
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import { useLoading } from "../../store/loading/loading";
export default defineComponent({
	setup() {
		const loading = useLoading();
		const titles: Array<string> = ['Ready', 'Steady', 'Action']
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


		function animate() {
			gsap.to('.camera', {
				scrollTrigger: {
					trigger: '.camera',
					start: "top top",
					end: `bottom+=500 bottom`,
					scrub: 1,
					pin: true,
					pinSpacing: true,
				},
			});
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.camera',
					start: 'top top',
					end: 'bottom+=500 bottom',
					scrub: 1,
				},
			})
				.to('#video1', { scale: 0.4, 'border-radius': 50 }, "key1")
				.to('#video2', { scale: 0.6, 'border-radius': 50 }, "key1")

			const elementTitles = document.querySelectorAll('.camera__title');
			elementTitles.forEach((element) => {
				tl.fromTo(element, {
					scrollTrigger: {
						trigger: element,
						start: 'top top',
						end: 'bottom bottom',
						scrub: 1
					},
					x: 100,
					opacity: 0
				},
					{
						x: 0,
						opacity: 1
					})
			})
		}
		return { loading, titles }
	},
});
</script>

<template>
	<section ref="camera" class="camera">
		<div class="camera__videos">
			<video id="video1" src="@/assets/vid-hor1.mp4" preload="auto" autoplay="true" loop type="video/mp4"
				muted></video>
			<video id="video2" src="@/assets/vid-hor2.mp4" preload="auto" autoplay="true" loop type="video/mp4"
				muted></video>

		</div>
		<div class="camera__titles">
			<Title v-for="(title, index) in titles" :key="index" :title="title" class="title title--dark camera__title">
			</Title>
		</div>
	</section>
</template>


<style lang="scss" scoped>
$countTitle: 3;
$countVideos: 3;

.camera {
	width: 100vw;
	height: 100vh !important;
	position: relative;
	z-index: $zTop + 1;
	overflow: hidden;
	background-color: #fff;



	&__titles {
		width: 50%;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		position: absolute;

		@media(max-width: 1000px) {
			top: auto;
			right: auto;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);

			.title {
				font-size: 6rem;
			}
		}
	}

	&__title {
		font-size: 8rem;
	}

	&__videos {
		height: 100%;
		width: 100%;

		video {
			position: relative;
			z-index: $zTop + 1;
			object-fit: cover;
		}
	}
}

@for $i from 1 through $countTitle {
	.camera__title:nth-child(#{$i}) {
		margin-left: $i * 8rem;
	}
}

@for $i from 1 through $countVideos {
	video:nth-child(#{$i}) {
		position: absolute;

		@if $i ==1 {
			width: 100%;
			height: 100%;

		}



		@else {
			width: 100% - $i * 20;
			z-index: $zTop - $i;
		}

		@if $i ==3 {
			height: 80%;
		}
	}
}
</style>