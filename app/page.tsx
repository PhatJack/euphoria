import HomeCarousel from "@/components/carousel";
import Brand from "@/components/home/brand";
import CardItem from "@/components/home/card";
import Categories from "@/components/home/categories";
import ArrivalCarousel from "@/components/home/newArrival";
import TimeLight from "@/components/home/timelight";
import GridSavingZone from "@/components/home/zone";
import TitleText from "@/components/titleText";
import { CardItemData } from '@/constant/data'
export default function Home() {
	return (
		<>
			<main className="flex flex-col w-full min-h-screen items-center gap-2">
				<HomeCarousel />
				<div className="w-full max-w-[1440px] flex flex-col px-10">
					<div className="flex gap-5 py-16">
						{CardItemData.slice(0, 3).map((item, i) => (
							<CardItem key={i} item={item} />
						))}
					</div>
					<div className="flex flex-col">
						<TitleText text="New Arrival" />
						<ArrivalCarousel />
					</div>
					<GridSavingZone />
					<Categories />
					<Brand />
					<TimeLight />
				</div>
			</main>
		</>
	);
}
