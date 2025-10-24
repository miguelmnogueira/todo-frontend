type CheckboxProps = {
	checked: boolean;
	setChecked: (checked: boolean) => void;
};

export default function Component({ checked, setChecked }: CheckboxProps) {
	return (
		<div
			className={`relative min-w-4 size-5 rounded-[3px] cursor-pointer duration-100 ease-in ${
				checked
					? "bg-primary text-primary-foreground"
					: "bg-muted text-muted-foreground"
			}`}
			onClick={() => setChecked(!checked)}
		>
			{checked && (
				<div className="absolute inset-0 flex items-center justify-center animate-checkmark">
					<CheckIcon className="size-3" />
				</div>
			)}
		</div>
	);
}

function CheckIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
