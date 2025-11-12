import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number = 500): T {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		// Limpia el timeout si el valor cambia antes de que se cumpla el delay
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}
