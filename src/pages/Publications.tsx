import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      title: "Advanced Materials Research in Aerospace Engineering",
      authors: "Author 1, Author 2, Dr. [Professor Name]",
      journal: "International Journal of Engineering",
      year: "2024",
      type: "Journal",
    },
    {
      title: "Computational Analysis of Structural Materials",
      authors: "Dr. [Professor Name], Co-author 1",
      journal: "Materials Science Conference",
      year: "2023",
      type: "Conference",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-heading mb-8">Publications</h1>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="p-6 border-border hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {pub.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-heading mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-text mb-1">{pub.authors}</p>
                    <p className="text-text-muted text-sm mb-2">
                      {pub.journal}
                    </p>
                    <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm rounded-full font-medium">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;
