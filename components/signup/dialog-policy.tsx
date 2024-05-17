import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"

export default function DialogPolicy({ title }: { title: string }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<span className="underline cursor-pointer">{title}</span>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>
						Read it carefully before you proceed
					</DialogDescription>
				</DialogHeader>
				<p>Eiusmod anim laborum eiusmod Lorem ex do velit minim nisi consequat. Veniam in ex voluptate velit aliqua nostrud duis sint
					nulla ullamco. Incididunt non ut duis officia laboris aute dolore incididunt dolore. C
					upidatat consequat in et nostrud non nisi ad cillum.</p>
			</DialogContent>
		</Dialog>
	)
}