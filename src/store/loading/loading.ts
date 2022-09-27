import { defineStore } from "pinia";

export const useLoading = defineStore({
	id: 'loading',
	state: () => ({
		isLoading: false
	}),
	getters: {
		getIsLoading(state): boolean {
			return state.isLoading
		}
	},
	actions: {
		updateIsLoading(isLoading: boolean) {
			this.isLoading = isLoading;
		}
	}
})