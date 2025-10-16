import Navbar from "@/components/Navbar";
import professorPhoto from "@/assets/professor-photo.jpg";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-heading mb-8">About</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="overflow-hidden border-border shadow-md">
                <img
                  src={professorPhoto}
                  alt="Dr. [Professor Name]"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-heading mb-2">
                  Dr. [Professor Name]
                </h2>
                <p className="text-lg font-semibold text-accent mb-1">
                  Associate Professor and Head of the Department
                </p>
                <p className="text-academic-purple font-medium">
                  Department of Mechanical, Materials and Aerospace Engineering
                  (MMAE)
                </p>
                <p className="text-academic-green font-medium">
                  Indian Institute of Technology [Location]
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Experience</h3>

                <ul className="space-y-4 text-text">
                  <li className="border-l-4 border-primary pl-4 py-2">
                    <p className="font-semibold text-heading">
                      Associate Professor and Head of the Department
                    </p>
                    <p className="text-sm text-text-muted">
                      December 2024 to Present
                    </p>
                    <p className="text-sm">
                      Department of Mechanical, Materials and Aerospace
                      Engineering (MMAE), IIT [Location]
                    </p>
                  </li>

                  <li className="border-l-4 border-academic-blue pl-4 py-2">
                    <p className="font-semibold text-heading">
                      Assistant Professor and Head of the Department
                    </p>
                    <p className="text-sm text-text-muted">
                      April 2019 to December 2024
                    </p>
                    <p className="text-sm">
                      Department of Mechanical, Materials and Aerospace
                      Engineering (MMAE), IIT [Location]
                    </p>
                  </li>

                  <li className="border-l-4 border-academic-green pl-4 py-2">
                    <p className="font-semibold text-heading">
                      Postdoctoral Research Associate
                    </p>
                    <p className="text-sm text-text-muted">
                      April 2017 - April 2019
                    </p>
                    <p className="text-sm">
                      Division of Material Science and Engineering (DMSE) &
                      Critical Material Institute (CMI), Ames Laboratory, USDOE,
                      Iowa State University, USA
                    </p>
                  </li>

                  <li className="border-l-4 border-academic-purple pl-4 py-2">
                    <p className="font-semibold text-heading">
                      Postdoctoral Research Fellow & Research Assistant
                    </p>
                    <p className="text-sm text-text-muted">
                      February - July 2016 & July 2016 - April 2017
                    </p>
                    <p className="text-sm">
                      Engineering Product Development (EPD), SUTD Singapore
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
