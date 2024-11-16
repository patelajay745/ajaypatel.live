import { Code, Server, Terminal } from "lucide-react";
import { FC } from "react";
import { Badge } from "./ui/badge";

export const SkillSection: FC = () => {
  const skills = {
    devops: [
      "Containerization",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "CI/CD",
      "Git",
    ],
    programming: ["JavaScript", "TypeScript", "Go", "PHP", "Python", "Kotlin"],
    tools: ["Prometheus", "Grafana", "ELK Stack", "Ansible", "Jira"],
  };
  return (
    <div className="py-20 px-4 md:px-20 lg:px-32 dark:bg-slate-950 bg-slate-50">
      <h2 className="text-3xl font-bold mb-12 dark:text-white text-slate-900">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 dark:text-purple-400 text-purple-600" />
            <h3 className="text-xl font-semibold dark:text-white text-slate-900">
              DevOps
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.devops.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="dark:bg-slate-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 dark:text-purple-400 text-purple-600" />
            <h3 className="text-xl font-semibold dark:text-white text-slate-900">
              Programming
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.programming.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="dark:bg-slate-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 dark:text-purple-400 text-purple-600" />
            <h3 className="text-xl font-semibold dark:text-white text-slate-900">
              Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="dark:bg-slate-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
