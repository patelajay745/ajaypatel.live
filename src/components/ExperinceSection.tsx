import { FC } from "react";

import { Card, CardContent } from "./ui/card";
import { ChevronRight } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

export const ExperinceSection: FC = () => {
  const experiences = [
    {
      title: "DevOps Engineer/Developer",
      company: "Freelance & Open Source",
      period: "Dec 2023 - Present",
      achievements:
        "Architected serverless solutions reducing infrastructure costs by 65%, implemented IaC with 90% error reduction, contributed to CNCF project 'cyclops', and achieved advanced certifications (CKS, CKA, AWS DevOps Professional)",
    },
    {
      title: "Android / Web Developer",
      company: "Brossard App Design, Montreal",
      period: "June 2021 - Dec 2022",
      achievements:
        "Spearheaded full-stack development including REST APIs, containerized applications, and cloud-native migrations, while implementing serverless architectures that improved scalability and reduced operational costs by 40%",
    },
    {
      title: "Android / Web Developer",
      company: "Freelance",
      period: "July 2018 - May 2019",
      location: "India",
      achievements:
        "Delivered multiple custom websites and Android applications with 100% client satisfaction rate, utilizing HTML, CSS, JavaScript, PHP, and Java while maintaining strict project timelines",
    },
    {
      title: "Android Developer",
      company: "TeqCoder",
      period: "Aug 2013 - Mar 2016",
      location: "India",
      achievements:
        "Developed and launched four major applications including a taxi booking platform and online exam portal, integrating WordPress backends and achieving 50,000+ downloads across platforms",
    },
  ];

  return (
    <div
      className="w-full px-4 md:px-20 lg:px-32  bg-gray-200 dark:bg-black
        "
    >
      <div
        className="py-20  ${
          "
      >
        <h2
          className="text-3xl font-bold mb-12 
            dark:text-white text-slate-900"
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <BackgroundGradient>
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 
                dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800
                  hover:bg-slate-50"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3
                        className="text-xl font-semibold ${
                        dark:text-white text-slate-900"
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="
                        dark:text-slate-400 text-slate-600"
                      >
                        {exp.company}
                      </p>
                      <p className="text-sm dark:text-slate-500 text-slate-500">
                        {exp.period}
                      </p>
                      <p
                        className="mt-4 
                       dark:text-slate-400 text-slate-600"
                      >
                        {exp.achievements}
                      </p>
                    </div>
                    <ChevronRight
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1 
                      dark:text-slate-600 text-slate-400"
                    />
                  </div>
                </CardContent>
              </Card>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};
