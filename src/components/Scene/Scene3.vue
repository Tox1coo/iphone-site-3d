<script lang="ts">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useLoading } from "../../store/loading/loading"
import { gsap } from "gsap"
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { colorsData } from "../../store/colors/colors"
import { Color } from "../../utils/interfaceAndTypes/interfaces";

export default defineComponent({
	setup() {
		const loading = useLoading();
		const sceneIphone = ref<HTMLElement>();
		const camera = ref<HTMLElement>();
		const scene = ref<HTMLElement>();
		const color = colorsData();
		const renderer = ref<HTMLElement>();
		let objectItem: unknown;
		let element: unknown;

		onMounted(() => {
			const interval = setInterval(() => {

				if (element === undefined || !element.offsetWidth) {
					element = document.querySelector('.pricing__colors');

					setTimeout(() => {
						if (element.offsetWidth !== 0) {
							renderer.value.renderer.setSize(element.offsetWidth, element.offsetHeight / 1.2, true)

							window.addEventListener('resize', renderer.value.renderer.setSize(element.offsetWidth, element.offsetHeight / 1.02, true))
							clearInterval(interval);
						}
					}, 200);

				}
			}, 200)

		})

		return { loading, sceneIphone, camera, scene, color, objectItem, renderer }
	},
	methods: {
		onLoadModel(object: unknown) {
			const door30Bbox = new THREE.Box3();
			door30Bbox.setFromObject(object.scene);
			object.scene.traverse(function (child: unknown) {
				if (child.type === 'Mesh') {
					if (child.material.name === 'jFPFAvCbiqflbQV' || child.material.name === 'LJBezuBxKRoHnAp') {
						child.material.color.set(0x201B2B)
					}
				}
				child.castShadow = true;
				child.receiveShadow = true;

			});
			door30Bbox.setFromObject(object.scene);
			this.objectItem = object;
		},
	},
	computed: {
		getActiveColorPricing(): Color {
			return this.color.getActiveColorPricing
		}
	},
	watch: {
		getActiveColorPricing(activeColor: Color) {
			console.log(activeColor);

			const door30Bbox = new THREE.Box3();
			door30Bbox.setFromObject(this.objectItem.scene);
			this.objectItem.scene.traverse(function (child: unknown) {
				if (child.type === 'Mesh') {

					if (child.material.name === 'jFPFAvCbiqflbQV' || child.material.name === 'LJBezuBxKRoHnAp') {
						child.material.color.set(activeColor.color)
					}
				}
				child.castShadow = true;
				child.receiveShadow = true;

			});
			door30Bbox.setFromObject(this.objectItem.scene);
		}
	}
})
</script>

<template>
	<div id="phone-model" class="phone-colors">
		<Renderer ref="renderer" alpha orbit-ctrl>
			<Camera ref="camera" :fov="45.2" :position="{y:0,z:3.5}"></Camera>
			<Scene ref="scene">
				<AmbientLight :distance="0.5" :position="{y:-50, x: -40, z: 20 }" :scale="{x:4, y:4, z:4}" :intensity="4" />
				<PointLight />
				<GltfModel ref="sceneIphone" @load="onLoadModel" src="./models/iphone2/scene.gltf"
					:scale="{x: 17,y: 15,z: 15}" :position="{y:-1.4}"></GltfModel>
			</Scene>
		</Renderer>
	</div>
</template>

<style lang="scss" scoped>
.phone-colors {
	position: absolute;
	z-index: $zTop;
}
</style>