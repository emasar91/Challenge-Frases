/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	test: {
		environment: 'jsdom',
		setupFiles: './setupTests.ts',
		globals: true,
		css: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			exclude: ['node_modules/', 'dist/', 'setupTests.ts'],
		},
	},
})
