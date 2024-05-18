"use client"
import * as React from 'react'
import Link from "next/link"

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
import { useRouter } from 'next/navigation'
export default function ForgotPassword() {
	const router = useRouter()
	return (
		<Card className="max-w-xl border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-4xl">Reset your password</CardTitle>
				<CardDescription>
					Enter your email and we'll send you a link to reset your password.
					<br />
					Please check it
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-5 mt-5">
					<div className="grid gap-3">
						<Label htmlFor="email" className="">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							className="h-fit p-3"
						/>
					</div>
					<Button type="button" onClick={() => router.push("/checkemail")} className="w-fit px-10 py-5">
						Send
					</Button>
				</div>
				<p className='text-sm mt-2'>Back to <Link href={"/login"} className='underline'>Login</Link></p>
			</CardContent>
		</Card>
	)
}