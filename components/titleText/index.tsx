export default function TitleText({text} : {text: string}){
	return (
		<div className="h-8 flex items-center gap-5">
			<span className="w-1.5 h-full rounded-xl bg-primary"></span>
			<span className="text-3xl font-bold text-arsenic tracking-wide">{text}</span>
		</div>
	)
}