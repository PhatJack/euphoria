import * as React from "react"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

interface DropDownListProps<T> {
	placeholder: string;
	list: T[];
	getValue: (item: T) => string;
	getLabel: (item: T) => string;
}

export function DropDownList<T>({ placeholder, list, getValue, getLabel }: DropDownListProps<T>) {
	return (
		<Select>
			<SelectTrigger className="w-[220px] h-11">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{
						list.map((item, index) => (
							<SelectItem key={index} value={getValue(item)}>{getLabel(item)}</SelectItem>
						))
					}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
