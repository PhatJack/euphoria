import Register from "../components/register"
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Register",
	description: "Register to get more experience about our shop",
}
export default function Page() {
	return <Register />
}
