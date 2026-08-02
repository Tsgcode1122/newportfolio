import { useState } from "react";
import type { Section } from "../types/navigation";

interface MobileNavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navigationItems: { label: string; section: Section }[] = [
  { label: "Home", section: "home" },
  { label: "Completed Projects", section: "work" },
  { label: "Ongoing Projects", section: "ongoing" },
  { label: "Work Experience", section: "experience" },
];

function MobileNavbar({
  activeSection,
  onSectionChange,
}: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (section: Section) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
   <header className="border-b border-neutral-800 bg-[#141414] text-white lg:hidden">
      <div className="flex items-center justify-between py-4">
        <button
          type="button"
          onClick={() => handleSelection("home")}
          className="font-mono text-2xl font-bold tracking-tight"
          aria-label="Go to homepage"
        >
          TF<span className="text-neutral-500">.</span>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-neutral-700 transition hover:border-neutral-400"
        >
          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-neutral-800 bg-[#141414] py-3"
        >
          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.section;

            return (
              <button
                key={item.section}
                type="button"
                onClick={() => handleSelection(item.section)}
                className={`group flex w-full items-center gap-4 border-b border-neutral-800 py-4 text-left font-mono transition ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                <span className="text-[10px] text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-sm uppercase tracking-[0.12em]">
                  {item.label}
                </span>

                <span
                  className={`transition ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default MobileNavbar;