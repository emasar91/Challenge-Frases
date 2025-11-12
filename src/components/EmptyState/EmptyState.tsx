import styles from './EmptyState.module.css'

function EmptyState({ message }: { message: string }) {
	return (
		<div className={styles.empty}>
			<p className={styles.text}>{message}</p>
		</div>
	)
}

export default EmptyState
