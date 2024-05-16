"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface AuthLayoutProps {
	children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
	// const router = useRouter()
	const pathname = usePathname()
	return (
		<div className="w-svw h-svh flex">
			<div className="w-full h-full relative">
				{
					pathname.includes("login") ? (
						<Image src={"/assets/auth/login.png"} loading="lazy" alt="Auth Image" fill />
					) : (
						<Image src={"/assets/auth/signup.png"} loading="lazy" alt="Auth Image" fill />
					)
				}
			</div>
			<div className="w-full h-full">
				<div className="px-10 py-20">
					{children}
				</div>
			</div>
		</div>
	)
}