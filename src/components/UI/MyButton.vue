<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
	name: 'MyButton',
});
</script>

<template>
	<button @click="$emit('clickButton')" :class="$attrs.class">
		<div class="btn__effect"></div>
		<slot></slot>
	</button>
</template>

