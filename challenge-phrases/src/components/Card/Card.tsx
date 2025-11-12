import styles from './Card.module.css'
import type { IPhrases } from '../../types/store'
import { Trash } from '../../assets/icons/Trash'
import { formatDate } from '../../utils/formatDate'
import { useEffect, useState } from 'react'

function Card({
	phrase,
	onDelete,
}: {
	phrase: IPhrases
	onDelete: () => void
}) {
	const [isExiting, setIsExiting] = useState(false)

	const handleDelete = () => {
		setIsExiting(true)
		setTimeout(() => onDelete(), 300) // espera animación antes de borrar
	}

	useEffect(() => {
		// clase de entrada al montar
		setIsExiting(false)
	}, [])

	return (
		<article
			className={`${styles.card} ${isExiting ? styles.exit : styles.enter}`}
		>
			<p className={styles.text}>{phrase.phrase}</p>
			<footer className={styles.footer}>
				<span className={styles.date}>{formatDate(phrase.date)}</span>
				<button
					onClick={handleDelete}
					className={styles.deleteButton}
					aria-label="Eliminar frase"
				>
					<Trash />
				</button>
			</footer>
		</article>
	)
}

export default Card
