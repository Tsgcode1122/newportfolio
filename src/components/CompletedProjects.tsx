import { Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  recent?: boolean;
}

const projects: Project[] = [
  {
    title: "K–12 Math Dashboard",
    description:
      "Helps teachers document instruction and receive structured coaching feedback.",
    technologies: ["React", "TypeScript", "Go", "PostgreSQL"],
    liveUrl: "https://sunny-dieffenbachia-055c24.netlify.app/",
    recent: true,
  },
  {
    title: "CSCI Project Hub",
    description:
      "Centralizes student and faculty research projects for easier discovery.",
    technologies: ["React", "TypeScript", "Styled Components", "Ant Design"],
    liveUrl: "https://csciprojecthub.etsu.edu/",
    recent: true,
  },
  {
    title: "Hampton & Harmony Healthcare",
    description:
      "Healthcare website with custom referral, career, and contact forms.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://hamptonharmonyhealthcare.com/",
  },
  
  {
    title: "GemLuxe Aesthetics",
    description:
      "Booking website with automated consent forms and email notifications.",
    technologies: ["React", "Node.js", "Express", "PDF Generation"],
    liveUrl: "https://gemluxeaesthetics.com/",
  },
 
  {
    title: "Ignition Car Care",
    description:
      "Responsive website promoting convenient mobile car-care services.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ignitioncarcare.netlify.app/",
  },
 
  {
    title: "TS Calculator",
    description:
      "Helps freelancers estimate project costs and generate invoices.",
    technologies: ["React", "JavaScript", "Invoice Generation"],
    liveUrl: "https://tsf-calculator.netlify.app/",
  },
   {
    title: "OneStopBody",
    description:
      "Animated landing page for exploring and ordering body-care products.",
    technologies: ["React", "Styled Components", "Framer Motion"],
    liveUrl: "https://onestopbody.netlify.app/",
  },
   {
    title: "IG DM Rewriter",
    description:
      "AI extension that rewrites Instagram messages in different tones.",
    technologies: ["JavaScript", "Node.js", "OpenAI API"],
    liveUrl: "#",
  },
   {
    title: "AuraaGlow",
    description:
      "Responsive skincare website showcasing premium beauty products.",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://auraaglow.netlify.app/",
  },
  {
    title: "SolHotel",
    description:
      "Hotel application for browsing rooms and managing reservations.",
    technologies: ["React", "Axios", "REST API", "Authentication"],
    liveUrl: "#",
  },
 
  {
    title: "Comfy Store",
    description:
      "Responsive online store displaying products from an external API.",
    technologies: ["React", "REST API", "JavaScript"],
    liveUrl: "https://tsgcomfystore.netlify.app/",
  },
  
];

const recentProjects = projects.filter((project) => project.recent);
const otherProjects = projects.filter((project) => !project.recent);

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`break-inside-avoid rounded-md bg-[#292929] text-white transition duration-300 hover:bg-[#303030] ${
        featured
          ? "min-h-60 p-6 sm:p-7"
          : "mb-4 inline-block w-full p-5"
      }`}
    >
      <div className="flex h-full flex-col">
        <h2 className="font-mono text-xl font-medium leading-tight tracking-wide sm:text-2xl">
          {project.title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-600 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <p className="mt-4 font-mono text-sm leading-6 text-neutral-400">
          {project.description}
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-sm text-neutral-400 transition hover:text-white"
        >
          <Eye size={16} aria-hidden="true" />
          Live
        </a>
      </div>
    </article>
  );
}

function CompletedProjects() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        Most recent
      </p>

      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {recentProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            featured
          />
        ))}
      </div>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        Other projects
      </p>

      <div className="mt-3 columns-1 gap-4 sm:columns-2">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default CompletedProjects;