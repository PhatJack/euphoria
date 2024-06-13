import Women from '../components/women'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Women Clothes",
	description: "Get yourself some clothes my girl",
}
export default function Page() {
	return <Women />
}
