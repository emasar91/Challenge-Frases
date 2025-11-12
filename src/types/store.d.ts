export interface IStorePhrases {
	phrases: IPhrases[]
	setPhrases: (value: IPhrases[]) => void
	searchValue: string
	setSearchValue: (value: string) => void
}

interface IPhrases {
	phrase: string
	date: string
	id: number
}
