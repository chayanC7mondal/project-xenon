import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Advanced Materials for Aerospace Applications",
      description:
        "Research on high-performance materials for aerospace engineering applications.",
      status: "Ongoing",
      funding: "Department of Science and Technology",
    },
    {
      title: "Computational Modeling of Material Properties",
      description:
        "Development of computational models for predicting material behavior under extreme conditions.",
      status: "Completed",
      funding: "IIT Research Grant",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-heading mb-8">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-heading mb-3">
                  {project.title}
                </h3>
                <p className="text-text mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-text-muted">
                      Status:
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Ongoing"
                          ? "bg-academic-green/10 text-academic-green"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    <span className="font-medium">Funding:</span>{" "}
                    {project.funding}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
