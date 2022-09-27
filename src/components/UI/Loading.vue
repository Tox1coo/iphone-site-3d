<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
	name: 'Loading',
})
</script>

<template>
	<div class="loading">
		<div class="loading__block">
			<div class="logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="4 32 376.4 449.4" width="100" height="100">
					<path
						d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
				</svg>
			</div>
		</div>
		<h1 class="gradient-title loading__title">Loading...</h1>
	</div>
</template>

<style lang="scss" scoped>
.loading {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: $primary1;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	&__block {
		position: relative;
		z-index: 0;
		background: $linear-gradient;
		width: 20rem;
		height: 20rem;
		border-radius: 20px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		&::before {
			content: '';
			display: block;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: $linear-gradient-back;
			animation: loading 2s linear infinite;
			position: absolute;
			z-index: 1;
			border-radius: 10px;
		}
	}

	&__title {
		background-size: 200% auto;

		animation: loading-text 2s linear infinite;
	}

}


.logo {
	width: 100px;
	height: 100px;
	border-radius: 25px;
	position: relative;
	z-index: 2;

	svg {
		fill: #fff
	}

}

@keyframes loading {
	from {
		transform: translateX(-100%)
	}

	to {
		transform: translateX(100%)
	}
}

@keyframes loading-text {
	to {
		background-position: -200% center;
	}
}
</style>