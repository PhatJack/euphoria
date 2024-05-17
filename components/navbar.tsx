"use client"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Label } from './ui/label';
import { Button } from './ui/button';
import { DropDownList } from './header/dropdown-list';
import Link from 'next/link';

export default function NavBar() {
	const pathname = usePathname()
	const languages = [
		{ code: "en-US", name: "English (United States)" },
		{ code: "en-GB", name: "English (United Kingdom)" },
		{ code: "es", name: "Spanish" },
		{ code: "fr", name: "French" },
		{ code: "de", name: "German" },
		{ code: "zh", name: "Chinese" },
		{ code: "ja", name: "Japanese" },
		{ code: "ko", name: "Korean" },
		{ code: "it", name: "Italian" },
		{ code: "pt", name: "Portuguese" },
		{ code: "ru", name: "Russian" },
		{ code: "ar", name: "Arabic" },
		{ code: "hi", name: "Hindi" },
		{ code: "bn", name: "Bengali" },
		{ code: "pa", name: "Punjabi" },
		{ code: "jv", name: "Javanese" },
		{ code: "ms", name: "Malay" },
		{ code: "sw", name: "Swahili" },
		{ code: "ta", name: "Tamil" },
		{ code: "te", name: "Telugu" },
		{ code: "vi", name: "Vietnamese" },
		{ code: "mr", name: "Marathi" },
		{ code: "ur", name: "Urdu" },
		{ code: "fa", name: "Persian" },
		{ code: "tr", name: "Turkish" },
		{ code: "pl", name: "Polish" },
		{ code: "uk", name: "Ukrainian" },
		{ code: "ro", name: "Romanian" },
		{ code: "nl", name: "Dutch" },
		{ code: "el", name: "Greek" },
		{ code: "he", name: "Hebrew" },
	];
	return (
		<header className="sticky top-0 w-full h-[100px] border-b flex justify-center items-center bg-white z-10">
			<div className="w-full max-w-[1440px] flex items-center justify-between py-3 lg:px-10">
				<Image src={"/assets/logo.svg"} alt="Logo" width={100} height={50} />
				<Label className="flex items-center bg-secondary rounded-md px-3 h-11" htmlFor='search'>
					<MagnifyingGlassIcon className='size-6' />
					<Input placeholder='Search' id='search' className='border-none shadow-none focus-visible:ring-0 h-11' />
				</Label>
				<div className="flex items-center gap-5">
					<DropDownList placeholder='Select a language' list={languages} getLabel={(item) => item.name} getValue={(item) => item.code} />
					<div className="flex gap-3">
						<Button className='h-11 w-24 px-5'>
							<Link href={"/login"}>
								Login
							</Link>
						</Button>
						<Button variant={"outline"} className='text-primary w-24 h-11 px-5'>
							<Link href={"/register"}>
								Sign up
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}