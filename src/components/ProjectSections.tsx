import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

export const ProjectSection: FC = () => {
  const projects = [
    {
      title: "Infrastructure as Code Implementation",
      description:
        "Transformed manual AWS infrastructure provisioning to automated IaC solution for a startup development team, implementing multi-environment setup (dev/stage/prod) with Terraform and GitOps workflow",
      tags: ["Terraform", "AWS", "GitOps", "CI/CD"],
      metrics:
        "90% reduction in configuration errors, 75% faster deployments, and 60% cost optimization through better resource management",
    },
    {
      title: "Fantasy Gaming Platform Modernization",
      description:
        "Transformed Batball11's monolithic fantasy gaming backend into serverless microservices architecture, implementing event-driven design for real-time score updates and user transactions",
      tags: [
        "AWS Lambda",
        "Serverless Framework",
        "DynamoDB",
        "Event-Driven",
        "Node.js",
      ],
      metrics:
        "65% reduction in infrastructure costs, 80% improved scalability during peak gaming hours, 5-minute deployments (from 45 minutes)",
    },
    {
      title: "Cloud Migration & Containerization",
      description:
        "Migrated MarutiEmpire's PHP application from shared hosting to containerized solution on Google Cloud Run, implementing automated CI/CD pipeline for streamlined deployments",
      tags: ["Docker", "Google Cloud Run", "GitHub Actions", "PHP", "CI/CD"],
      metrics:
        "99.9% uptime achievement, 70% cost reduction from shared hosting, deployment time reduced from hours to 3 minutes",
    },
    {
      title: "RSVP Event Management System (POC)",
      description:
        "Built a serverless RSVP application with secure authentication, email notifications, and theme management capabilities",
      tags: [
        "AWS Lambda",
        "MongoDB",
        "Serverless Framework",
        "JWT",
        "AWS SES",
        "S3",
      ],
      metrics:
        "70% cost reduction vs traditional architecture, Cookie-Based Auth implementation, Optimized cold start latency by 30%",
    },
    {
      title: "Video Streaming Platform (POC)",
      description:
        "Transformed monolithic video platform into microservices architecture enabling scalable video processing and social interactions",
      tags: [
        "Node.js",
        "Golang",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "Microservices",
      ],
      metrics:
        "Enhanced system modularity and maintainability through independent service deployment",
    },
    {
      title: "Study Room Platform (POC)",
      description:
        "Developed collaborative learning platform with real-time interaction features and comprehensive security measures",
      tags: [
        "Django",
        "PostgreSQL",
        "GKE",
        "ArgoCD",
        "Prometheus",
        "Grafana",
        "GitLab CI",
      ],
      metrics:
        "Implemented multi-environment deployment, automated security scanning, and horizontal pod autoscaling",
      link: "https://studyroom.ajayproject.com/",
    },
  ];
  return (
    <div
      id="project"
      className="py-20 px-4 md:px-20 lg:px-32 dark:bg-slate-950 bg-slate-50"
    >
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">
        Featured Projects/ POC
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
                <Link to={project.link || ""} target="_blank">
                  <ExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </Link>
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
