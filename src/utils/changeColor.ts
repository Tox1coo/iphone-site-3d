
import { colorsData } from "../store/colors/colors"
import { Color } from "./interfaceAndTypes/interfaces";
export function changeColor(activeColor: Color, nameFunc: string) {

	const activeColorChange = colorsData();
	const activeFunc: string = nameFunc;
	activeColorChange[activeFunc](activeColor)

}