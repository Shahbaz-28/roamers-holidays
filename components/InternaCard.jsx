'use client'

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    image: "/images/paris.jpg",
    location: "Tokyo, Japan",
    title: "The Shibuya",
  },
  {
    id: 2,
    image: "/images/singapore.jpg",
    location: "Rome, Italy",
    title: "The Colosseum",
  },
  {
    id: 3,
    image: "/images/taiwan.jpg",
    location: "Capetown, South Africa",
    title: "The Blyde River Canyon",
  },
  {
    id: 4,
    image: "/images/swissalps.jpg",
    location: "Swiss Alps",
    title: "The Colosseum",
  },
  {
    id: 5,
    image: "/images/thailand.jpg",
    location: "Thailand",
    title: "The Colosseum",
  },
];

export default function Component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl bg-blac mx-auto space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-blue-900 tracking-tight text-center">
            Top Locations to Explore
          </h2>
          <p className="text-sm text-muted-foreground text-blue-700 text-center">
            Here are some of the most visited places.
          </p>
        </div>
        <Slider {...settings} className="w-full">
          {destinations.map((destination) => (
            <div key={destination.id} className="p-2">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      {destination.location}
                    </p>
                    <h3 className="font-semibold">{destination.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
