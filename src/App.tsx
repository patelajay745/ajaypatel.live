import "./App.css";
import { ExperinceSection } from "./components/ExperinceSection";

import { ModeToggle } from "./components/ModeToggle";
import ScrollDownButton from "./components/ScrollDownButton";
import { SkillSection } from "./components/SkillSection";
import { ThemeProvider } from "./components/themeProvider";

import HeroSection from "@/components/HeroSection";
import { CertificateSection } from "./components/CertificateSection";

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
      </div>
    </ThemeProvider>
  );
}

export default App;
