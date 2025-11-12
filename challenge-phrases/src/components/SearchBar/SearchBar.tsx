import { Search } from '../../assets/icons/Search'
import styles from './SearchBar.module.css'
import { useStorePhrases } from '../../context/useStorePhrases'

function SearchBar() {
	const { searchValue, setSearchValue } = useStorePhrases()

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.icon}>
					<Search />
				</div>

				<input
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Busca en tus frases..."
					className={styles.input}
				/>
			</div>
		</div>
	)
}

export default SearchBar
