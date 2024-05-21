"use client"

import { ProductDetail } from "@/types/ProductItem"
import { HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image"
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
interface ProductItemPreviewProps {
	product: ProductDetail;
}

export default function ProductItemPreview({ product }: ProductItemPreviewProps) {

	const { toast } = useToast()

	return (
		<div className="w-full h-fit flex flex-col gap-3 group cursor-pointer">
			<div className="relative w-full h-[350px] rounded-xl overflow-hidden">
				<Image
					src={product.modelImage}
					alt="Category Photo"
					sizes="100%"
					fill={true}
					className="group-hover:scale-110 transition-all object-cover object-top" />
				<ul className="absolute flex flex-col z-50 top-4 right-2">
					<li>
						<Button type="button" onClick={() => {
							toast({
								title: "Added to Wishlist",
								description: "You can view your wishlist in the profile page",
							})
						}} variant={"secondary"} className="size-8 flex justify-center items-center p-1.5 rounded-full hover:bg-red-500 hover:text-white">
							<HeartIcon className="size-5" />
						</Button>
					</li>
				</ul>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<p className="font-bold">{product.productName}</p>
					<span className="text-[12px] text-arsenic">{product.brandName}'s Brand</span>
				</div>
				<span className="font-bold text-arsenic w-20 py-2 px-1 h-full flex justify-center items-center bg-gray-200 rounded-md">$ {(product.price / 2).toFixed(2)}</span>
			</div>
		</div>
	)
}