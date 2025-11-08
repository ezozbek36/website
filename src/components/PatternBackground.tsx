const patterns = [
	{
		fontSize: 24,
		rotation: -15,
		character: "</>",
		position: {
			x: 50,
			y: 50,
		},
	},
	{
		fontSize: 20,
		rotation: 10,
		character: "{}",
		position: {
			x: 150,
			y: 100,
		},
	},
	{
		fontSize: 18,
		rotation: -5,
		character: "=>",
		position: {
			x: 250,
			y: 80,
		},
	},
	{
		fontSize: 22,
		rotation: 15,
		character: "[]",
		position: {
			x: 100,
			y: 200,
		},
	},
	{
		fontSize: 20,
		rotation: -10,
		character: "<>",
		position: {
			x: 300,
			y: 180,
		},
	},
	{
		fontSize: 24,
		rotation: 5,
		character: "()",
		position: {
			x: 200,
			y: 250,
		},
	},
	{
		fontSize: 18,
		rotation: -8,
		character: "::",
		position: {
			x: 50,
			y: 320,
		},
	},
	{
		rotation: 12,
		fontSize: 22,
		character: "==",
		position: {
			x: 350,
			y: 300,
		},
	},
	{
		fontSize: 20,
		rotation: -15,
		character: "++",
		position: {
			x: 150,
			y: 350,
		},
	},
	{
		fontSize: 24,
		rotation: 8,
		character: ";",
		position: {
			x: 250,
			y: 370,
		},
	},
];

const PatternBackground = () => {
	return (
		<svg aria-hidden="true" className="stroke-gray-200 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]">
			<defs>
				<pattern x="50%" y={-1} id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width={200} height={200} patternUnits="userSpaceOnUse">
					<path d="M.5 200V.5H200" fill="none"></path>
				</pattern>
				<pattern id="programming-symbols" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
					{patterns.map((pattern) => (
						<text
							fill="#1d4ed8"
							x={pattern.position.x}
							y={pattern.position.y}
							fontFamily="monospace"
							key={pattern.character}
							fontSize={pattern.fontSize}
							transform={`rotate(${pattern.rotation})`}
						>
							{pattern.character}
						</text>
					))}
				</pattern>
			</defs>
			<rect fill="url(#programming-symbols)" width="100%" height="100%" opacity="0.9"></rect>
			<rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0}></rect>
		</svg>
	);
};

export default PatternBackground;
