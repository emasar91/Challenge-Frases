import { useState } from 'react'
import styles from './PhraseForm.module.css'
import { Plus } from '../../assets/icons/Plus'
import { useStorePhrases } from '../../context/useStorePhrases'

function PhraseForm() {
	const [inputValue, setInputValue] = useState('')
	const { phrases, setPhrases, setSearchValue, searchValue } = useStorePhrases()

	const handleAddPhrase = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!inputValue.trim()) return
		setPhrases([
			...phrases,
			{
				phrase: inputValue,
				date: new Date().toISOString(),
				id: Date.now(),
			},
		])
		setInputValue('')
	}

	const handleChangeInput = (value: string) => {
		if (searchValue !== '') setSearchValue('')
		setInputValue(value)
	}

	const maxLength = 40

	const phraseLength = maxLength - inputValue.length

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleAddPhrase} className={styles.form} role="form">
				<label className={styles.label}>Agregar Nueva Frase</label>
				<div className={styles.inputGroup}>
					<div className={styles.inputContainer}>
						<input
							type="text"
							value={inputValue}
							onChange={(e) => handleChangeInput(e.target.value)}
							placeholder="Escribe una frase..."
							className={styles.input}
							maxLength={maxLength}
						/>
						<span className={styles.characters}>
							{`Caracteres maximos: ${maxLength} - Restan: ${phraseLength}`}
						</span>
					</div>
					<button type="submit" className={styles.button}>
						<Plus />
						<span className={styles.text}>Agregar</span>
					</button>
				</div>
			</form>
		</div>
	)
}

export default PhraseForm
