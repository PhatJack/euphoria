import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeCarousel() {
	return (
		<Carousel 
			opts={{
				loop: true,
			}}
			className="w-full max-h-[720px] relative">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className={`w-full h-full min-h-[720px] ${index == 1 ? "bg-red-300" : index == 2 ? "bg-green-300" : index == 3 ? "bg-blue-300" : index == 4 ? "bg-yellow-300" : "bg-orange-300"} flex justify-center items-center`}>
							{index}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="size-16 top-1/2 left-4"/>
			<CarouselNext  className="size-16 top-1/2 right-4"/>
		</Carousel>
	)
}