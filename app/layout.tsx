import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import DefaultLayout from "@/components/layout/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Euphoria",
	description: "Best place to find your clothes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<DefaultLayout>
					{children}
				</DefaultLayout>
				<Toaster />
			</body>
		</html>
	);
}
