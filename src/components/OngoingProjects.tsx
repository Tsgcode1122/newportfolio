interface OngoingProject {
  title: string;
  description: string;
  technologies: string[];
  status: string;
}

const ongoingProjects: OngoingProject[] = [
  {
    title: "Nursing Student Attendance Tracker",
    description:
      "A location-based system that allows nursing students to record their attendance at approved clinical locations while giving instructors access to attendance records.",
    technologies: ["React", "TypeScript", "Python", "FastAPI"],
    status: "In development",
  },
  {
    title: "University News and Events Hub",
    description:
      "A Drupal-based university website for publishing news, managing events, organizing content, and supporting an editorial approval workflow.",
    technologies: ["Drupal", "PHP", "Twig", "CSS"],
    status: "In development",
  },
   {
    title: "Student Support and Case Management System",
    description:
      "Manages student support requests, referrals, communication, and progress.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    status: "In Development",
  },
];

function OngoingProjects() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        Ongoing projects
      </p>

      <h2 className="mt-4 max-w-2xl font-mono text-3xl font-semibold leading-tight text-white sm:text-4xl">
        What I am currently building.
      </h2>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-neutral-400">
        A collection of projects currently in research, design, and development.
      </p>

      {/* Single-column project list */}
      <div className="mt-10 space-y-4">
        {ongoingProjects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-md bg-[#292929] p-6 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#303030] sm:p-7"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Project number */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-600 font-mono text-xs text-neutral-400 transition group-hover:border-neutral-400 group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Project information */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-mono text-xl font-medium leading-tight tracking-wide text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <span className="w-fit shrink-0 rounded-full border border-neutral-600 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-300">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl font-mono text-sm leading-6 text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-neutral-400 transition group-hover:border-neutral-600 group-hover:text-neutral-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OngoingProjects;