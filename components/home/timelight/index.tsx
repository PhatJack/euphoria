import ProductItem from "@/components/shop/ProductItem";
import TitleText from "@/components/titleText";
import ProductPreviewList from "./ProductPreviewList";


export default function TimeLight() {
	return (
		<div className="flex flex-col mt-20">
			<TitleText text="In The Limelight" />
			<ProductPreviewList />
		</div>
	)
}