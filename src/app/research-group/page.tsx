import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ResearchGroup = () => {
  const postdocs = [
    { name: "Dr. Harshal Kulkarni", position: "Post Doctoral Fellow" }
  ];

  const phdStudents = [
    { name: "Vinayaka Bodur", initials: "VB" },
    { name: "Student Name 2", initials: "SN" },
    { name: "Student Name 3", initials: "SN" },
    { name: "Student Name 4", initials: "SN" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-heading mb-8">Research Group</h1>
            
            <Card className="p-8 border-border mb-8">
              <h2 className="text-2xl font-bold text-heading mb-4">Group Overview</h2>
              <p className="text-text leading-relaxed mb-4">
                Our research group focuses on advanced materials engineering, computational mechanics, and aerospace applications. 
                We work on cutting-edge problems in material science and mechanical engineering.
              </p>
              <p className="text-text leading-relaxed">
                The group consists of dedicated postdoctoral researchers and PhD students working on various funded projects 
                and collaborating with national and international research institutions.
              </p>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Post Doctoral Fellows</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postdocs.map((person, index) => (
                <Card key={index} className="p-6 border-border text-center hover:shadow-md transition-shadow">
                  <Avatar className="w-24 h-24 mx-auto mb-4 bg-academic-blue text-primary-foreground">
                    <AvatarFallback className="text-lg font-semibold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-heading mb-1">{person.name}</h3>
                  <p className="text-sm text-text-muted">{person.position}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">PhD Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phdStudents.map((student, index) => (
                <Card key={index} className="p-6 border-border text-center hover:shadow-md transition-shadow">
                  <Avatar className="w-20 h-20 mx-auto mb-3 bg-academic-green text-primary-foreground">
                    <AvatarFallback className="text-base font-semibold">
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-semibold text-heading">{student.name}</h3>
                  <p className="text-sm text-text-muted">PhD Candidate</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchGroup;
