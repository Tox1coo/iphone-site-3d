import { defineStore } from "pinia";
import { Color } from "../../utils/interfaceAndTypes/interfaces";
export const colorsData = defineStore({
	id: 'colors',
	state: () => ({
		activeColors: <Color>{
			color: 0x201B2B,
			name: "deep Purple",
			rgbaColorText: '93, 75, 115'
		}
	}),
	getters: {
		getActiveColor(state): Color {
			return state.activeColors
		}
	},
	actions: {
		updateActiveColor(activeColor: Color) {

			this.activeColors = {
				color: activeColor.color,
				name: activeColor.name,
				rgbaColorText: activeColor.rgbaColorText
			}

		}
	}
})