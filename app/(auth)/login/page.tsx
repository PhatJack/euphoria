import Login from "../components/login"
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Login",
	description: "Login to your account",
}
export default function Page() {
	return <Login />
}
