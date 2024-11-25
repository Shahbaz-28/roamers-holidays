"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Estaing",
    location: "France",
    image: "/images/place4.jpg",
    description:
      "Medieval charm meets modern comfort in this historic French village.",
  },
  {
    name: "Vik",
    location: "Myrda",
    image: "/images/place3.jpg",
    description:
      "Dramatic black sand beaches and stunning coastal views await.",
  },
  {
    name: "Hamnoy Village",
    location: "Norway",
    image: "/images/place2.jpg",
    description: "Experience the breathtaking beauty of the Lofoten Islands.",
  },
  {
    name: "Montego Bay",
    location: "Jamaica",
    image: "/images/place1.jpg",
    description: "Crystal clear waters and vibrant culture in paradise.",
  },
];

export default function DestinationsSlider() {
  const [hoveredDestination, setHoveredDestination] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const autoScroll = () => emblaApi.scrollNext();
    const interval = setInterval(autoScroll, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount or when hovered
  }, [emblaApi, isHovered]);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-sky-900 leading-tight">
          Making Every Trip a Happy Story!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          Your peace of mind doesn&apos;t have to be tied to where everyone else is.
          We offer a wide range of travel and relocation destinations. Take your
          time to find the one that&apos;s perfect for you.
        </p>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {destinations.map((destination) => (
              <div key={destination.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                <Card
                  className="group relative overflow-hidden transition-transform duration-300 hover:shadow-lg h-[300px] sm:h-[400px]"
                  onMouseEnter={() => setHoveredDestination(destination.name)}
                  onMouseLeave={() => setHoveredDestination(null)}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full w-full">
                      <Image
                        src={destination.image}
                        alt={`Scenic view of ${destination.name}, ${destination.location}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <div className={`transform transition-all duration-300 ${
                          hoveredDestination === destination.name ? 'translate-y-0' : 'translate-y-8'
                        }`}>
                          <h3 className="text-2xl font-bold mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-sm text-white/80 mb-2">
                            {destination.location}
                          </p>
                          <p className={`text-sm line-clamp-3 transition-opacity duration-300 ${
                            hoveredDestination === destination.name ? 'opacity-100' : 'opacity-0'
                          }`}>
                            {destination.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10"
          onClick={scrollPrev}
          aria-label="Previous destination"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10"
          onClick={scrollNext}
          aria-label="Next destination"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

