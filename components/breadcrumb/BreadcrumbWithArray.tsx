import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function BreadcrumbWithArray({ list }: { list: string[] }) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{
					list.map((item, index) => (
						<>
							<BreadcrumbItem key={index} className={`${index == list.length - 1 && "text-black font-medium"}`}>
								<BreadcrumbLink href="#">
									{item}
								</BreadcrumbLink>
							</BreadcrumbItem>
							{
								index < list.length - 1 && <BreadcrumbSeparator />
							}
						</>
					))
				}
			</BreadcrumbList>
		</Breadcrumb>
	)
}