<script lang="ts">
import * as THREE from 'three';
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
		const color = colorsData()
		let objectItem: unknown;
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger);


			camera.value.camera.fov = 55;

			camera.value.camera.updateProjectionMatrix();
			const interval = setInterval(() => {

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		})

		function animate() {
			let mm = gsap.matchMedia();
			mm.add({
				isDesktop: `(min-width: 900px)`,
				isTablet: `(min-width: 510px) and (max-width: 900px)`,
				isMobile: `(max-width:51em)`,
			}, (context) => {

				let { isDesktop, isMobile, isTablet } = context.conditions;
				let t1 = gsap.timeline({
					scrollTrigger: {
						trigger: "#phone-model",
						start: "top+=500 top",
						endTrigger: "#battery",
						end: 'top top',
						scrub: 1,
					},
				});
				console.log(scene.value);

				t1.fromTo(camera.value.camera.position, { y: 30 }, { y: 2.5 })
					.to(scene.value.scene.rotation, { y: 0.8 })
					.to(scene.value.scene.rotation, { y: 3.15 })
					.to(scene.value.scene.position, { y: -2 })
					.to(scene.value.scene.rotation, { z: 0.8 }, "key1")
					.to(camera.value.camera.position, { z: 19, y: isTablet ? 5 : 4, x: isTablet ? 4 : 2 }, "key1")
					.to(scene.value.scene.rotation, { y: 0, z: 0 }, "key2")
					.to(scene.value.scene.position, { y: 2 }, "key2")
					.to(camera.value.camera.position, { z: 21, x: isDesktop ? -10.5 : isTablet ? -5 : 0 }, "key2")
					.to(scene.value.scene.rotation, { z: 0, y: 6.3 }, "key3")
					.to(camera.value.camera.position, { x: isDesktop ? 6 : isTablet ? 4 : 0, y: 8, z: 15 }, "key3");

				if (isMobile) {
					camera.value.camera.fov = 70;
					camera.value.camera.updateProjectionMatrix();
				}

				return () => {
					if (t1) t1.kill();
				}
			});
		}
		return { loading, sceneIphone, camera, scene, objectItem, color };
	},
	computed: {
		getActiveColor(): Color {
			return this.color.getActiveColor
		}
	},
	methods: {
		onLoadModel(object: unknown) {
			const door30Bbox = new THREE.Box3();
			door30Bbox.setFromObject(object.scene);
			object.scene.traverse(function (child: unknown) {
				if (child.type === 'Mesh') {
					if (child.material.name === 'jFPFAvCbiqflbQV') {
						child.material.color.set(0x201B2B)
					}
				}
				child.castShadow = true;
				child.receiveShadow = true;

			});
			this.objectItem = object;
			setTimeout(() => {
				this.loading.updateIsLoading(true)
			}, 2000);
		},
	},
	watch: {
		getActiveColor(activeColor: Color) {
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
	<section id="phone-model" class="phone-model">
		<Renderer ref="renderer" resize="window" antialias alpha>
			<Camera ref="camera" :position="{y: 2, z: 19}"></Camera>
			<Scene ref="scene">
				<AmbientLight :distance="0.5" :position="{y:-50, x: -40, z: 20 }" :scale="{x:4, y:4, z:4}" :intensity="4" />
				<GltfModel ref="sceneIphone" @load="onLoadModel" src="./models/iphone2/scene.gltf"
					:scale="{x: 70,y: 70,z: 70}" :rotation="{y:0, x:0,z:0}"></GltfModel>
			</Scene>
		</Renderer>
	</section>
</template>

<style lang="scss" >
.phone-model {
	position: fixed;
	top: 0px;
	z-index: $zMiddle + 1;
	transition: all 0.3s ease;
}
</style>