"use client"
import * as React from "react";
import { ProductDetail } from "@/types/ProductItem";
import { BreadcrumbShop } from "../breadcrumb";
import Image from "next/image";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { toast } from "../ui/use-toast";
import SizeGuideSheet from "../sheet/SizeGuideSheet";
export default function ProductInformation({ product, gender }: { product: ProductDetail, gender: string }) {
	const [swatch, setSwatch] = React.useState(product.swatches[0].colorName)
	const [size, setSize] = React.useState("")
	return (
		<div className="w-2/5 h-full *:text-arsenic">
			<div className="p-6 flex flex-col gap-7">
				<BreadcrumbShop name={product.productName} type={gender} />
				<p className="text-5xl font-bold">{product.productName}</p>
				<div className="w-full flex flex-col gap-4">
					<div className="w-full flex justify-between items-center">
						<span className="font-medium text-sm">Select size</span>
						<SizeGuideSheet />
						{/* <span className="font-medium text-sm text-gray-500 hover:underline underline-offset-2">Size guide</span> */}
					</div>
					<div className="flex gap-5">
						{
							["XS", "S", "M", "L", "XL"].map((item, index) => (
								<span
									key={index}
									onClick={() => setSize(item)}
									className={`w-10 h-10 rounded-lg border-2 
												border-gray-400 flex items-center 
												justify-center relative cursor-pointer
												transition-all
												${size == item && "bg-black text-white"}`}>
									{item}
								</span>
							))
						}
					</div>
				</div>
				<div className="w-full flex flex-col gap-4">
					<span className="text-base font-medium">{swatch}</span>
					<div className="w-full flex gap-2">
						{
							product.swatches.map((item, index) => (
								<div
									onClick={() => setSwatch(item.colorName)}
									className={`${swatch == item.colorName && "border-2"} relative w-20 h-24 rounded-lg hover:border-2 border-gray-x11`}>
									<Image fill src={item.productImage} alt="swatch image" className="p-2" />
								</div>
							))
						}
					</div>
				</div>
				<div className="w-full flex gap-6">
					<Button
						onClick={() => toast({
							title: "Added to cart",
							description: `${product.productName} has been added to your cart`,
							action: <Button variant={"secondary"}>View cart</Button>,
						})}
						variant={"default"}
						className="h-fit flex gap-2 px-5 py-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
						</svg>
						Add to cart
					</Button>
					<p className="border-2 border-arsenic px-10 py-1 rounded-lg h-full font-medium text-lg">${product.price}</p>
				</div>
				<hr />
				<div className="w-full flex flex-col gap-5">
					<div className="flex justify-between items-center">
						<section className="w-full flex items-center gap-4">
							<span className="inline-flex rounded-full justify-center items-center size-14 bg-[#F6F6F6]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
								</svg>
							</span>
							<span className="font-medium">Secure payment</span>
						</section>
						<section className="w-full flex items-center gap-4">
							<span className="inline-flex rounded-full justify-center items-center size-14 bg-[#F6F6F6]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
								</svg>
							</span>
							<span className="font-medium">Size & fit</span>
						</section>
					</div>
					<div className="flex justify-between items-center">
						<section className="w-full flex items-center gap-4">
							<span className="inline-flex rounded-full justify-center items-center size-14 bg-[#F6F6F6]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
								</svg>
							</span>
							<span className="font-medium">Free shipping</span>
						</section>
						<section className="w-full flex items-center gap-4">
							<span className="inline-flex rounded-full justify-center items-center size-14 bg-[#F6F6F6]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
								</svg>

							</span>
							<span className="font-medium whitespace-nowrap">Free shipping & Returns</span>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}