import React from "react";
import Image from "next/image";
import DomesticCard from "../../components/homePage/DomesticCard";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Photo */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/tajmahal.jpg"
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
            Incredible India Awaits!{" "}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-2">
        <DomesticCard />
      </div>
    </div>
  );
};

export default Page;
