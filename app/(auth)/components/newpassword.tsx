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
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
export default function NewPassword() {
	const router = useRouter()
	const [isShowPassword, setIsShowPassword] = React.useState(false)
	return (
		<Card className="max-w-xl border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-4xl">Create new password</CardTitle>
				<CardDescription>
					Your new password must be different from previous used passwords.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-5 mt-5">
					<div className="grid gap-3">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<p onClick={() => setIsShowPassword(!isShowPassword)} className="ml-auto inline-flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
								{
									isShowPassword ? <EyeOpenIcon className="h-[1.2rem] w-[1.2rem] flex justify-center items-center" /> : <EyeClosedIcon className="h-[1.2rem] w-[1.2rem]" />
								}
								{
									!isShowPassword ? "Hide" : "Show"
								}
							</p>
						</div>
						<Input id="password" type={!isShowPassword ? "text" : "password"} placeholder="Enter your password" className="h-fit p-3" />
						<CardDescription className="text-[12px]">
							Use 8 or more characters with a mix of letters, numbers & symbols
						</CardDescription>
					</div>
					<div className="grid gap-3">
						<div className="flex items-center">
							<Label htmlFor="confirmPassword">Confirm Password</Label>
						</div>
						<Input id="confirmPassword" type={"password"} placeholder="Enter your confirm password" className="h-fit p-3" />
					</div>
					<Button type="button" onClick={() => router.push("/")} className="w-fit px-10 py-5 mt-6">
						Reset Password
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}