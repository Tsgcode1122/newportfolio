import type { Section } from "../types/navigation";

interface MobileHomeProps {
  onSectionChange: (section: Section) => void;
}

function MobileHome({ onSectionChange }: MobileHomeProps) {
  return (
    <section className="min-h-[calc(100vh-77px)] bg-[#141414] py-2 text-white lg:hidden">
      {/* Copy your existing sidebar content here exactly */}

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
      <button
        type="button"
        onClick={() => onSectionChange("work")}
        className="mt-8 border border-white px-5 py-3 font-mono text-xs uppercase tracking-wider transition hover:bg-white hover:text-[#141414]"
      >
        View projects
      </button>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
          Skills
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
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
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-xs text-neutral-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
          Contact
        </p>

        <a
          href="mailto:falolatosin8@gmail.com"
          className="mt-4 block font-mono text-sm text-neutral-400 transition hover:text-white"
        >
     falolatosin8@gmail.com
        </a>
      </div>

      <div className="mt-8 flex gap-6 font-mono text-sm text-neutral-400">
        <a
          href="https://github.com/Tsgcode1122"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/tosinfalola/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

export default MobileHome;