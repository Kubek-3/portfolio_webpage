export default function Projects() {
	const projects = [
		{
			title: "GaoAnimalCenter",
			description:
				"Freelance web platform for pet breeders and related businesses. Designed full UX/UI and implemented frontend using React and TypeScript.",
			tech: ["React", "TypeScript", "UI/UX", "Frontend"],
			link: "https://www.gaoanimalcenter.com/",
		},
		{
			title: "Raspberry Pi WS2812B LED Controller",
			description:
				"Custom HTTP server for Raspberry Pi and HTTP client for Raspberry Pi Pico to manage addressable LEDs remotely.",
			tech: ["Python", "HTTP", "Embedded", "Raspberry Pi"],
			link: "https://github.com/Kubek-3/raspi_http_led",
		},
		{
			title: "Vital Signs Monitoring (Bachelor Thesis)",
			description:
				"Python-based OFDM radar simulator capable of detecting breathing and heart rate of a human subject, including ML-based anomaly detection.",
			tech: ["Python", "Machine Learning", "Signal Processing"],
			link: "https://github.com/Kubek-3/VitalSignMonitoring_OFDM",
		},
		{
			title: "PostgreSQL + Supabase Backend",
			description:
				"Backend implementation using PostgreSQL with Supabase integration for match management system.",
			tech: ["PostgreSQL", "Supabase", "Database Design"],
			link: "#",
		},
	];

	return (
		<section id="projects" className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-16 text-primary text-center">Projects</h2>

				<div className="grid md:grid-cols-2 gap-10">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl p-8 shadow-2xl 
                         transition-all duration-500 
                         hover:scale-[1.03] hover:shadow-primary/40 hover:shadow-2xl"
						>
							<h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition">
								{project.title}
							</h3>

							<p className="text-gray-300 mb-6 leading-relaxed">
								{project.description}
							</p>

							{/* Tech Badges */}
							<div className="flex flex-wrap gap-3 mb-6">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
									>
										{tech}
									</span>
								))}
							</div>

							<a
								href={project.link}
								target="_blank"
								className="inline-block mt-2 text-accent hover:underline"
							>
								View Project
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
