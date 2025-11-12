import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Header from './Header'

vi.mock('./Header.module.css', () => ({
	default: {
		header: 'header',
		container: 'container',
		titleContainer: 'titleContainer',
		title: 'title',
		subtitle: 'subtitle',
		button: 'button',
	},
}))

// 🧠 Variable de tema
let currentTheme = 'dark'
const toggleThemeMock = vi.fn(() => {
	currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
})

// Mock reactivo del store
vi.mock('../../context/useTheme', () => ({
	useThemeStore: () => ({
		theme: currentTheme,
		toggleTheme: toggleThemeMock,
	}),
}))

describe('Header', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		currentTheme = 'dark'
		document.documentElement.removeAttribute('data-theme')
	})

	it('renderiza correctamente el título y el subtítulo', () => {
		render(<Header />)
		expect(screen.getByText(/Gestor de Frases/i)).toBeInTheDocument()
		expect(
			screen.getByText(/Crea, busca y organiza tus frases favoritas/i)
		).toBeInTheDocument()
	})

	it('muestra el texto correcto según el tema actual', () => {
		render(<Header />)
		expect(screen.getByRole('button')).toHaveTextContent(/Cambiar a claro/i)
	})

	it('cambia el tema al hacer clic en el botón', () => {
		render(<Header />)
		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(toggleThemeMock).toHaveBeenCalledTimes(1)
	})

	it('actualiza el atributo data-theme en el documento', () => {
		const { rerender } = render(<Header />)

		// Tema inicial
		expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

		// Cambia el tema global y fuerza rerender
		currentTheme = 'light'
		rerender(<Header />)

		// Ahora debería reflejar el cambio
		expect(document.documentElement.getAttribute('data-theme')).toBe('light')
	})
})
