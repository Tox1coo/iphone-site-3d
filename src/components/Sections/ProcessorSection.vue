<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
});
</script>

<template>
	<section id="processor" ref="processor" class="processor">
		<div class="processor__info">
			<TextBlock class="text text--small"
				:text="'The Apple A16 Bionic features an Apple-designed 64-bit six-core CPU implementing ARMv8. 6-A (no SM4 of v8. 6, but with HCX) with two \'Everest\' high-performance cores running @3,46GHz and four \'Sawtooth\' energy-efficient cores running @2,02GHz'">
			</TextBlock>
			<picture>
				<source srcset="../../assets/chip.webp" width="300" media="(max-width: 710px)" />

				<source srcset="../../assets/chip.webp" width="400" media="(max-width: 1000px)" />

				<img width="550" height="550" class="processor__photo" src="../../assets/chip.webp" alt="">
			</picture>
		</div>
		<Title class="gradient-title gradient-title--light" :title="'FASTEST PROCESSOR'"></Title>
	</section>
</template>


<style lang="scss">
.processor {
	min-height: 80vh;
	background-color: $primaryBackgroundDark;
	padding-bottom: 25px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-left: 50px;

	&__info {
		display: flex;
		align-items: center;
		font-size: 2rem;
		gap: 80px;

		@media (max-width: 600px) {
			flex-direction: column;
			align-items: center;

			img {
				order: 0;
			}

			.text--small {
				order: 1
			}
		}

		.text {
			flex: 0 1 32%;
		}
	}

	&__photo {
		box-shadow: 0px 0px 20px #FCB4F5;
	}

	.gradient-title {
		text-align: center;
		margin-top: 80px;
	}
}
</style>