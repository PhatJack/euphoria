import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ClothesType } from '@/constant/data'
import Image from "next/image";
export default function ArrivalCarousel() {
	return (
		<Carousel opts={{
			loop: true
		}}
			className="py-20 px-10"
		>
			<CarouselContent>
				{
					ClothesType.map((item, i) => (
						<CarouselItem key={i} className="basis-1/5">
							<div className="flex w-full flex-col gap-4">
								<div className="size-60 max-w-full relative overflow-hidden rounded-xl ">
									<Image
										src={item.image}
										sizes="100%"
										alt="Image" fill={true} className="aspect-square object-cover object-top hover:scale-110 transition-all"
										blurDataURL={item.image}
										placeholder="blur" />
								</div>
								<span className="font-bold">{item.title}</span>
							</div>
						</CarouselItem>
					))
				}
			</CarouselContent>
			<CarouselPrevious className="left-0 border-none shadow-none"/>
			<CarouselNext className="right-0 border-none shadow-none"/>
		</Carousel>
	)
}