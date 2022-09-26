<script lang="ts">
import * as THREE from 'three';

import { useLoading } from "../../store/loading/loading"

import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		const loading = useLoading();

		return { loading }
	},
	methods: {
		onLoadModel(object: any) {
			const door30Bbox = new THREE.Box3();
			door30Bbox.setFromObject(object.scene);
			object.scene.traverse(function (child: any) {
				if (child.type === 'Mesh') {
					console.log(child.material);


					if (child.material.name === 'jFPFAvCbiqflbQV') { // тело
						child.material.color = { r: 0.123, g: 0.32, b: 0.43 }
					}
				}
				child.castShadow = true;
				child.receiveShadow = true;

			});
			door30Bbox.setFromObject(object.scene);
			console.log(door30Bbox);

			/* 	window.addEventListener('wheel', (e: Event) => {

					if (object) {
						if (e.wheelDelta > 0) {
							object.scene.rotation.y += 0.23;

						} else {
							object.scene.rotation.y += 0.23;

						}
					}
				}) */
			/* 			setTimeout(() => {
							this.loading.updateIsLoading(true)
						}, 2000); */
		},
		onError(e: ErrorEvent) {
			console.log(e);
		}
	}
})
</script>

<template>
	<section class="phone-model">
		<Renderer resize="window" antialias>
			<Camera :position="{ y:5, z: 20 }"></Camera>
			<Scene background="#fff">
				<AmbientLight :distance="1" :position="{y:-50, x: -40, z: 20 }" :scale="{x:4, y:4, z:4}" :intensity="4" />
				<GltfModel @error="onError" @load="onLoadModel" src="./models/iphone2/scene.gltf"
					:scale="{x: 50,y: 50,z: 50 }" :rotation="{y:0, x:0,z:0}"></GltfModel>
			</Scene>
		</Renderer>
	</section>
</template>

<style lang="scss" scoped>

</style>