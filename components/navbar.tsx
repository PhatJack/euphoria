"use client"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Label } from './ui/label';
import { Button } from './ui/button';
import { DropDownList } from './header/dropdown-list';
import Link from 'next/link';
import * as React from 'react';
export default function NavBar() {
	const pathname = usePathname()
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)
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
	const navData = [
		{
			slug: "/",
			title: "Shop"
		},
		{
			slug: "/men",
			title: "Men"
		},
		{
			slug: "/women",
			title: "Women"
		},
		{
			slug: "/kid",
			title: "Kid"
		},
		{
			slug: "/shop",
			title: "Sports"
		},
		{
			slug: "/shop",
			title: "Beauty"
		},
	]
	//on scroll add class shadow-lg to header
	React.useEffect(() => {
		window.addEventListener("scroll", () => {
			const header = document.querySelector("header");
			console.log(window.scrollY)
			if (header) {
				if (window.scrollY > 0) {
					header.classList.add("shadow-md")
				} else {
					header.classList.remove("shadow-md")
				}
			}
		})
	}, [])
	return (
		<header className="sticky top-0 w-full h-[100px] border-b flex justify-center items-center bg-background z-50">
			<div className="w-full max-w-[1440px] flex items-center justify-between py-3 lg:px-10">
				<Link href={"/"}>
					<Image src={"/assets/logo.svg"} alt="Logo" width={100} height={50} />
				</Link>
				{
					pathname != "/login" && pathname != "/register" && (
						<nav className="hidden lg:flex gap-7">
							{
								navData.map((item, index) => (
									<Link className={`font-medium ${pathname == item.slug ? "text-black" : "text-light-gray"}`} href={item.slug} key={index}>
										{item.title}
									</Link>
								))
							}
						</nav>
					)
				}
				<Label className="flex items-center bg-secondary rounded-md px-3 h-11" htmlFor='search'>
					<MagnifyingGlassIcon className='size-6' />
					<Input placeholder='Search' id='search' className='border-none shadow-none focus-visible:ring-0 h-11' />
				</Label>
				<div className={`flex items-center ${pathname == "/login" || pathname == "/register" ? "gap-5" : "gap-2"}`}>
					{
						isLoggedIn ? (
							<>
								{/* <DropDownList placeholder='Select a language' list={languages} getLabel={(item) => item.name} getValue={(item) => item.code} /> */}
								<div className="flex gap-3">
									<Button asChild className='h-11 w-24'>
										<Link href={"/login"} className='justify-center items-center'>
											Login
										</Link>
									</Button>
									<Button variant={"outline"} asChild className='text-primary w-24 h-11 px-5'>
										<Link href={"/register"} className='flex justify-center items-center'>
											Sign up
										</Link>
									</Button>
								</div>
							</>
						) : (
							<>
								<Button onClick={() => router.push("/wishlist")} variant={"secondary"} className={`${pathname == "/wishlist" && "bg-primary"} size-11 p-3 group hover:bg-primary`}>
									<svg className={`stroke-light-gray group-hover:stroke-white ${pathname == "/wishlist" && "stroke-white"}`} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
										<rect fill="none" height="256" width="256" />
										<path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
									</svg>
								</Button>
								<Button onClick={() => router.push("/profile")} variant={"secondary"} className={`${pathname == "/profile" && "bg-primary"} size-11 p-3 group hover:bg-primary`}>
									<svg className={`stroke-light-gray group-hover:stroke-white ${pathname == "/profile" && "stroke-white"}`} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
										<rect fill="none" height="256" width="256" />
										<circle cx="128" cy="96" fill="none" r="64" stroke-miterlimit="10" stroke-width="16" />
										<path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
									</svg>
								</Button>
								<Button onClick={() => router.push("/cart")} variant={"secondary"} className={`${pathname == "/cart" && "bg-primary"} size-11 p-3 group hover:bg-primary`}>
									<svg className={`stroke-light-gray group-hover:stroke-white ${pathname == "/cart" && "stroke-white"}`} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
										<rect fill="none" height="256" width="256" />
										<path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
										<circle cx="80" cy="204" fill="none" r="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
										<circle cx="184" cy="204" fill="none" r="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
										<path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
									</svg>
								</Button>
							</>
						)
					}

				</div>
			</div>
		</header>
	)
}