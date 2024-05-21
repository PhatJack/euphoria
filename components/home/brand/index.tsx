import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default function Brand() {
	return (
		<Card className="bg-arsenic w-full h-fit">
			<CardHeader className="flex flex-col justify-center items-center gap-5">
				<CardTitle className="text-4xl font-bold text-white">Top Brands Deal</CardTitle>
				<CardDescription className="text-white text-lg font-medium">
					Up to <span className="text-yellow-300">60%</span> off all brands.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex justify-center items-center">
				<div className="flex gap-5">
					<div className="w-40 h-20 relative">
						<Image
							alt="Logo" sizes="100%"
							fill className="rounded-xl bg-white object-contain object-center"
							src={"https://th.bing.com/th/id/R.94fa934a209ffd7ecd553ac800535226?rik=T8Xs%2fkmGr%2fWgAg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2f9%2f7%2f1074177-nike-logo-wallpaper-hd-2018-1920x1080-for-iphone.jpg&ehk=MClEvNMtejPDswI5UnhTCOom%2bakTNIiZ4PlNoFbG1jU%3d&risl=&pid=ImgRaw&r=0"} />
					</div>
					<div className="w-40 h-20 relative">
						<Image
							alt="Logo" sizes="100%"
							fill className="rounded-xl bg-white object-contain object-center px-4 py-3"
							src={"https://th.bing.com/th/id/R.577938c26e54e380d0d83918861a5c08?rik=0VgSt3J9dWxRzQ&pid=ImgRaw&r=0"} />
					</div>
					<div className="w-40 h-20 relative">
						<Image
							alt="Logo" sizes="100%"
							fill className="rounded-xl bg-white object-cover object-center"
							src={"https://th.bing.com/th/id/R.45e96b7b382b3d98047cd31ca61a5546?rik=lrxM%2bSGPVpiOyg&pid=ImgRaw&r=0"} />
					</div>
					<div className="w-40 h-20 relative">
						<Image
							alt="Logo" sizes="100%"
							fill className="rounded-xl bg-white object-contain object-center"
							src={"https://th.bing.com/th/id/R.45c1ad3faa7af37424c90eb624518103?rik=O%2fpMtJ1Wrbvawg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpuma-png-download-1500.png&ehk=cn4MKCjlz4Xjw%2fxkgzKzklaV2LHcsFF5C%2b4fANHN44o%3d&risl=&pid=ImgRaw&r=0"} />
					</div>
					<div className="w-40 h-20 relative">
						<Image
							alt="Logo" sizes="100%"
							fill className="rounded-xl bg-white object-contain object-center p-2"
							src={"https://th.bing.com/th/id/R.92ff8e44040b9587b23db4e31725938c?rik=Va69btgOr16lMA&pid=ImgRaw&r=0"} />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}