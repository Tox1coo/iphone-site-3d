<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		const jobs = ref<HTMLElement>();
		const messeges = [
			{ text: "\"You can't connect the dots looking forward; you can only connect them looking backwards.", delay: 0.2 },
			{ text: "So you have to trust that the dots will somehow connect in your future.", delay: 0.4 },
			{ text: " You have to trust in something - your gut, destiny, life, karma, whatever.", delay: 0.6 },
			{ text: "This approach has never let me down, and it has made all the difference in my life.\"", delay: 0.8 },
			{ text: "Steve Jobs on life, 2005", delay: 1 },
		];
		return { messeges, jobs }
	},
});
</script>

<template>
	<section id="display" ref="display" class="display">
	</section>
</template>


<style lang="scss">
.display {
	min-height: 200vh;
	background-color: $primary1;
}
</style>