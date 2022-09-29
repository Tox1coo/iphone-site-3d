<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
	name: 'TextBlock',
	props: {
		text: String,
	},
});
</script>

<template>
	<p :class="$attrs.class">{{text}}</p>
</template>
