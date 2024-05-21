export interface ProductPreview {
	id: string,
	productName: string,
	brandName: string,
	price: number,
	modelImage: string,
	colorName: string,
}

export interface ProductDetail extends ProductPreview {
	images: {
		url: string,
	}[],
	swatches: {
		articleId: string,
		url: string,
		colorName: string,
		colorCode: string,
		trackingId: string,
		productImage: string,
	}[],
}
