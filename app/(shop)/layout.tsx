import Filter from "@/components/shop/filter";
import React from "react";

interface ShopLayoutProps {
	children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
	return (
		<div className="w-full max-w-[1440px] mx-auto p-10 flex items-start gap-10">
			<Filter />
			{children}
		</div>
	)
}