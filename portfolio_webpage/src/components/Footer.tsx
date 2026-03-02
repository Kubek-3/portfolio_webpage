export default function Footer() {
	return (
		<footer className="mt-24 px-6 pb-12">
			<div
				className="max-w-6xl mx-auto 
                      bg-white/10 backdrop-blur-xl border border-white/20 
                      rounded-3xl shadow-2xl p-10"
			>
				<div className="grid md:grid-cols-3 gap-10">
					{/* Identity */}
					<div>
						<h3 className="text-xl font-bold text-primary mb-4">Jakub Płoskonka</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							ICT Student at AGH University of Krakow. Focused on networking,
							infrastructure systems, and full-stack web development.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="font-semibold mb-4 text-accent">Navigation</h4>
						<ul className="space-y-2 text-gray-400 text-sm">
							<li>
								<a href="#about" className="hover:text-white transition">
									About
								</a>
							</li>
							<li>
								<a href="#experience" className="hover:text-white transition">
									Experience
								</a>
							</li>
							<li>
								<a href="#projects" className="hover:text-white transition">
									Projects
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-white transition">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold mb-4 text-accent">Contact</h4>
						<ul className="space-y-2 text-gray-400 text-sm">
							<li>Krakow, Poland</li>
							<li>
								<a
									href="mailto:jploskonka8@gmail.com"
									className="hover:text-white transition"
								>
									jploskonka8@gmail.com
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Kubek-3"
									target="_blank"
									className="hover:text-white transition"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/jakubploskonka/"
									target="_blank"
									className="hover:text-white transition"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-500 text-sm">
					© {new Date().getFullYear()} Jakub Płoskonka. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
