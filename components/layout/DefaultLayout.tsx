"use client"
import React from "react";
import Footer from "../footer";
import NavBar from "../navbar";
import { ThemeProvider } from "../theme-provider";
import { usePathname } from "next/navigation";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange>
				<NavBar />
				{children}
				{["/login","/register","/forgotpassword","/checkemail","/newpassword"].indexOf(pathname) == -1 && <Footer />}
			</ThemeProvider>
		</>

	)
}