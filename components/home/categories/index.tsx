import TitleText from "@/components/titleText";
import { CategoriesData } from "@/constant/data";
import CategoryItem from "./CategoryItem";

export default function Categories() {
	return (
		<div className="flex flex-col">
			<TitleText text="Categories For Men" />
			<div className="py-20 grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
				{
					CategoriesData.filter(item => item.gender == 'male').map((item, index) => (
						<CategoryItem key={index} item={item} />
					))
				}
			</div>
			<TitleText text="Categories For Women" />
			<div className="py-20 grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
				{
					CategoriesData.filter(item => item.gender == 'female').map((item, index) => (
						<CategoryItem key={index} item={item} />
					))
				}
			</div>
		</div>
	)
}