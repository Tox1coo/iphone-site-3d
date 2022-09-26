/* import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
	isLoading: Boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		isLoading: false
	},
	mutations: {
		updateIsLoading(state: State, isLoading: Boolean) {
			console.log(2);

			state.isLoading = isLoading
		}
	}
}) */
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