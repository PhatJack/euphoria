import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface CategoryItemProps {
	item: {
		image: string,
		title: string
	}
}

export default function CategoryItem({ item }: CategoryItemProps) {
	return (
		<div className="w-full h-fit flex flex-col gap-3 group">
			<div className="relative w-full h-[350px] rounded-xl overflow-hidden">
				<Image
					src={item.image}
					alt="Category Photo"
					placeholder="blur"
					fill={true} sizes="100%"
					className="group-hover:scale-110 transition-all"
					blurDataURL={item.image} />
			</div>
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<p className="font-bold">{item.title}</p>
					<span className="text-[12px] text-arsenic">Explore Now</span>
				</div>
				<ArrowRightIcon className="size-6 text-gray-600" />
			</div>
		</div>
	)
}