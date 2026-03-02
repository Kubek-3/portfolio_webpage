import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const links = [
		{ name: "About", href: "#about" },
		{ name: "Experience", href: "#experience" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<nav
			className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl 
                    bg-white/10 backdrop-blur-xl border border-white/20 
                    rounded-2xl shadow-2xl px-6 py-4"
		>
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-bold tracking-wide text-primary">Jakub Płoskonka</h1>

				{/* Desktop */}
				<div className="hidden md:flex gap-8">
					{links.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-gray-300 hover:text-accent transition font-medium hover:text-white hover:scale-105 duration-300"
						>
							{link.name}
						</a>
					))}
				</div>

				{/* Mobile Button */}
				<button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="mt-6 flex flex-col gap-4 md:hidden">
					{links.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setOpen(false)}
							className="text-gray-300 hover:text-accent transition font-medium hover:text-white hover:scale-105 duration-300"
						>
							{link.name}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
