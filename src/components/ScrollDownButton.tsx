import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

function ScrollDownButton() {
  const scrollToNextSection = () => {
    console.log("Scroll down");
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToNextSection}
        className="rounded-full bg-purple-600 text-white hover:bg-purple-700 h-14 w-14"
      >
        <ChevronDown />
      </Button>
    </div>
  );
}

export default ScrollDownButton;
