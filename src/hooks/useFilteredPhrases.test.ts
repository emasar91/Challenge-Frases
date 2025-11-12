import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useFilteredPhrases } from './useFilteredPhrases'
import { useStorePhrases } from '../context/useStorePhrases'
import { useDebounce } from './useDebounce'

// Mock de dependencias (ambos hooks)
vi.mock('../context/useStorePhrases', () => ({
	useStorePhrases: vi.fn(),
}))

vi.mock('./useDebounce', () => ({
	useDebounce: vi.fn(),
}))

describe('useFilteredPhrases', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('retorna todas las frases si no hay búsqueda', () => {
		const phrases = [
			{ id: 1, phrase: 'hola mundo', date: '2025-11-10' },
			{ id: 2, phrase: 'buenos días', date: '2025-11-11' },
		]

		vi.mocked(useStorePhrases).mockReturnValue({
			phrases,
			searchValue: '',
		})

		vi.mocked(useDebounce).mockReturnValue('')

		const { result } = renderHook(() => useFilteredPhrases())

		expect(result.current).toEqual(phrases)
	})

	it('retorna frases filtradas según el valor debounced', () => {
		const phrases = [
			{ id: 1, phrase: 'hola mundo', date: '2025-11-10' },
			{ id: 2, phrase: 'adiós mundo', date: '2025-11-11' },
		]

		vi.mocked(useStorePhrases).mockReturnValue({
			phrases,
			searchValue: 'hola',
		})

		vi.mocked(useDebounce).mockReturnValue('hola')

		const { result } = renderHook(() => useFilteredPhrases())

		expect(result.current).toEqual([
			{ id: 1, phrase: 'hola mundo', date: '2025-11-10' },
		])
	})

	it('no diferencia mayúsculas y minúsculas', () => {
		const phrases = [
			{ id: 1, phrase: 'Hola Mundo', date: '2025-11-10' },
			{ id: 2, phrase: 'Otro texto', date: '2025-11-11' },
		]

		vi.mocked(useStorePhrases).mockReturnValue({
			phrases,
			searchValue: 'mundo',
		})

		vi.mocked(useDebounce).mockReturnValue('mundo')

		const { result } = renderHook(() => useFilteredPhrases())

		expect(result.current).toEqual([
			{ id: 1, phrase: 'Hola Mundo', date: '2025-11-10' },
		])
	})
})
