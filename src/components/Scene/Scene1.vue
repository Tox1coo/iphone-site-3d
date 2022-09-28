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
		onMounted(() => {
			gsap.registerPlugin(ScrollTrigger);
			let fov: number = camera.value.fov;

			fov = (1400 * 80) / window.innerWidth;

			camera.value.camera.fov = fov;

			camera.value.camera.updateProjectionMatrix();
			const interval = setInterval(() => {

				if (loading.getIsLoading) {
					animate();
					clearInterval(interval);
				}
			}, 200)
			window.addEventListener('resize', animate)
		})
		onBeforeUnmount(() => {
			window.removeEventListener('resize', animate)

		})
		function animate() {
			let mm = gsap.matchMedia();
			mm.add({
				isDesktop: `(min-width: 48em)`,
				isMobile: `(max-width:48em`,
			}, (context) => {

				let { isDesktop, isMobile } = context.conditions;
				let t1 = gsap.timeline({
					scrollTrigger: {
						trigger: "#phone-model",
						start: "top+=500 top",
						endTrigger: "#battery",
						end: 'top top',
						scrub: 1,
						markers: true,
					},
				});
				console.log(scene.value);

				t1.fromTo(camera.value.camera.position, { y: 30 }, { y: 1.8 })
					.to(scene.value.scene.rotation, { y: 0.8 })
					.to(scene.value.scene.rotation, { y: 3.15 })
					.to(scene.value.scene.position, { y: -2 })
					.to(scene.value.scene.rotation, { z: 0.8 }, "key1")
					.to(camera.value.camera.position, { z: 18, y: 2, x: 2 }, "key1")
					.to(scene.value.scene.rotation, { y: 0, z: 0 }, "key2")
					.to(camera.value.camera.position, { x: isDesktop ? -15 : 0 }, "key2")
					.to(camera.value.camera.position, { z: 22 }, "key2")
					.to(scene.value.scene.rotation, { z: 0, y: 6.3 }, "key3")
					.to(camera.value.camera.position, { z: 19 }, "key3")
					.to(camera.value.camera.position, { x: isDesktop ? 15 : 0, y: 5 }, "key3");

				if (isMobile) {
					camera.value.camera.fov = 70;
					camera.value.camera.updateProjectionMatrix();
				}

				return () => {
					if (t1) t1.kill();
				}
			});
		}
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

			setTimeout(() => {
				this.loading.updateIsLoading(true)
			}, 2000);


		},

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