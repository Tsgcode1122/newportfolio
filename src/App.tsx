import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHome from "./components/MobileHome";
import type { Section } from "./types/navigation";
import MobileNavbar from "./components/MobileNavbar";
import OngoingProjects from "./components/OngoingProjects";
import WorkExperience from "./components/WorkExperience";

import CompletedProjects from "./components/CompletedProjects";

function App() {
const [activeSection, setActiveSection] =
  useState<Section>("home");

useEffect(() => {
  const largeScreen = window.matchMedia("(min-width: 1024px)");

  const updateActiveSection = (event: MediaQueryListEvent | MediaQueryList) => {
    setActiveSection(event.matches ? "work" : "home");
  };

  // Set the correct section when the page initially loads
  updateActiveSection(largeScreen);

  // Update immediately whenever the screen crosses 1024px
  largeScreen.addEventListener("change", updateActiveSection);

  return () => {
    largeScreen.removeEventListener("change", updateActiveSection);
  };
}, []);


 const renderSection = () => {
  switch (activeSection) {
    case "home":
      return <MobileHome onSectionChange={setActiveSection} />;

    case "work":
      return <CompletedProjects />;

    case "ongoing":
      return <OngoingProjects />;

    case "experience":
      return <WorkExperience />;

    default:
      return <MobileHome onSectionChange={setActiveSection} />;
  }
};
  return (
    <main className="min-h-screen bg-[#141414] px-5 text-white sm:px-8 lg:px-10 xl:px-12 2xl:px-28 ">
  <MobileNavbar
    activeSection={activeSection}
    onSectionChange={setActiveSection}
  />

 <div className="lg:grid lg:h-screen lg:grid-cols-[50fr_50fr] lg:gap-10 2xl:grid-cols-[45fr_55fr] 2xl:gap-20">
  <Sidebar
    activeSection={activeSection}
    onSectionChange={setActiveSection}
  />

  <section className="hide-scrollbar bg-[#141414] py-16  lg:h-screen lg:overflow-y-auto xl:py-20 2xl:py-24">
    <div className="max-w-5xl">
      {renderSection()}
    </div>
  </section>
</div>
</main>
  );
}

export default App;