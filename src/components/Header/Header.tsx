import { useEffect } from 'react'
import styles from './Header.module.css'
import { useThemeStore } from '../../context/useTheme'

function Header() {
	const { theme, toggleTheme } = useThemeStore()

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>Gestor de Frases</h1>
					<p className={styles.subtitle}>Crea, busca tus frases</p>
				</div>
				<button className={styles.button} onClick={toggleTheme}>
					Cambiar a {theme === 'dark' ? 'claro' : 'oscuro'}
				</button>
			</div>
		</header>
	)
}

export default Header
