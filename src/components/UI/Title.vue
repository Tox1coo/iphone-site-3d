<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Title',
	props: {
		title: String,
	},
});
</script>

<template>
	<h1 :class="$attrs.class">{{title}}</h1>
</template>
