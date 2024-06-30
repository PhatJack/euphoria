import BreadcrumbWithArray from "@/components/breadcrumb/BreadcrumbWithArray";
import CartProduct from "@/components/cart/CartProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
			<Table className="w-full">
				<TableHeader className="bg-arsenic">
					<TableRow className="">
						{
							tableHeader.map((item, index) => (
								<TableHead key={index} className="uppercase font-medium text-white py-4">
									{item}
								</TableHead>
							))
						}
					</TableRow>
				</TableHeader>
				<TableBody className="bg-white">
					{
						Array.from({ length: 3 }).map((_, index) => (
							<CartProduct key={index} />
						))
					}
				</TableBody>
			</Table>
			<div className="size-full flex border rounded-md mt-3">
				<div className="w-full flex flex-col place-content-start border-r p-10">
					<span className="text-arsenic text-xl font-bold">Discount Code</span>
					<p className="text-muted-foreground text-xs mt-1">Enter your coupon if you have one</p>
					<section className="mt-5 w-3/4 flex">
						<Input type="text" className="rounded-l-md rounded-r-none" />
						<Button variant={"default"} className="rounded-r-md rounded-l-none">Apply Coupon</Button>
					</section>
					<Button className="mt-8 w-1/3 border border-gray-x11 bg-white" variant={"secondary"}>Continue Shopping</Button>
				</div>
				<div className="w-full flex place-content-end">
					<div className="w-3/4 flex flex-col p-10">
						<section className="flex justify-between items-center mb-2">
							<span>Sub Total</span>
							<span>$513.00</span>
						</section>
						<section className="flex justify-between items-center mb-2">
							<span>Shipping</span>
							<span>$5.00</span>
						</section>
						<section className="flex justify-between items-center mt-7">
							<span className="font-bold text-arsenic">Grand Total</span>
							<span className="font-bold text-arsenic">$518.00</span>
						</section>
						<hr className="my-6" />
						<Button variant={"default"}>
							Proceed to Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}