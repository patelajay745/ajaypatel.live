import "./App.css";
import { ExperinceSection } from "./components/ExperinceSection";

import { ModeToggle } from "./components/ModeToggle";
import ScrollDownButton from "./components/ScrollDownButton";
import { ThemeProvider } from "./components/themeProvider";

import HeroSection from "@/components/HeroSection";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen  transition-colors duration-300  min-w-full  ">
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>

        <HeroSection />
        <ScrollDownButton />
        <ExperinceSection/>
      </div>
    </ThemeProvider>
  );
}

export default App;
