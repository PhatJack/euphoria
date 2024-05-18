"use client"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function CheckEmail() {
	const router = useRouter()
	return (
		<Card className="max-w-xl border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-4xl">Check email</CardTitle>
				<CardDescription>
					Please check your email inbox and click on the provided link to reset your password.
					<br />
					If you don’t receive email, <Link href={"#"} className="text-primary font-medium">Click here to resend</Link>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-5 mt-5">
					<div className="grid gap-3">
						<Label htmlFor="code" className="">Verification Code</Label>
						<Input
							id="code"
							type="text"
							placeholder="******"
							required
							className="h-fit p-3"
						/>
					</div>
					<Button onClick={() => router.push("/newpassword")} type="button" className="w-fit px-10 py-5">
						Submit
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}