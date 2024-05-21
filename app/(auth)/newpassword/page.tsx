import { Metadata } from "next";
import NewPassword from "../components/newpassword";
export const metadata: Metadata = {
	title: "New Password",
	description: "New Password Page",
}
export default function Page() {
	return <NewPassword />
}