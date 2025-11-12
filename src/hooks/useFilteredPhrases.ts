import { useMemo } from 'react'
import { useStorePhrases } from '../context/useStorePhrases'
import { useDebounce } from './useDebounce'

export const useFilteredPhrases = () => {
	const { phrases, searchValue } = useStorePhrases()
	const debouncedValue = useDebounce(searchValue, 500)

	const filteredPhrases = useMemo(() => {
		if (!debouncedValue.trim()) return phrases
		return phrases.filter(({ phrase }) =>
			phrase.toLowerCase().includes(debouncedValue.toLowerCase())
		)
	}, [phrases, debouncedValue])

	return filteredPhrases
}
