import Men from '../components/men'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Men Clothes",
	description: "Get yourself some clothes my boy",
}
export default function Page() {
	return <Men />
}
