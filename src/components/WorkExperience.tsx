interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "East Tennessee State University",
    role: "Web Developer",
    location: "Johnson City, Tennessee",
    period: "January 2025 — Present",
    responsibilities: [
      "Maintain and improve university web content using Modern Campus CMS.",
      "Build responsive components using HTML, CSS, and JavaScript.",
      "Review and remediate content to improve accessibility and alignment with WCAG standards.",
      "Collaborate with university staff to create accurate, accessible, and user-focused digital content.",
    ],
    technologies: [
      "Modern Campus CMS",
      "HTML",
      "CSS",
      "JavaScript",
      "Accessibility",
      "SEO",
    ],
  },
  {
    company: "Softtech Solutions",
    role: "Frontend Developer",
    location: "Nigeria",
    period: "February 2022 — December 2024",
    responsibilities: [
      "Developed responsive web applications and reusable user-interface components.",
      "Contributed to student information and online examination systems.",
      "Worked with clients and team members to translate requirements into functional web solutions.",
      "Improved website content, mobile responsiveness, usability, and search visibility.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "MySQL",
    ],
  },
 {
  company: "Vontek",
  role: "React Developer",
  location: "Ibadan, Oyo State, Nigeria · Remote",
  period: "March 2021 — August 2021",
  responsibilities: [
    "Developed and maintained responsive e-commerce interfaces using React and Styled Components.",
    "Translated design requirements into reusable and user-friendly frontend components.",
    "Improved layouts across desktop and mobile screen sizes.",
  ],
  technologies: [
    "React",
    "JavaScript",
    "Styled Components",
    "HTML",
    "CSS",
    "Responsive Design",
  ],
},
{
  company: "Andela",
  role: "Software Development Intern",
  location: "Remote",
  period: "May 2020 — October 2020",
  responsibilities: [
    "Participated in the development of an online booking system prototype.",
    "Supported the implementation and testing of user-facing application features.",
    "Strengthened practical knowledge of collaborative software development and version control.",
  ],
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Software Development",
  ],
},
{
  company: "Benephyte Venture Nigeria",
  role: "Web and Graphic Designer",
  location: "Lagos, Nigeria · On-site",
  period: "January 2015 — February 2017",
  responsibilities: [
    "Created brochures, banners, and promotional materials using CorelDRAW.",
    "Assisted with web and digital content designed to support the organization’s communication needs.",
    "Prepared visual materials while maintaining consistent branding across print and digital channels.",
  ],
  technologies: [
    "CorelDRAW",
    "Graphic Design",
    "Web Design",
    "Branding",
    "Digital Content",
  ],
},
];

function WorkExperience() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        Work experience
      </p>

      <h2 className="mt-4 max-w-2xl font-mono text-3xl font-semibold leading-tight text-white sm:text-4xl">
        Where I have worked.
      </h2>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-neutral-400">
        My professional experience spans higher-education websites, frontend
        development, content management, accessibility, and user experience.
      </p>

      <div className="mt-10 space-y-4">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="group rounded-md bg-[#292929] p-6 text-white transition duration-300 hover:bg-[#303030] sm:p-7"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-600 font-mono text-xs text-neutral-400 transition duration-300 group-hover:border-neutral-400 group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-mono text-xl font-medium leading-tight tracking-wide text-white sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 font-mono text-sm text-neutral-300">
                      {experience.company}
                    </p>
                  </div>

                  <div className="shrink-0 font-mono text-xs leading-5 text-neutral-500 md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 font-mono text-sm leading-6 text-neutral-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-neutral-500"
                      />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-neutral-400 transition duration-300 group-hover:border-neutral-600 group-hover:text-neutral-300"
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

export default WorkExperience;