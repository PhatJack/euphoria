import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

export default function SizeGuideSheet() {

	const tableHeaders = ["US", "DE", "UK", "FR", "IT", "ES"];

	const tableData = [
		["XXS", "38", "XXS", "38", "38", "38"],
		["XS", "40 - 42", "XS", "40 - 42", "42", "42"],
		["S", "44 - 46", "S", "44 - 46", "46", "46"],
		["M", "48 - 50", "M", "48 - 50", "50", "50"],
		["L", "52 - 54", "L", "52 - 54", "54", "54"],
		["XL", "56 - 58", "XL", "56 - 58", "58", "58"],
		["XXL", "60 - 62", "XXL", "60 - 62", "62", "62"],
		["3XL", "64 - 66", "3XL", "64 - 66", "66", "66"]
	];
	const womenTableData = [[32, 6, 34, 38, 36, 36], [34, 8, 36, 40, 38, 38], [36, 10, 38, 42, 40, 40], [38, 12, 40, 44, 42, 42], [40, 14, 42, 46, 44, 44], [42, 16, 44, 48, 46, 46], [44, 18, 46, 50, 48, 48], [46, 20, 48, 52, 50, 50]]
	return (
		<Sheet>
			<SheetTrigger asChild>
				<span className="font-medium text-sm text-gray-500 hover:underline underline-offset-2 cursor-pointer">Size guide</span>
			</SheetTrigger>
			<SheetContent className="sm:max-w-lg">
				<SheetHeader className="mb-5">
					<SheetTitle>Size Guide</SheetTitle>
				</SheetHeader>
				<SheetDescription className="text-arsenic font-medium">
					Men's Clothing
				</SheetDescription>
				<Table className="mb-5">
					<TableHeader>
						<TableRow>
							{
								tableHeaders.map((header, index) => (
									<TableHead key={index} className="text-black"><strong>{header}</strong></TableHead>
								))
							}
						</TableRow>
					</TableHeader>
					<TableBody>
						{
							tableData.map((row, index) => (
								<TableRow key={index}>
									{
										row.map((cell, index) => (
											<TableCell key={index}>{cell}</TableCell>
										))
									}
								</TableRow>
							))
						}
					</TableBody>
				</Table>
				<SheetDescription className="text-arsenic font-medium">
					Women's Clothing
				</SheetDescription>
				<Table className="mb-5">
					<TableHeader>
						<TableRow>
							{
								tableHeaders.map((header, index) => (
									<TableHead key={index} className="text-black"><strong>{header}</strong></TableHead>
								))
							}
						</TableRow>
					</TableHeader>
					<TableBody>
						{
							womenTableData.map((row, index) => (
								<TableRow key={index}>
									{
										row.map((cell, index) => (
											<TableCell key={index}>{cell}</TableCell>
										))
									}
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</SheetContent>
		</Sheet>
	)
}
