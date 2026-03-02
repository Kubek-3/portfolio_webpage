export default function Contact() {
	return (
		<section id="contact" className="py-24 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-bold text-primary text-center mb-16">Contact</h2>

				<div
					className="bg-white/10 backdrop-blur-xl border border-white/20 
                        rounded-3xl shadow-2xl p-12 text-center"
				>
					<p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
						I am currently open to internship and junior opportunities in networking,
						infrastructure, DevOps or backend development. Feel free to reach out - I’m
						always happy to connect.
					</p>

					<div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
						<a
							href="mailto:jploskonka8@gmail.com"
							className="px-6 py-3 border border-white/30 bg-primary rounded-xl font-semibold hover:bg-white/10 
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/40 
                         transition duration-300"
						>
							Send Email
						</a>

						<a
							href="https://github.com/Kubek-3"
							target="_blank"
							className="px-6 py-3 border border-white/30 bg-primary rounded-xl font-semibold hover:bg-white/10 
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/40 
                         transition duration-300"
						>
							GitHub
						</a>

						<a
							href="https://www.linkedin.com/in/jakubploskonka/"
							target="_blank"
							className="px-6 py-3 border border-white/30 bg-primary rounded-xl font-semibold hover:bg-white/10 
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/40 
                         transition duration-300"
						>
							LinkedIn
						</a>
					</div>

					<div className="text-gray-400 text-sm space-y-2">
						<p>Krakow, Poland</p>
						<p>Email: jploskonka8@gmail.com</p>
						<p>Phone: +48 532 596 910</p>
					</div>
				</div>
			</div>
		</section>
	);
}
