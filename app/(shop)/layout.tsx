import Filter from "@/components/shop/filter";
import React from "react";

interface ShopLayoutProps {
	children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
	return (
		<div className="w-full container py-10 flex flex-col lg:flex-row items-start gap-10">
			<Filter />
			{children}
		</div>
	)
}