import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import PhraseForm from './PhraseForm'

// Mock del store
vi.mock('../../context/useStorePhrases', () => {
	return {
		useStorePhrases: vi.fn(),
	}
})

import { useStorePhrases } from '../../context/useStorePhrases'

describe('PhraseForm', () => {
	const setPhrases = vi.fn()
	const setSearchValue = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()
		vi.mocked(useStorePhrases).mockReturnValue({
			phrases: [],
			setPhrases,
			setSearchValue,
			searchValue: '',
		})
	})

	it('agrega una frase válida y limpia el input', () => {
		render(<PhraseForm />)

		const input = screen.getByPlaceholderText(
			/Escribe una frase.../i
		) as HTMLInputElement
		fireEvent.change(input, { target: { value: 'Hola mundo' } })
		fireEvent.submit(input.closest('form') as HTMLFormElement)

		expect(setPhrases).toHaveBeenCalledWith(
			expect.arrayContaining([
				expect.objectContaining({
					phrase: 'Hola mundo',
				}),
			])
		)

		// El input debería limpiarse
		expect(input.value).toBe('')
	})

	it('no agrega frases vacías', () => {
		render(<PhraseForm />)
		const form = screen.getByRole('form')
		fireEvent.submit(form)
		expect(setPhrases).not.toHaveBeenCalled()
	})
})
