import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Link } from "react-router-dom";

function HeroSection() {
  const words = [
    {
      text: "DevOps",
      className: "text-purple-600 dark:text-purple-800",
    },
    {
      text: "Engineer",
      className: "text-purple-600 dark:text-purple-800",
    },
    {
      text: "&",
      className: "text-purple-600 dark:text-purple-800",
    },
    {
      text: "Full-Stack",
      className: "text-purple-600 dark:text-purple-800",
    },
    {
      text: "Developer",
      className: "text-purple-600 dark:text-purple-800",
    },
  ];
  return (
    <div
      className={`h-screen flex flex-col justify-center px-4 md:px-20 lg:px-32 dark:bg-gradient-to-b dark:from-slate-950 dark:to-black bg-gradient-to-b from-slate-100 to-white
        `}
    >
      <div className="space-y-6 max-w-6xl">
        <Badge
          variant="outline"
          className=" 
            dark:text-purple-400 dark:border-purple-800
              text-purple-600 border-purple-800
          "
        >
          Available for opportunities
        </Badge>
        <h1
          className={`text-5xl md:text-6xl font-bold dark:text-whitetext-slate-900"
          }`}
        >
          I'm Ajay Patel
        </h1>

        <TypewriterEffectSmooth words={words} />
        <p
          className={`text-xl dark:text-slate-400 text-slate-600"
          }`}
        >
          Building scalable infrastructure and automated solutions with 5+ years
          of experience
        </p>
        <div className="flex gap-4 pt-4">
          <Link to="https://github.com/patelajay745/" target="_blank">
            <Button
              variant="outline"
              className="gap-2 border-black dark:border-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </Link>

          <Link to="https://www.linkedin.com/in/patelajay745/" target="_blank">
            <Button
              variant="outline"
              className="gap-2 border-black dark:border-white"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </Link>
          <Button
            variant="outline"
            className="gap-2 border-black dark:border-white"
          >
            <Mail className="w-4 h-4" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
