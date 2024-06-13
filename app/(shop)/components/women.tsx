"use client"

import * as React from "react";
import { PaginationShop } from "@/components/pagination";
import ProductItemPreview from "@/components/shop/ProductItem";
import ShopData from '@/public/json/shop.json'

export default function Women() {

	const [currentPage, setCurrentPage] = React.useState(1)
	const [itemsPerPage, setItemsPerPage] = React.useState(15)

	const lastItemIndex = currentPage * itemsPerPage
	const firstItemIndex = lastItemIndex - itemsPerPage
	const currentItems = ShopData.slice(firstItemIndex, lastItemIndex)


	return (
		<div className="w-full flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<span className="font-bold text-xl text-arsenic">Women's Clothing</span>
				<span>...</span>
			</div>
			<div className="w-full grid grid-cols-3 gap-8 items-center">
				{
					currentItems.map((item, index) => (
						<ProductItemPreview key={index} product={item} />
					))
				}
			</div>
			<PaginationShop totalItems={ShopData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</div>
	)
}