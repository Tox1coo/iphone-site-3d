
import { colorsData } from "../store/colors/colors"
import { Color } from "./interfaceAndTypes/interfaces";
export function changeColor(activeColor: Color) {

	const activeColorChange = colorsData();

	activeColorChange.updateActiveColor(activeColor)

}