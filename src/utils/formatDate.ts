export function formatDate(isoDate: string): string {
	const date = new Date(isoDate)

	const options: Intl.DateTimeFormatOptions = {
		timeZone: 'America/Argentina/Buenos_Aires',
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	}

	const formatter = new Intl.DateTimeFormat('es-AR', options)
	return formatter.format(date)
}
