import type { Section } from "../types/navigation";

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

interface NavigationItem {
  number: string;
  label: string;
  section: Section;
}

const navigationItems: NavigationItem[] = [
  {
    number: "00",
    label: "Completed Projects",
    section: "work",
  },
  {
    number: "01",
    label: "Ongoing Projects",
    section: "ongoing",
  },
  {
    number: "02",
        label: "Experience",
    section: "experience",
   
  },
//   {
//     number: "03",
//      label: "Articles",
//     section: "articles",
//   },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Styled Components",
  "Node.js",
  "WordPress",
  "Drupal",
  "Modern Campus CMS",
  "Accessibility",
  "Responsive Design",
  "Git",
];

function Sidebar({
  activeSection,
  onSectionChange,
}: SidebarProps) {
  return (
<aside className="hide-scrollbar hidden h-screen overflow-y-auto bg-[#141414] py-16 text-white lg:block xl:py-20 2xl:py-24">
      <div className="flex min-h-full flex-col">
        {/* Introduction */}
        <header>
          <p className="font-mono text-base text-neutral-500">
            Hello, I&apos;m
          </p>

          <h1 className="mt-2 font-mono text-4xl font-semibold tracking-tight xl:text-5xl">
            Tosin Falola
          </h1>

          <p className="mt-5 font-mono text-sm leading-7 text-neutral-400">
            A{" "}
            <strong className="font-medium text-white">
              web developer
            </strong>{" "}
         

dedicated to creating accessible, responsive, and user-focused digital experiences that balance thoughtful design with reliable functionality. With experience in frontend development, content management systems, accessibility, and UX design, I transform ideas into engaging and intuitive web solutions. 

          </p>

          <a
            href="mailto:falolatosin8@gmail.com"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 font-mono text-sm font-semibold text-black transition duration-300 hover:bg-neutral-300"
          >
          Contact 
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </header>

        {/* Numbered navigation */}
        <nav
          className="mt-10 space-y-3"
          aria-label="Portfolio sections"
        >
          {navigationItems.map((item) => {
            const isActive = activeSection === item.section;

            return (
              <button
                key={item.section}
                type="button"
                onClick={() => onSectionChange(item.section)}
                aria-current={isActive ? "page" : undefined}
                className={`group flex w-full items-center gap-4 font-mono text-sm transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-600 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs transition duration-300 ${
                    isActive
                      ? "border-white text-white"
                      : "border-neutral-700 text-neutral-600 group-hover:border-white group-hover:text-white"
                  }`}
                >
                  {item.number}
                </span>

                <span
                  aria-hidden="true"
                  className={`h-px shrink-0 transition-all duration-300 ${
                    isActive
                      ? "w-14 bg-white"
                      : "w-7 bg-neutral-700 group-hover:w-11 group-hover:bg-white"
                  }`}
                />

                <span className="text-left">{item.label}</span>
              </button>
            );
          })}

         
        </nav>

        {/* Skills */}
        <section
          className="mt-9"
          aria-labelledby="skills-heading"
        >
          <p
            id="skills-heading"
            className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500"
          >
            Skills
          </p>

          <div className="flex  flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-[11px] leading-4 text-neutral-400 transition duration-300 hover:border-neutral-400 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Social links */}
        <footer className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-10 font-mono text-xs">
          <a
            href="https://github.com/Tsgcode1122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition duration-300 hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/tosinfalola/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition duration-300 hover:text-white"
          >
            LinkedIn ↗
          </a>
        </footer>
      </div>
    </aside>
  );
}

export default Sidebar;