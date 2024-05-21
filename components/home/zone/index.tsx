import TitleText from "@/components/titleText";
import { Button } from "@/components/ui/button";
import { CardItemData } from "@/constant/data";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GridSavingZone() {
	return (
		<div className="flex flex-col mb-20">
			<TitleText text="Big Saving Zone" />
			<div className="w-full grid gap-5 py-20">
				<div className="w-full flex gap-5">
					{
						CardItemData.slice(3, 6).map((item, i) => (
							<div
								key={i}
								style={{
									backgroundImage: `url('${item.image}')`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'left',
									backgroundSize: 'cover'
								}}
								className={`w-full h-80 rounded-xl overflow-hidden text-white flex flex-col odd:items-end odd:text-right even:text-left even:items-start gap-2 px-8 py-10`}>
								<p className="text-3xl font-bold max-w-32 text-pretty leading-tight">{item.title}</p>
								<span className="font-medium">{item.description}</span>
								<span className="font-bold uppercase">{item.discount}</span>
								<div className="w-32 flex flex-col justify-center items-center gap-4">
									<ArrowDownIcon className="size-10" />
									<Button variant={"outline"} className="w-full bg-transparent">Shop now</Button>
								</div>
							</div>
						))
					}
				</div>
				<div className="w-full flex gap-5">
					{
						CardItemData.slice(6, 8).map((item, i) => (
							<div
								key={i}
								style={{
									backgroundImage: `url('${item.image}')`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'left',
									backgroundSize: 'cover'
								}}
								className={`w-full h-80 rounded-xl overflow-hidden text-arsenic flex flex-col gap-2 px-8 py-10`}>
								<p className="text-3xl font-bold max-w-32 text-pretty leading-tight">{item.title}</p>
								<span className="font-medium">{item.description}</span>
								<span className="font-bold uppercase">{item.discount}</span>
								<div className="w-32 flex flex-col justify-center items-center gap-4">
									<ArrowDownIcon className="size-10" />
									<Button variant={"outline"} className="w-full border-arsenic bg-transparent">Shop now</Button>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<div className="flex h-[40em] rounded-xl overflow-hidden">
				<div className="w-full bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
					<div className="w-full h-full bg-black/40 flex flex-col gap-8 pl-20 pr-40 py-48 text-white">
						<p className="uppercase text-3xl font-bold">we make your everyday fashion better</p>
						<p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
						<Button asChild variant={"secondary"} className="w-36">
							<Link href={"/shop"}>
								Shop now
							</Link>
						</Button>
					</div>
				</div>
				<div className="w-full bg-[url('https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat bg-cover">
				</div>
			</div>
		</div>
	)
}