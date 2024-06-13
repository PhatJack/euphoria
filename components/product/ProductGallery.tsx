"use client"
import Image from 'next/image';
import React from 'react';

export default function ProductGallery({ images }: { images: { url: string }[] }) {

	const [selectedImage, setSelectedImage] = React.useState(images[0].url)

	return (
		<div className="w-full flex items-center gap-5">
			<div className="w-1/4 flex flex-col gap-5">
				{
					images.map((image, index) => (
						<div
							onClick={() => setSelectedImage(image.url)} key={index}
							className={`size-32 relative rounded-lg hover:border-2 transition-all overflow-hidden ${selectedImage == image.url && "border-2 border-black"}`}>
							<Image
								loading='lazy'
								placeholder='blur'
								blurDataURL={image.url}
								fill src={image.url}
								alt="Product Image"
								className="object-cover object-center p-2 rounded-lg" />
						</div>
					))
				}
			</div>
			<div className="w-full h-[800px] relative">
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