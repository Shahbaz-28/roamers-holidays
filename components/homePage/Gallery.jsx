"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const destinations = [
  {
    name: "Estaing",
    location: "France",
    image: "/images/place4.jpg",
    description:
      "Medieval charm meets modern comfort in this historic French village.",
    size: "tall",
  },
  {
    name: "Vik",
    location: "Myrda",
    image: "/images/place3.jpg",
    description:
      "Dramatic black sand beaches and stunning coastal views await.",
    size: "medium",
  },
  {
    name: "Hamnoy Village",
    location: "Norway",
    image: "/images/place2.jpg",
    description: "Experience the breathtaking beauty of the Lofoten Islands.",
    size: "medium",
  },
  {
    name: "Montego Bay",
    location: "Jamaica",
    image: "/images/place1.jpg",
    description: "Crystal clear waters and vibrant culture in paradise.",
    size: "wide",
  },
];

export default function DestinationsGallery() {
  const [hoveredDestination, setHoveredDestination] = useState(null);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
        {destinations.map((destination) => (
          <Card
            key={destination.name}
            className={`group relative overflow-hidden transition-transform duration-300 hover:shadow-lg
              ${destination.size === "tall" ? "row-span-2" : ""}
              ${destination.size === "wide" ? "lg:col-span-2" : ""}
            `}
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
                  sizes={
                    destination.size === "wide"
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  priority={destination.size === "tall"}
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
        ))}
      </div>
    </section>
  );
}

