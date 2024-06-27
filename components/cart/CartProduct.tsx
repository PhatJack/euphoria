"use client"
import Image from "next/image";
import { TableCell, TableRow } from "../ui/table";
import React from "react";
import { toast } from "../ui/use-toast";

export default function CartProduct() {

	const [quantity, setQuantity] = React.useState(1)
	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1)
	}
	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		} else {
			toast({
				title: "Error",
				description: "Quantity cannot be less than 1",
			})
		}
	}
	return (
		<TableRow className="">
			<TableCell className="py-8">
				<div className="flex gap-4">
					<div className="relative w-28 h-32 rounded-lg overflow-hidden">
						<Image fill alt="Product Image" src={"/assets/card/first.jpg"} loading="lazy" />
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-arsenic font-bold text-base">Blue Flower Print Crop Top</p>
						<p className="text-taupe-gray text-xs"><span>Color:</span> Yellow</p>
						<p className="text-taupe-gray text-xs"><span>Size:</span> XXL</p>
					</div>
				</div>
			</TableCell>
			<TableCell>
				<span className="text-arsenic font-bold">$29.00</span>
			</TableCell>
			<TableCell>
				<div className="w-fit flex items-center gap-4 bg-[#F6F6F6] px-3 py-2 rounded-lg">
					<span className="cursor-pointer" onClick={handleDecreaseQuantity}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
						</svg>
					</span>
					<span className="text-base w-4 block text-center">{quantity}</span>
					<span className="cursor-pointer" onClick={handleIncreaseQuantity}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</span>
				</div>
			</TableCell>
			<TableCell>
				<span className="uppercase font-bold text-taupe-gray">FREE</span>
			</TableCell>
			<TableCell>
				<span className="uppercase font-medium text-arsenic">$29.00</span>
			</TableCell>
			<TableCell>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-primary">
					<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>

			</TableCell>
		</TableRow>
	)
}