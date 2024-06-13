"use client"
import { useState } from "react";
import { ClothesType } from "@/constant/data";
import { MixerVerticalIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Filter() {

	const [isOpenPrice, setIsOpenPrice] = useState(true)
	const [isOpenColor, setIsOpenColor] = useState(true)
	const [isOpenSize, setIsOpenSize] = useState(true)
	const colorArray = ["purple", "black", "red", "orange", "navy", "white", "broom", "green", "yellow", "grey", "pink", "blue"];
	const sizeArray = ["XXS","XS","S", "M", "L", "XL", "XXL", "3XL", "4XL"];

	return (
		<div className="min-w-[280px] w-[280px] h-full flex flex-col border border-gray-x11 text-taupe-gray">
			<article className="w-full flex justify-between items-center py-3.5 px-5 border-b border-gray-x11">
				<span className="text-lg font-medium ">Filter</span>
				<MixerVerticalIcon className="size-5" />
			</article>
			<ul className="flex flex-col gap-3 p-5 border-b border-gray-x11">
				{
					ClothesType.map((item, index) => (
						<li key={index} className="">
							<span className="block text-arsenic font-medium hover:underline underline-offset-4 cursor-pointer">{item.title}</span>
						</li>
					))
				}
			</ul>
			<div className="flex flex-col border-b border-gray-x11">
				<article onClick={() => {
					setIsOpenPrice(prev => !prev)
				}}
					className="w-full flex justify-between items-center py-3.5 px-5">
					<span className="text-lg font-medium ">Price</span>
					{
						isOpenPrice ? (
							<ChevronUpIcon className="size-6" />
						) : (
							<ChevronDownIcon className="size-6" />
						)
					}
				</article>
				<div
					style={isOpenPrice
						? { display: "flex", transition: "display 500ms linear" }
						: { display: "none", transition: "display 500ms linear" }
					}
					className={`py-3.5 px-5 flex flex-col gap-4 border-t border-gray-x11`}>
					<div className="flex items-center space-x-2 w-full ">
						<Checkbox id="0-25" />
						<Label className="text-black cursor-pointer" htmlFor="0-25">$0 - $25</Label>
					</div>
					<div className="flex items-center space-x-2 w-full ">
						<Checkbox id="25-50" />
						<Label className="text-black cursor-pointer" htmlFor="25-50">$25 - $50</Label>
					</div>
					<div className="flex items-center space-x-2 w-full ">
						<Checkbox id="50-75" />
						<Label className="text-black cursor-pointer" htmlFor="50-75">$50 - $75</Label>
					</div>
					<div className="flex items-center space-x-2 w-full ">
						<Checkbox id="75-100" />
						<Label className="text-black cursor-pointer" htmlFor="75-100">$75 - $100</Label>
					</div>
					<div className="flex items-center space-x-2 w-full ">
						<Checkbox id="over150" />
						<Label className="text-black cursor-pointer" htmlFor="over150">Over $150</Label>
					</div>
				</div>
			</div>
			<div className="flex flex-col border-b border-gray-x11">
				<article onClick={() => {
					setIsOpenColor(prev => !prev)
				}}
					className="w-full flex justify-between items-center py-3.5 px-5">
					<span className="text-lg font-medium ">Color</span>
					{
						isOpenColor ? (
							<ChevronUpIcon className="size-6" />
						) : (
							<ChevronDownIcon className="size-6" />
						)
					}
				</article>
				<div
					style={isOpenColor
						? { display: "flex", transition: "display 500ms linear" }
						: { display: "none", transition: "display 500ms linear" }
					}
					className={`py-3.5 px-5 flex justify-between items-center gap-2 border-t border-gray-x11`}>
					<div className="w-full flex flex-col justify-center items-center gap-2">
						{
							colorArray.splice(0, 3).map((item, index) => (
								<div key={index} className="flex flex-col justify-center items-center gap-3 w-fit ">
									<span style={{
										backgroundColor: item === "broom" ? "#D67E3B" : item,
									}} className={`size-10 rounded-lg border border-gray-100`}></span>
									<span className="first-letter:uppercase text-xs font-medium">{item}</span>
								</div>
							))
						}
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-2">
						{
							colorArray.splice(0, 3).map((item, index) => (
								<div key={index} className="flex flex-col justify-center items-center gap-3 w-fit ">
									<span style={{
										backgroundColor: item === "broom" ? "#D67E3B" : item,
									}} className={`size-10 rounded-lg border border-gray-100`}></span>
									<span className="first-letter:uppercase text-xs font-medium">{item}</span>
								</div>
							))
						}
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-2">
						{
							colorArray.splice(0, 3).map((item, index) => (
								<div key={index} className="flex flex-col justify-center items-center gap-3 w-fit ">
									<span style={{
										backgroundColor: item === "broom" ? "#D67E3B" : item,
									}} className={`size-10 rounded-lg border border-gray-100`}></span>
									<span className="first-letter:uppercase text-xs font-medium">{item}</span>
								</div>
							))
						}
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-2">
						{
							colorArray.splice(0, 3).map((item, index) => (
								<div key={index} className="flex flex-col justify-center items-center gap-3 w-fit ">
									<span style={{
										backgroundColor: item === "broom" ? "#D67E3B" : item,
									}} className={`size-10 rounded-lg border border-gray-100`}></span>
									<span className="first-letter:uppercase text-xs font-medium">{item}</span>
								</div>
							))
						}
					</div>

				</div>
			</div>
			<div className="flex flex-col border-b border-gray-x11">
				<article onClick={() => {
					setIsOpenSize(prev => !prev)
				}}
					className="w-full flex justify-between items-center py-3.5 px-5">
					<span className="text-lg font-medium ">Size</span>
					{
						isOpenSize ? (
							<ChevronUpIcon className="size-6" />
						) : (
							<ChevronDownIcon className="size-6" />
						)
					}
				</article>
				<div style={isOpenSize
						? { display: "flex", transition: "display 500ms linear" }
						: { display: "none", transition: "display 500ms linear" }
					}
					className={`py-3.5 px-5 flex justify-between items-center gap-2 border-t border-gray-x11`}>
						<div className="flex flex-col gap-2">
							{
								sizeArray.slice(0,3).map((item,index) => (
									<span className="w-full flex justify-center items-center h-full px-5 py-1.5 hover:border-black/70 font-medium transition-all cursor-pointer text-sm border-2 rounded-xl" key={index}>{item}</span>
								))
							}
						</div>
						<div className="flex flex-col gap-2">
							{
								sizeArray.slice(0,3).map((item,index) => (
									<span className="w-full flex justify-center items-center h-full px-5 py-1.5 hover:border-black/70 font-medium transition-all cursor-pointer text-sm border-2 rounded-xl" key={index}>{item}</span>
								))
							}
						</div>
						<div className="flex flex-col gap-2">
							{
								sizeArray.slice(0,3).map((item,index) => (
									<span className="w-full flex justify-center items-center h-full px-5 py-1.5 hover:border-black/70 font-medium transition-all cursor-pointer text-sm border-2 rounded-xl" key={index}>{item}</span>
								))
							}
						</div>
					</div>
			</div>
		</div>
	)
}