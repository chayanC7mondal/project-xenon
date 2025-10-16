import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-heading mb-8">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold text-heading mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading mb-1">Email</p>
                    <a href="mailto:professor@iit.ac.in" className="text-primary hover:underline">professor@iit.ac.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading mb-1">Phone</p>
                    <a href="tel:+911234567890" className="text-text">+91 (123) 456-7890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading mb-1">Department</p>
                    <p className="text-text">Mechanical, Materials and Aerospace Engineering (MMAE)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading mb-1">Address</p>
                    <p className="text-text">Indian Institute of Technology<br />[Location]<br />India</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold text-heading mb-6">Office Hours</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-heading">Monday - Friday</p>
                  <p className="text-text">10:00 AM - 5:00 PM</p>
                </div>

                <div className="border-l-4 border-academic-green pl-4 py-2">
                  <p className="font-semibold text-heading">Consultation Hours</p>
                  <p className="text-text">Tuesday & Thursday</p>
                  <p className="text-text">2:00 PM - 4:00 PM</p>
                  <p className="text-sm text-text-muted mt-1">By appointment only</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-text">For research collaborations or academic inquiries, please send an email with your detailed proposal or questions.</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}


