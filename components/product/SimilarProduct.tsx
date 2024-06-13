"use client"
import TitleText from "../titleText";
import MenShopData from '@/public/json/menshop.json'
import WomenShopData from '@/public/json/shop.json'
import { ProductDetail } from "@/types/ProductItem";
import * as React from "react";
import ProductItemPreview from "../shop/ProductItem";
export default function SimilarProducts({ gender }: { gender: string }) {
	const [products, setProducts] = React.useState<ProductDetail[]>([])
	const getRandomElements = (data: ProductDetail[], count: number): ProductDetail[] => {
		const shuffled = data.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	React.useEffect(() => {
		const loadProducts = () => {
			if (gender === "Men") {
				setProducts(getRandomElements(MenShopData, 8));
			} else if (gender === "Women") {
				setProducts(getRandomElements(WomenShopData, 8));
			}
		};
		loadProducts();
	}, [gender]);
	return (
		<div className="w-full flex flex-col gap-8">
			<TitleText text="Similar Products" />
			<div className="grid grid-cols-4 gap-5">
				{
					products.map((product, index) => (
						<ProductItemPreview key={index} product={product} />
					))
				}
			</div>
		</div>
	)
}