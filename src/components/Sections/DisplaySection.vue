<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		const jobs = ref<HTMLElement>();
		const messeges = [
			{ text: "Flaw-Less Design With Strong Durability." },
			{ text: "Flat-Edge Design With Toughest Smartphones Glass" },
		];
		return { messeges, jobs };
	},
});
</script>

<template>
	<section id="display" ref="display" class="display">
		<div class="display__texts">
			<Title :title="'Immersive Display'" class="gradient-title gradient-title--light"></Title>
		</div>
	</section>
</template>


<style lang="scss">
.display {
	min-height: 200vh;
	background-color: $primaryTitle2;

	.display__texts {
		position: relative;

		.gradient-title {
			position: absolute;
			top: 5rem;
			left: 8rem;
			width: 30%;
		}
	}
}
</style>