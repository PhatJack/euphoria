"use client"
import Image from 'next/image';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
export default function ProductGallery({ images }: { images: { url: string }[] }) {

	const [selectedImage, setSelectedImage] = React.useState(images[0].url)

	return (
		<div className="w-3/5 flex items-center gap-5">
			<Carousel opts={{
				align: "start",
				loop: true,
			}}
				orientation='vertical' className="w-1/5 flex flex-col gap-5">
				<CarouselContent className='max-h-[576px]'>
					{
						images.map((image, index) => (
							<CarouselItem
								onClick={() => setSelectedImage(image.url)}
								key={index}
								className={`md:basis-1/4`}>
								<div className={`size-32 relative rounded-lg hover:border-2  ${selectedImage == image.url && "border-2 border-black"}`}>
									<Image
										loading='lazy'
										placeholder='blur'
										blurDataURL={"https://th.bing.com/th/id/OIP.d3Q4E84qw3LPQ2v4NugfDgHaFP?rs=1&pid=ImgDetMain"}
										fill src={image.url}
										alt="Product Image"
										className="object-cover object-center p-2 rounded-lg" />
								</div>
								{/* {index} */}
							</CarouselItem>
						))
					}
				</CarouselContent>
				{
					images.length > 4 && (
						<>
							<CarouselPrevious />
							<CarouselNext />
						</>
					)
				}
			</Carousel>
			<div className="w-full h-[750px] relative">
				<div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden relative">
					<Image
						loading='lazy'
						placeholder='blur'
						blurDataURL={selectedImage}
						fill
						src={selectedImage}
						alt="Product Image"
						className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	)
}