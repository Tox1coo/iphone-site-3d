import { defineStore } from "pinia";
import { Color } from "../../utils/interfaceAndTypes/interfaces";
export const colorsData = defineStore({
	id: 'colors',
	state: () => ({
		activeColors: {
			color: "#5D4B73",
			name: "deep Purple",
			rgbColor: [93, 75, 115],
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
				rgbColor: activeColor.rgbColor,
				rgbaColorText: activeColor.rgbaColorText
			}

		}
	}
})