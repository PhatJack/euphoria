import { Metadata } from "next";
import CheckEmail from "../components/checkemail";
export const metadata: Metadata = {
	title: "Check your email",
	description: "Check your email to verify your account",
}
export default function Page() {
	return <CheckEmail />
}