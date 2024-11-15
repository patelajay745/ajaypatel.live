import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Terminal,
  Server,
  Code,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroSection({ className }: { className?: string }) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        I'm Ajay Patel <br />
        <Highlight className="text-black dark:text-white">
          DevOps Engineer & Full-Stack Developer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
