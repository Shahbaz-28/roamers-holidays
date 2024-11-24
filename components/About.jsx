"use client";

import { Users, Rocket, Target, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Great Team Work",
      description:
        "Our passionate team of travel experts works tirelessly to curate unforgettable experiences for every adventurer. We believe in the power of collaboration to bring you the best travel solutions.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Our Vision",
      description:
        "We envision a world where everyone can explore the beauty of our planet, creating lasting memories and fostering cultural understanding. Our goal is to make travel accessible, sustainable, and enriching for all.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Our Mission",
      description:
        "We&apos;re committed to inspiring and empowering travelers by providing exceptional service, innovative travel solutions, and fostering responsible tourism. We're dedicated to creating positive impacts on the communities we visit.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[90vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/AboutBanner.svg"
            alt="Breathtaking mountain landscape with a traveler overlooking a valley"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-[#FCFCD8]">
          <h1 className="text-5xl md:text-7xl font-bold mb-1 animate-fade-in-down">
            About Us
          </h1>
          <p className="f-Nohemi-Light-BF6438cc583f70b text-xl md:text-2xl max-w-2xl mx-auto px-4 mb-8 animate-fade-in-up">
            Your Gateway to Unforgettable Adventures
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-[#30303066] backdrop-blur-lg text-[#FCFCD8] font-bold border-[1px] border-[#FCFCD80F] transition-all duration-300 px-6 rounded-[8px]"
            onClick={() => {
              const featuresSection = document.getElementById("features");
              featuresSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover Our Story
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 poppins-regular">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <Image
                src="/images/founder.svg"
                alt="Happy traveler enjoying a scenic mountain view"
                width={500}
                height={500}
                className="w-full h-[500px] object-cover rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-yellow-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm font-semibold">Happy Travelers</p>
              </div>
            </div>
            <Card className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent>
                <div className="text-6xl text-blue-600 mb-4 transition-transform duration-300 hover:scale-110">
                  &quot;
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 transition-all duration-300 hover:text-gray-800">
                  Roamers Holidays is a travel company that provides Domestic &
                  International customized holiday tour packages, Air tickets,
                  visas, Hotels, Car rental for Corporate & leisure travel
                  management with our 35+ years of experience in the travel and
                  tourism industry. We understand Corporate travel requirements
                  and expectations, as we have 35+ years collective experience
                  of Corporate travel in Domestic as well as International
                  segments. Keeping in mind all the travel regulations,
                  guidelines and requirements, we always serve our clients on
                  high priority with our best knowledge in the industry.
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/images/founder.svg"
                    alt="Siti Sarah"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-600 transition-transform duration-300 hover:scale-105"
                  />
                  <div>
                    <div className="font-bold text-blue-900 text-lg transition-colors duration-300 hover:text-blue-600">
                      Vishal
                    </div>
                    <div className="text-sm text-gray-600">Founder</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
