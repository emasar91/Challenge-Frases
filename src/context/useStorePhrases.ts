import { create } from 'zustand'
import type { IPhrases } from '../types/store'
import type { IStorePhrases } from '../types/store'

const LOCAL_STORAGE_KEY = 'phrases'

const loadFromLocalStorage = (): IPhrases[] => {
	try {
		const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
		return stored ? JSON.parse(stored) : []
	} catch {
		return []
	}
}

const initialState: IStorePhrases = {
	phrases: loadFromLocalStorage(),
	setPhrases: () => {},
	searchValue: '',
	setSearchValue: () => {},
}

export const useStorePhrases = create<IStorePhrases>((set) => ({
	...initialState,
	setPhrases: (value: IPhrases[]) => {
		set({ phrases: value })
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value))
	},
	setSearchValue: (value: string) =>
		set((state) => ({ ...state, searchValue: value })),
}))
