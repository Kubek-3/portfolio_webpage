export default function Skills() {
	const skillGroups = [
		{
			title: "Programming",
			skills: ["JavaScript", "TypeScript", "Python", "OOP", "Git"],
		},
		{
			title: "Databases",
			skills: ["PostgreSQL", "SQL", "Database Design", "Supabase"],
		},
		{
			title: "Networking",
			skills: ["OSI Model", "IP", "OSPF", "BGP", "RIP", "MPLS", "STP", "Cisco ACI"],
		},
		{
			title: "Infrastructure",
			skills: ["Hyper-V", "Active Directory", "pfSense", "Log Analysis"],
		},
		{
			title: "Software Engineering",
			skills: ["UML", "White-box Testing", "Black-box Testing", "Algorithms"],
		},
	];

	return (
		<section id="skills" className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-primary text-center mb-16">
					Technical Skills
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{skillGroups.map((group, index) => (
						<div
							key={index}
							className="group bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl p-8 shadow-2xl 
                         transition-all duration-500 
                         hover:scale-[1.03] hover:shadow-primary/40 hover:shadow-2xl"
						>
							<h3 className="text-xl font-bold mb-6 text-accent">{group.title}</h3>

							<div className="flex flex-wrap gap-3">
								{group.skills.map((skill, i) => (
									<span
										key={i}
										className="px-3 py-1 text-sm bg-primary/20 text-primary 
                               rounded-full border border-primary/30 
                               transition hover:bg-primary hover:text-white"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
