export default function Hero() {
	return (
		<section className="h-screen flex items-center justify-center px-6 text-center">
			<div className="max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
				<h1 className="text-5xl md:text-6xl font-black mb-6">Jakub Płoskonka</h1>

				<p className="text-xl text-accent font-light mb-4">
					ICT Student @ AGH University of Krakow
				</p>

				<p className="text-gray-300 max-w-2xl mx-auto">
					Fourth-year ICT student specializing in web technologies, IP networks and
					infrastructure systems. Experienced in React, PostgreSQL and home-lab
					environments with Active Directory and pfSense.
				</p>

				<div className="mt-8 flex justify-center gap-6">
					<a
						href="#projects"
						className="px-6 py-3 border border-white/30 bg-primary rounded-xl font-semibold hover:bg-white/10 
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/40 
                         transition duration-300"
					>
						View Projects
					</a>

					<a
						href="#contact"
						className="px-6 py-3 border border-white/30 bg-primary rounded-xl font-semibold hover:bg-white/10 
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/40 
                         transition duration-300"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}
