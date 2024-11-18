import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

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
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </HoverBorderGradient>
          </Link>

          <Link to="https://www.linkedin.com/in/patelajay745/" target="_blank">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </HoverBorderGradient>
          </Link>

          <HoverBorderGradient
            onClick={() => {
              document.getElementById("contactMe")?.scrollIntoView();
            }}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
