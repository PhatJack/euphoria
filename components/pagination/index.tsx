import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationShop({
	totalItems,
	itemsPerPage,
	currentPage,
	setCurrentPage,
}: {
	totalItems: number,
	itemsPerPage: number,
	currentPage: number,
	setCurrentPage: (page: number) => void,
}) {
	let pages = []
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pages.push(i)
	}
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	const handlePrevPage = () => {
		if (currentPage === 1) return
		scrollToTop()
		setCurrentPage(currentPage - 1)
	}
	const handleNextPage = () => {
		if (currentPage === pages.length) return
		scrollToTop()
		setCurrentPage(currentPage + 1)
	}
	const handleCurrentPage = (index: number) => {
		scrollToTop()
		setCurrentPage(index)
	}
	return (
		<Pagination>
			<PaginationContent>
				{
					currentPage > 1 && (
						<PaginationItem className="cursor-pointer">
							<PaginationPrevious onClick={() => handlePrevPage()} />
						</PaginationItem>
					)
				}
				{
					pages.map((page, index) => (
						<PaginationItem key={index} className={`${currentPage == page ? "bg-black text-white rounded-md" : ""} cursor-pointer`}>
							<PaginationLink onClick={() => handleCurrentPage(page)}>{page}</PaginationLink>
						</PaginationItem>
					))
				}
				{
					currentPage != pages.length && (
						<PaginationItem className="cursor-pointer">
							<PaginationNext onClick={() => handleNextPage()} />
						</PaginationItem>
					)
				}
			</PaginationContent>
		</Pagination>
	)
}
