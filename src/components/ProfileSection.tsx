import professorPhoto from "@/assests/professor-photo.png";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <Card className="overflow-hidden border-border shadow-md">
              <Image src={professorPhoto} alt="Dr. [Professor Name]" className="w-full h-auto object-cover" placeholder="blur" />
            </Card>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold text-heading">
              Dr. [Professor Name]
            </h1>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-heading">
                Head of the Department
              </p>
              <p className="text-lg text-primary font-medium">
                Associate Professor
              </p>
              <p className="font-medium text-text">
                Department of Mechanical, Materials and Aerospace Engineering
                (MMAE)
              </p>
              <p className="text-academic-green font-medium">
                Indian Institute of Technology [Location]
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-text leading-relaxed">
                Welcome to our Research Group in the Department of Mechanical,
                Materials and Aerospace Engineering (MMAE) at IIT [Location].
                This website will be updated from time to time. You may browse
                through the{" "}
                <Link href="/research-group" className="text-primary hover:underline font-medium">research</Link>{" "}
                and{" "}
                <Link href="/publications" className="text-primary hover:underline font-medium">publications</Link>{" "}
                page to know more about research activities.
              </p>

              <Link href="/about" className="inline-block text-primary hover:text-academic-blue font-medium hover:underline transition-colors">Click here to know more →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
