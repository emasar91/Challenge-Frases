import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import PhraseGrid from './PhraseGrid'
import Card from '../Card/Card'

// Mock de dependencias
vi.mock('../Card/Card', () => ({
	default: vi.fn(() => <div data-testid="mock-card">Card</div>),
}))

vi.mock('../EmptyState/EmptyState', () => ({
	default: vi.fn(({ message }) => (
		<div data-testid="empty-state">{message}</div>
	)),
}))

describe('PhraseGrid', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('muestra mensaje "sin frases" cuando phrases está vacío', () => {
		render(
			<PhraseGrid
				phrases={[]}
				filteredPhrases={[]}
				handleDeletePhrase={vi.fn()}
			/>
		)

		expect(screen.getByTestId('empty-state')).toHaveTextContent(
			'No hay frases aún. ¡Comienza agregando una!'
		)
		expect(Card).not.toHaveBeenCalled()
	})

	it('muestra mensaje "sin coincidencias" cuando hay frases pero el filtro está vacío', () => {
		const phrases = [{ id: 1, phrase: 'hola', date: '2025-11-10' }]
		render(
			<PhraseGrid
				phrases={phrases}
				filteredPhrases={[]}
				handleDeletePhrase={vi.fn()}
			/>
		)

		expect(screen.getByTestId('empty-state')).toHaveTextContent(
			'No se encontraron frases que coincidan con tu búsqueda.'
		)
		expect(Card).not.toHaveBeenCalled()
	})

	it('renderiza una Card por cada frase filtrada', () => {
		const phrases = [
			{ id: 1, phrase: 'hola', date: '2025-11-10' },
			{ id: 2, phrase: 'mundo', date: '2025-11-11' },
		]
		const handleDeletePhrase = vi.fn()

		render(
			<PhraseGrid
				phrases={phrases}
				filteredPhrases={phrases}
				handleDeletePhrase={handleDeletePhrase}
			/>
		)

		const cards = screen.getAllByTestId('mock-card')
		expect(cards).toHaveLength(2)
		expect(Card).toHaveBeenCalledTimes(2)

		// verifica que se llamen con la prop onDelete correcta
		const [[firstCall], [secondCall]] = vi.mocked(Card).mock.calls
		expect(typeof firstCall.onDelete).toBe('function')
		expect(typeof secondCall.onDelete).toBe('function')
	})
})
