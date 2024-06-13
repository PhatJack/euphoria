import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MenShopData from '@/public/json/menshop.json'
import WomenShopData from '@/public/json/shop.json'
import ProductGallery from "@/components/product/ProductGallery";
import ProductDescription from "@/components/product/ProductDescription";
import { Suspense } from "react";
export async function generateMetadata({ params }: { params: { id: String } }): Promise<Metadata> {
	let product = MenShopData.find((item) => item.id === params.id);
	if (!product) {
		product = WomenShopData.find((item) => item.id === params.id);
		if (!product) {
			return notFound();
		}
	}
	return {
		title: `${product.productName} - ${product.colorName}`,
	};
}

export default function Page({ params }: { params: { id: string } }) {
	let product = MenShopData.find((item) => item.id === params.id);
	if (!product) {
		product = WomenShopData.find((item) => item.id === params.id);
		if (!product) {
			return notFound();
		}
	}
	return (
		<div className="w-full max-w-[1440px] mx-auto p-10 flex items-start gap-10">
			<div className="w-full flex pb-10">
				<Suspense
					fallback={
						<div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
					}
				>
					<ProductGallery images={product.images} />
				</Suspense>
				<ProductDescription description={product} />
			</div>
		</div>
	)
}