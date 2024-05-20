import HomeCarousel from "@/components/carousel";
import CardItem from "@/components/home/card";
import TitleText from "@/components/titleText";
import { CardItemData } from '@/constant/data'
export default function Home() {
	return (
		<>
			<main className="flex flex-col w-full min-h-screen items-center gap-2">
				<HomeCarousel />
				<div className="w-full max-w-[1440px] flex flex-col px-10">
					<div className="flex gap-5 py-16">
						{CardItemData.map((item, i) => (
							<CardItem key={i} item={item} />
						))}
					</div>
					<div className="flex flex-col">
						<TitleText text="New Arrival"/>
					</div>
				</div>
			</main>
		</>
	);
}
