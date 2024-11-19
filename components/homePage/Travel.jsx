'use client'
import Image from "next/image";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";

export default function Travel() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side with image */}
        <div className="relative">
          <div className="absolute w-[500px] h-[500px] bg-yellow-400 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <Image
              src="/images/travelStat.svg"
              alt="Traveler with backpack"
              width={500}
              height={600}
              className="mx-auto"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute w-6 h-6 bg-purple-500 rounded-full top-20 right-20 animate-bounce" />
          <div className="absolute w-4 h-4 bg-orange-400 rounded-full bottom-20 left-20 animate-bounce delay-100" />
          <div className="absolute w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full top-40 left-20 animate-bounce delay-200" />
          
          {/* Discount badge */}
          <Card className="absolute top-24 right-32 px-4 py-2 bg-white shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm font-medium">Discounted Price</span>
            </div>
          </Card>
        </div>

        {/* Right side content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-900">
              We helping you find your dream location
            </h1>
            <p className=" text-blue-600">
              Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Stats */}
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">
                <CountUp start={0} end={500} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Holiday Package</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">
                <CountUp start={0} end={100} duration={2.5} />
              </h3>
              <p className="text-gray-600">Luxury Hotel</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">
                <CountUp start={0} end={7} duration={2.5} />
              </h3>
              <p className="text-gray-600">Premium Airlines</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">
                <CountUp start={0} end={2000} duration={2.5} />+
              </h3>
              <p className="text-gray-600">Happy Customer</p>
            </div>
          </div>

          {/* Chat button */}
          <div className="absolute bottom-8 right-8 lg:static">
            <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
