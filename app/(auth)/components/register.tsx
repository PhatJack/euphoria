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
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'
import DialogPolicy from '@/components/signup/dialog-policy'

export default function Register() {
	const [isShowPassword, setIsShowPassword] = React.useState(false)
	const { toast } = useToast()
	return (

		<Card className="max-w-xl border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-4xl">Sign Up</CardTitle>
				<CardDescription>
					Sign up for free to access to in any of our products
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2 mb-2">
					<Button variant={"outline"} className="py-2 h-fit border-black text-primary flex gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
							<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
						</svg>
						Continue with Google
					</Button>
					<Button variant={"outline"} className="py-2 h-fit border-black text-primary flex gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
							<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
						</svg>
						Continue with X
					</Button>
				</div>
				<div className="grid gap-8 mt-8">
					<div className="grid gap-3">
						<Label htmlFor="email" className="">Email address</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							className="h-fit p-3"
						/>
					</div>
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
					<div className="flex flex-col gap-3">
						<div className="flex items-center space-x-2">
							<Checkbox id="terms" />
							<Label htmlFor="termss" className='font-normal'>Agree to our <DialogPolicy title='Terms of use' /> and <DialogPolicy title='Privacy Policy'/> </Label>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox id="subscribe" />
							<Label htmlFor="subscribe" className='font-normal'>Subscribe to our monthly newsletter</Label>
						</div>
					</div>
					<Button type="submit" className="w-fit px-10 py-5 mt-3">
						Sign up
					</Button>
				</div>
				<div className="mt-4 text-sm">
					Already have an account?{" "}
					<Link href={"/login"} className="underline">
						Log in
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
