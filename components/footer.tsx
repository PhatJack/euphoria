import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import Image from 'next/image'
export default function Footer() {

	const displayContent = [
		{
			title: "Need Help",
			lists: [
				"Contact Us",
				"Track Order",
				"Returns & Refunds",
				"FAQ's",
				"Career"
			]
		},
		{
			title: "Company",
			lists: [
				"About Us",
				"euphoria Blog",
				"euphoriastan",
				"Collaboration",
				"Media"
			]
		},
		{
			title: "More Info",
			lists: [
				"Term and Conditions",
				"Privacy Policy",
				"Shipping Policy",
				"Sitemap",
				""
			]
		},
		{
			title: "Location",
			lists: [
				"support@jackphat.in",
				"Hello world from Phat Nguyen aka Jack Phat",
				"Ho Chi Minh City, Vietnam",
				"",
				""
			]
		}
	]

	return (
		<footer className="w-full max-h-[730px] bg-arsenic text-white flex flex-col justify-center items-center">
			<div className="w-full max-w-[1440px] h-full flex flex-col justify-center items-center gap-4 p-10">
				<div className="w-full flex justify-between">
					{
						displayContent.map((content, index) => (
							<article key={index} className="w-fit flex flex-col">
								<h2 className="text-xl font-bold mb-5">{content.title}</h2>
								<ul className="flex flex-col gap-3">
									{
										content.lists.map((list, index) => (
											<li key={index} className="text-base">{list}</li>
										))
									}
								</ul>
							</article>
						))
					}
				</div>
				<div className="w-full flex flex-col gap-4">
					<p className="text-2xl font-bold text-right">Download The App</p>
					<div className="flex justify-between items-center">
						<div className="w-1/2 flex justify-start items-center gap-2">
							<Button className='bg-white size-10 p-0 group'>
								<InstagramLogoIcon className="size-5 text-black group-hover:text-white" />
							</Button>
							<Button className='bg-white size-10 p-0 group'>
								<LinkedInLogoIcon className="size-5 text-black group-hover:text-white" />
							</Button>
							<Button className='bg-white size-10 p-0 group'>
								<TwitterLogoIcon className="size-5 text-black group-hover:text-white" />
							</Button>
							<Button className='bg-white size-10 p-0 group'>
								<GitHubLogoIcon className="size-5 text-black group-hover:text-white" />
							</Button>
						</div>
						<div className="w-1/2 flex justify-end items-center gap-5">
							<Image src="/assets/app-store.svg" width={140} height={50} alt="App Store" />
							<Image src="/assets/google-play.svg" width={140} height={50} alt="Google Play" />
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>
			<div className="font-medium border-t w-full text-center py-6">
				Copyright © 2024 Euphoria Jack Phat. All rights reserved.
			</div>
		</footer>
	)
}