"use client";
import researchPlot1 from "@/assests/research-plot-1.png";
import researchPlot2 from "@/assests/research-plot-2.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const researchImages = [
    {
      src: researchPlot1,
      alt: "3D Surface Plot - Research Data Visualization",
    },
    {
      src: researchPlot2,
      alt: "Bar Chart - Research Analysis",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {researchImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <Image src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg max-h-96 object-contain" placeholder="blur" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-card/90 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-4 bg-card/90 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
