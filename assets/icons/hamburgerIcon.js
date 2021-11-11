export default function HamburgerIcon({ color = '#231F20' }) {
	return (
		<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">
			<path
				fill={color}
				d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"
			/>
			<path
				fill={color}
				d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"
			/>
			<path
				fill={color}
				d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"
			/>
		</svg>
	)
}