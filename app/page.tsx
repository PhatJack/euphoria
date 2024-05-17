import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full max-w-[1440px] min-h-screen items-center justify-center gap-2 p-24">
			<ModeToggle></ModeToggle>
			<Button asChild>
				<Link href={"/login"}>
					Click to driect to login page
				</Link>
			</Button>
		</main>
	);
}
