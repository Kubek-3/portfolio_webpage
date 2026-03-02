export default function About() {
	return (
		<section id="about" className="py-24 px-6">
			<div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
				<h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>

				<p className="text-gray-300 leading-relaxed">
					I am currently pursuing a Bachelor’s degree in Information and Communication
					Technology at AGH University of Krakow (GPA 4.3). My academic focus includes
					Algorithms, Internet Traffic Engineering, MPLS services and Machine Learning.
				</p>

				<p className="mt-6 text-gray-400">
					During my internship at Tanium, I worked with enterprise infrastructure
					troubleshooting, log analysis and client support. I also built a home lab
					environment using Hyper-V, pfSense and Active Directory.
				</p>
			</div>
		</section>
	);
}
