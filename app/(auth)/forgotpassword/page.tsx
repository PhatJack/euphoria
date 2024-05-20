import ForgotPassword from "../components/forgotpassword";
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Forgot Password",
	description: "Forgot your password? No worries! We got you covered.",
}
export default function Page() {
	return <ForgotPassword />
}