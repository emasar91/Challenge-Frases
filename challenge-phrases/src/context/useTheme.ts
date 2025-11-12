import { create } from 'zustand'

type ThemeState = {
	theme: 'light' | 'dark'
	toggleTheme: () => void
	setTheme: (theme: 'light' | 'dark') => void
}

export const useThemeStore = create<ThemeState>((set, get) => ({
	theme:
		(localStorage.getItem('theme') as 'light' | 'dark') ||
		(window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'),

	toggleTheme: () => {
		const nextMode = get().theme === 'light' ? 'dark' : 'light'
		set({ theme: nextMode })
		localStorage.setItem('theme', nextMode)
	},

	setTheme: (theme) => {
		set({ theme })
		localStorage.setItem('theme', theme)
	},
}))
