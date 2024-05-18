import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className="flex w-full min-h-screen items-center justify-center gap-2 p-24">
				<div className="w-full max-w-[1440px] flex flex-col">
					<ModeToggle></ModeToggle>
					<Button asChild>
						<Link href={"/login"}>
							Click to driect to login page
						</Link>
					</Button>
				</div>
			</main>
			<Footer />
		</>
	);
}
