export default function WorkExperience() {
	const experiences = [
		{
			role: "Support Technical Account Manager Intern",
			company: "Tanium",
			period: "07.2025 – 09.2025",
			description: [
				"Completed Summer Internship Programme gaining deep product knowledge and certifications.",
				"Supported enterprise troubleshooting, log analysis and client issue resolution.",
				"Built home lab environment using Hyper-V, pfSense and Active Directory.",
			],
		},
		{
			role: "Freelance Developer",
			company: "Self-employed",
			period: "2024 – 2025",
			description: [
				"Designed and implemented React + TypeScript frontend for GaoAnimalCenter platform.",
				"Developed PostgreSQL backend with Supabase integration.",
				"Built Raspberry Pi HTTP server and Pico client for WS2812B LED control.",
			],
		},
	];

	return (
		<section id="experience" className="py-24 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-bold text-primary text-center mb-16">
					Work Experience
				</h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="group bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl p-8 shadow-2xl 
                         transition-all duration-500 
                         hover:scale-[1.02] hover:shadow-primary/40 hover:shadow-2xl"
						>
							<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
								<div>
									<h3 className="text-2xl font-bold group-hover:text-accent transition">
										{exp.role}
									</h3>
									<p className="text-gray-400">{exp.company}</p>
								</div>

								<span
									className="mt-4 md:mt-0 px-4 py-1 text-sm 
                                 bg-primary/20 text-primary 
                                 rounded-full border border-primary/30"
								>
									{exp.period}
								</span>
							</div>

							<ul className="space-y-3 text-gray-300">
								{exp.description.map((point, i) => (
									<li key={i} className="flex items-start gap-3">
										<span className="text-accent mt-1">•</span>
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
