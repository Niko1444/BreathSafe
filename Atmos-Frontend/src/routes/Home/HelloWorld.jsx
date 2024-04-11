// Path: src/routes/Client/Home/HelloWorld.jsx
import { useState } from 'react'

function HelloWorld() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="justify-centerflex flex h-full flex-grow flex-col items-center justify-center">
				<h1 className="text-4xl font-bold">Hello World App!</h1>
				<p className="py-4 text-lg">
					<button
						className="rounded-lg bg-slate-50 px-4 py-2 text-green-400 shadow-md"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
			</div>
		</>
	)
}

export default HelloWorld
