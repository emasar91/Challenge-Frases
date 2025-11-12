import PhraseForm from '../components/PhraseForm/PhraseForm'
import SearchBar from '../components/SearchBar/SearchBar'
import PhraseGrid from '../components/PhraseGrid/PhraseGrid'
import Header from '../components/Header/Header'
import { useStorePhrases } from '../context/useStorePhrases'
import { useFilteredPhrases } from '../hooks/useFilteredPhrases'
import styles from './Home.module.css'
export const Home = () => {
	const { phrases, setPhrases } = useStorePhrases()

	const handleDeletePhrase = (id: number) => {
		setPhrases(phrases.filter((phrase) => phrase.id !== id))
	}
	const filteredPhrases = useFilteredPhrases()

	return (
		<main className={styles.container}>
			<Header />
			<div className={styles.content}>
				<article>
					<PhraseForm />
				</article>

				<aside>
					<SearchBar />
				</aside>

				<section>
					<PhraseGrid
						phrases={phrases}
						filteredPhrases={filteredPhrases}
						handleDeletePhrase={handleDeletePhrase}
					/>
				</section>
			</div>
		</main>
	)
}
