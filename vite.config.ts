/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	build: {
		outDir: 'dist',
	},
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
