import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

export const ProjectSection: FC = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure deployment using Terraform",
      tags: ["AWS", "Terraform", "Python"],
      metrics: "80% reduction in provisioning time",
    },
    {
      title: "Microservices Migration",
      description: "Led the migration from monolith to microservices",
      tags: ["Kubernetes", "Docker", "Go"],
      metrics: "3x improvement in deployment frequency",
    },
  ];
  return (
    <div
      id="project"
      className="py-20 px-4 md:px-20 lg:px-32 dark:bg-slate-950 bg-slate-50"
    >
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 bg-gray-200 border-black dark:bg-black dark:hover:bg-slate-800 dark:border-white hover:bg-slate-50"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-slate-900  dark:text-white">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="dark:border-slate-700 dark:text-slate-400 border-black shadow-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                {project.metrics}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
