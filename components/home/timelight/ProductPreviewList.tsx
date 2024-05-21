import ProductItemPreview from "@/components/shop/ProductItem";
import ShopData from '@/public/json/shop.json'

export default function ProductPreviewList() {
	return (
		<div className="flex gap-5 py-20">
			{
				ShopData.slice(0, 4).map((item, index) => (
					<ProductItemPreview key={index} product={item} />
				))
			}
		</div>
	)
}