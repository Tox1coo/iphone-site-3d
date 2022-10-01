<script lang="ts">

import { defineComponent } from 'vue';

import { Color } from "../../utils/interfaceAndTypes/interfaces";

export default defineComponent({
	name: 'MyButton',
	props: {
		color: {
			type: Object as () => Color,
		},
		activeColor: {
			type: Object as () => Color,
		}
	}
});
</script>

<template>
	<li @click="$emit('changeColor', color)" :style="{'background-color': `rgb(${color.rgbaColorText})`}"
		class="color-picker" :class="{'color-picker_active':activeColor.rgbaColorText === color.rgbaColorText}">
		<slot></slot>
	</li>
</template>


<style lang="scss" scoped>
.color-picker {
	width: 40px;
	height: 40px;
	border: 2px solid #ccc;
	border-radius: 50%;
	list-style: none;
	cursor: pointer;

	&_active {
		border: 2px solid #000;
		transition: all 0.2s ease 0s;
	}
}
</style>