import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

interface SheetData {
	navData: {
		slug: string;
		title: string;
	}[],
	pathname: string
}

export default function SheetDemo({ navData, pathname }: SheetData) {


	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="md:hidden size-10 p-1">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"}>
				<SheetHeader>
					<Image src={"/assets/logo.svg"} alt="Logo" width={150} height={50} />
				</SheetHeader>
				<nav className="flex flex-col gap-5 mt-4">
					{
						navData.map((item, index) => (
							<SheetClose asChild>
								<Link className={`font-medium ${pathname == item.slug ? "text-black" : "text-light-gray"}`} href={item.slug} key={index}>
									{item.title}
								</Link>
							</SheetClose>
						))
					}
				</nav>
				<SheetFooter className="mt-3">
					<div className="w-full flex gap-3">
						<Button asChild className='h-10 w-full'>
							<Link href={"/login"} className='w-full flex justify-center items-center'>
								Login
							</Link>
						</Button>
						<Button variant={"outline"} asChild className='text-primary w-full h-10 px-5'>
							<Link href={"/register"} className='w-full flex justify-center items-center'>
								Sign up
							</Link>
						</Button>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
