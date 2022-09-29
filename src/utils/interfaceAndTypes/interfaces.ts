
export type Color = {
	color: string,
	name: string,
	rgbColor: Array<number>,
	rgbaColorText: string
}

export interface dataColors {
	[key: string]: Color
}
