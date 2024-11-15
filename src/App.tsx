import "./App.css";
import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <ModeToggle />
      </>
    </ThemeProvider>
  );
}

export default App;
