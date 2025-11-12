import type { IPhrases } from '../../types/store'
import Card from '../Card/Card'
import EmptyState from '../EmptyState/EmptyState'
import styles from './PhraseGrid.module.css'

function PhraseGrid({
	phrases,
	filteredPhrases,
	handleDeletePhrase,
}: {
	phrases: IPhrases[]
	filteredPhrases: IPhrases[]
	handleDeletePhrase: (id: number) => void
}) {
	if (filteredPhrases.length === 0) {
		const message =
			phrases.length === 0
				? 'No hay frases aún. ¡Comienza agregando una!'
				: 'No se encontraron frases que coincidan con tu búsqueda.'

		return <EmptyState message={message} />
	}

	console.log(phrases)

	return (
		<section className={styles.grid}>
			{filteredPhrases.map((phrase: IPhrases) => (
				<Card
					key={phrase.id}
					phrase={phrase}
					onDelete={() => handleDeletePhrase(phrase.id)}
				/>
			))}
		</section>
	)
}

export default PhraseGrid
