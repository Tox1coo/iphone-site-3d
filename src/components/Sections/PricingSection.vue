<script lang="ts">
import { defineComponent, ref } from 'vue';
import { colorsData } from '../../store/colors/colors'
import { dataColor } from "../../utils/dataColors"
import Scene3 from "../Scene/Scene3.vue";
import ColorPicker from "../ColorPicker/ColorPicker.vue";
import { Color } from "../../utils/interfaceAndTypes/interfaces";
import { changeColor } from "../../utils/changeColor"

export default defineComponent({
	setup() {
		const colors = dataColor;
		const color = colorsData();
		const pricing = ref<HTMLElement>();
		return {
			colors,
			color,
			pricing
		};
	},
	computed: {
		getActiveColorPricing(): Color {
			return this.color.getActiveColorPricing
		}
	},
	methods: {
		changeColor(color: Color): void {
			changeColor(color, 'updateActiveColorPricing')
		}
	},
	watch: {
		getActiveColorPricing(color) {
		}
	},
	components: { Scene3, ColorPicker }
});
</script>

<template>
	<section :style="{background: `rgba(${getActiveColorPricing.rgbaColorText}, 1)`}" ref="pricing" class="pricing">
		<div class="pricing__colors">
			<span class="text">
				360° ⟲
			</span>
			<ul class="pricing__picker">
				<ColorPicker v-for="colorPicker in colors" :active-color="getActiveColorPricing" :color="colorPicker"
					@changeColor="changeColor">
				</ColorPicker>
			</ul>
			<Scene3></Scene3>
		</div>


		<div class="pricing__info">
			<Title :title="'Iphone 14 Pro Max'" class="title title--dark"></Title>
			<TextBlock :text="'from $999'" class="text text--price"></TextBlock>
			<MyButton @clickButton="2" class="btn">Купить</MyButton>
		</div>

	</section>
</template>


<style lang="scss" scoped>
.pricing {
	position: relative;
	width: 100vw;
	height: 100vh;
	z-index: $zTop + 1;
	transition: background 0.4s ease 0s;
	overflow: hidden;

	&__colors {
		position: relative;
		width: 100%;
		cursor: grab;
		height: 70vh;

		.text {
			position: absolute;
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
			color: #000;
		}
	}

	&__picker {
		z-index: $zTop + 1;
		position: absolute;
		top: 50%;
		left: 20%;
		transform: translate(-80%, -50%);
		display: flex;
		flex-direction: column;
		gap: 5px;

		@media (max-width: 600px) {

			left: 15%;
			transform: translate(-85%, -50%);
		}
	}


	&__info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.text {
			margin-bottom: 10px;
		}
	}
}
</style>