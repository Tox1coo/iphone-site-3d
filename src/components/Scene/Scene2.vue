<script lang="ts">
import * as THREE from 'three';
import { useLoading } from "../../store/loading/loading"
import { gsap } from "gsap"
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
export default defineComponent({
	setup() {
		const loading = useLoading();
		const sceneIphone = ref<HTMLElement>();
		const camera = ref<HTMLElement>();
		const scene = ref<HTMLElement>();
		return { loading, sceneIphone, camera, scene }
	},
	methods: {
		onLoadModel(object: unknown) {
			const door30Bbox = new THREE.Box3();
			door30Bbox.setFromObject(object.scene);
			object.scene.traverse(function (child: any) {
				if (child.type === 'Mesh') {
					if (child.material.name === 'jFPFAvCbiqflbQV') { // тело
						// child.material.color = { r: 0.123, g: 0.32, b: 0.43 }
					}
				}
				child.castShadow = true;
				child.receiveShadow = true;

			});
			door30Bbox.setFromObject(object.scene);

		},
	},

})
</script>

<template>
	<section id="phone-model" class="phone-colors">
		<Renderer ref="renderer" resize="window" antialias alpha>
			<Camera ref="camera" :position="{x:-4,y: 9.2, z: 6.5}"></Camera>
			<Scene ref="scene">
				<AmbientLight :distance="0.5" :position="{y:-50, x: -40, z: 20 }" :scale="{x:4, y:4, z:4}" :intensity="4" />
				<GltfModel ref="sceneIphone" @load="onLoadModel" src="./models/iphone2/scene.gltf"
					:scale="{x: 70,y: 70,z: 70}" :rotation="{y:0, x:0,z:0}"></GltfModel>
			</Scene>
		</Renderer>
	</section>
</template>

<style lang="scss" scoped>
.phone-colors {
	position: absolute;
	transition: all 0.3s ease;
}
</style>