import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import { vi } from 'vitest'
import { useStorePhrases } from '../../context/useStorePhrases'

// Mock del store
vi.mock('../../context/useStorePhrases', () => ({
	useStorePhrases: vi.fn(),
}))

describe('<SearchBar />', () => {
	const setSearchValueMock = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('muestra el valor actual del searchValue', () => {
		vi.mocked(useStorePhrases).mockReturnValue({
			searchValue: 'hola mundo',
			setSearchValue: setSearchValueMock,
		})

		render(<SearchBar />)
		const input = screen.getByPlaceholderText('Busca en tus frases...')
		expect(input).toHaveValue('hola mundo')
	})

	it('llama a setSearchValue cuando el usuario escribe', () => {
		vi.mocked(useStorePhrases).mockReturnValue({
			searchValue: '',
			setSearchValue: setSearchValueMock,
		})

		render(<SearchBar />)

		const input = screen.getByPlaceholderText('Busca en tus frases...')
		fireEvent.change(input, { target: { value: 'frase nueva' } })

		expect(setSearchValueMock).toHaveBeenCalledWith('frase nueva')
		expect(setSearchValueMock).toHaveBeenCalledTimes(1)
	})
})
