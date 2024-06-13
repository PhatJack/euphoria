import { ProductDetail } from "@/types/ProductItem";
import TitleText from "../titleText";
import Image from "next/image";

export default function ProductDescription({ product }: { product: ProductDetail }) {
	return (
		<div className="w-full flex py-10">
			<div className="w-full flex flex-col gap-8">
				<TitleText text="Product Description" />
				<p className="relative w-fit pr-5 py-2">
					<span className="font-medium">Description</span>
					<span className="absolute w-1/2 h-px bg-black bottom-0 left-0"></span>
				</p>
				<p className="text-taupe-gray text-sm tracking-wide leading-relaxed">Culpa adipisicing tempor pariatur deserunt nisi dolor. Ex eu ex ut anim fugiat. Enim proident elit veniam elit quis incididunt id in. Exercitation officia ullamco velit anim est labore. Fugiat voluptate deserunt duis voluptate velit. Lorem excepteur reprehenderit aliqua sunt enim.</p>
			</div>
			<div className="w-full flex justify-end">
				<div className="relative w-1/2 h-[25rem]">
					<Image src={product.modelImage} alt="Model Image" fill className="rounded-lg" />
				</div>
			</div>
		</div>
	)
}