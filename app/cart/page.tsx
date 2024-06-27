import BreadcrumbWithArray from "@/components/breadcrumb/BreadcrumbWithArray";
import CartProduct from "@/components/cart/CartProduct";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cart",
	description: "Get yourself some clothes my boy",
}

export default function Cart() {

	const tableHeader = ["Product details", "price", "quantity", "shipping", "subtotal", "action"]

	return (
		<div className="w-full max-w-[1440px] mx-auto flex flex-col gap-5 py-5 lg:px-10 ">
			<div className="w-full flex flex-col items-start gap-10">
				<BreadcrumbWithArray list={["Cart"]} />
			</div>
			<div className="">
				<Table className="w-full">
					<TableHeader className="bg-arsenic">
						<TableRow className="">
							{
								tableHeader.map((item, index) => (
									<TableHead key={index} className="uppercase font-medium text-white py-5">
										{item}
									</TableHead>
								))
							}
						</TableRow>
					</TableHeader>
					<TableBody className="bg-white">
						{
							Array.from({ length: 5 }).map((_, index) => (
								<CartProduct key={index} />
							))
						}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}