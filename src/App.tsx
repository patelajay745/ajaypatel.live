import "./App.css";
import { ExperinceSection } from "./components/ExperinceSection";

import { ModeToggle } from "./components/ModeToggle";
import ScrollDownButton from "./components/ScrollDownButton";
import { SkillSection } from "./components/SkillSection";
import { ThemeProvider } from "./components/themeProvider";

import HeroSection from "@/components/HeroSection";
import { CertificateSection } from "./components/CertificateSection";
import { ProjectSection } from "./components/ProjectSections";
import { EducationSection } from "./components/EducationSection";
import { BlogsSection } from "./components/BlogsSection";
import { ContactMeSection } from "./components/ContactMe";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen  transition-colors duration-300  min-w-full  ">
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>

        <HeroSection />
        <ScrollDownButton />
        <ExperinceSection />

        <SkillSection />

        <CertificateSection />

        <ProjectSection />

        <EducationSection />

        {/* <BlogsSection /> */}

        <ContactMeSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
