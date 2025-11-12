import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Card from './Card'
import { formatDate } from '../../utils/formatDate'

// Mock del módulo CSS
vi.mock('./Card.module.css', () => ({
	default: {
		card: 'card',
		text: 'text',
		footer: 'footer',
		date: 'date',
		deleteButton: 'deleteButton',
		enter: 'enter',
		exit: 'exit',
	},
}))

// Mock del ícono Trash
vi.mock('../../assets/icons/Trash', () => ({
	Trash: () => <svg data-testid="trash-icon" />,
}))

describe('Card', () => {
	const mockPhrase = {
		id: 1,
		phrase: 'Frase de prueba',
		date: '2025-11-12T12:00:00Z',
	}

	const onDelete = vi.fn()

	beforeEach(() => {
		vi.useFakeTimers()
		vi.clearAllMocks()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it('renderiza correctamente la frase y la fecha', () => {
		render(<Card phrase={mockPhrase} onDelete={onDelete} />)

		expect(screen.getByText('Frase de prueba')).toBeInTheDocument()
		expect(screen.getByText(formatDate(mockPhrase.date))).toBeInTheDocument()
		expect(screen.getByTestId('trash-icon')).toBeInTheDocument()
	})

	it('ejecuta onDelete después de 300 ms cuando se hace click en el botón', () => {
		render(<Card phrase={mockPhrase} onDelete={onDelete} />)

		const deleteButton = screen.getByRole('button', { name: /eliminar frase/i })
		fireEvent.click(deleteButton)

		// Aún no debería haberse llamado
		expect(onDelete).not.toHaveBeenCalled()

		// Avanzamos el tiempo 300 ms
		act(() => {
			vi.advanceTimersByTime(300)
		})

		expect(onDelete).toHaveBeenCalledTimes(1)
	})

	it('agrega la clase exit cuando se elimina', () => {
		render(<Card phrase={mockPhrase} onDelete={onDelete} />)
		const article =
			screen.getByRole('article', { hidden: true }) ||
			screen.getByText('Frase de prueba').closest('article')!

		expect(article.className).toContain('enter')

		fireEvent.click(screen.getByRole('button', { name: /eliminar frase/i }))

		expect(article.className).toContain('exit')
	})
})
