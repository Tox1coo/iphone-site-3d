<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
	name: 'TextGradient',
	props: {
		text: String,
		animationDelay: Number
	},
	setup(props) {
		const textitem = ref<HTMLElement>();

		onMounted(() => {
			if (props.animationDelay) {
				textitem.value.style.cssText =
					`animation-duration: 2.5s;
				animation-fill-mode:forwards;
				animation-delay: ${props.animationDelay}s;`;
			}

		})

		return { textitem }
	},

});
</script>

<template>
	<p ref="textitem" class="gradient-text">{{text}}</p>
</template>


<style lang="scss" scoped>
.gradient-text {
	transform: translateY(10rem);
	animation-name: moveUp;
	animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
}

@keyframes moveUp {
	100% {
		transform: translateY(0)
	}
}
</style>