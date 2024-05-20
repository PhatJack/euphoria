import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

interface CardItemProps {
	item: {
		image: string,
		description: string,
		title: string,
		discount: string
	}
}

export default function CardItem({ item }: CardItemProps) {
	return (
		<Card
			style={{
				backgroundImage: `url('${item.image}')`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left',
				backgroundSize: 'cover'
			}}
			className={`w-full h-80 max-h-80 overflow-hidden`}>
			<CardContent className="bg-black/10 w-full h-full flex flex-col justify-center items-start gap-5">
				<CardHeader className="p-0 text-white text-lg font-bold">{item.description}</CardHeader>
				<div className="flex flex-col gap-2">
					<CardTitle className="text-white text-3xl font-bold">{item.title}</CardTitle>
					<CardDescription className="text-white text-base uppercase">{item.discount}</CardDescription>
				</div>
				<Link href={"/shop"} className="text-white hover:text-primary transition-all font-bold underline underline-offset-4">Explore item</Link>
			</CardContent>
		</Card>
	)
}