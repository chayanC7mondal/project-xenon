import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function TeachingPage() {
  const courses = [
    { code: "ME 501", title: "Advanced Materials Engineering", level: "Postgraduate", semester: "Autumn 2024" },
    { code: "ME 301", title: "Mechanics of Materials", level: "Undergraduate", semester: "Spring 2024" },
    { code: "ME 701", title: "Computational Methods in Engineering", level: "Postgraduate", semester: "Autumn 2023" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-heading mb-8">Teaching</h1>

          <div className="space-y-4">
            {courses.map((course, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-md font-semibold text-sm">{course.code}</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">{course.level}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-1">{course.title}</h3>
                    <p className="text-text-muted">{course.semester}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
