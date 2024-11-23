'use client'
import "@fontsource/poppins"; // Defaults to weight 400
import Image from "next/image"
import CountUp from "react-countup"

export default function Travel() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 border border-[#3030304D] rounded-lg shadow-sm my-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side with image */}
        <div className="relative mx-auto max-w-md lg:max-w-full transition-transform duration-300 hover:scale-105">
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-yellow-400 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <Image
              src="/images/travelStat.svg"
              alt="Traveler with backpack"
              width={500}
              loading="lazy"
              height={600}
              className="mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full top-10 right-10 sm:top-20 sm:right-20 animate-bounce" />
          <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full bottom-10 left-10 sm:bottom-20 sm:left-20 animate-bounce delay-100" />
          <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full top-20 left-10 sm:top-40 sm:left-20 animate-bounce delay-200" />

          {/* Discount badge */}
          {/* <Card className="absolute top-12 right-16 sm:top-24 sm:right-32 px-3 py-1 sm:px-4 sm:py-2 bg-white shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full" />
              <span className="text-xs sm:text-sm font-medium">Discounted Price</span>
            </div>
          </Card> */}
        </div>

        {/* Right side content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-sky-900 leading-tight">
              We re helping you find your dream destination
            </h1>
            <p className="f-Nohemi-Light-BF6438cc583f70b text-sm sm:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 !leading-[22px]">
              Discover your perfect getaway with our curated selection of holiday packages, luxury hotels, and premium airlines. Let us guide you to unforgettable experiences around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 bg-gray-50 p-4 sm:p-6 rounded-lg">
            {/* Stats */}
            <div className="space-y-1 sm:space-y-2 bg-white p-3 rounded-md shadow-sm">
              <h3 className="f-Nohemi-Light-BF6438cc583f70b text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                <CountUp start={0} end={500} duration={2.5} />+
              </h3>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-xs sm:text-sm text-gray-600">Holiday Package</p>
            </div>
            <div className="space-y-1 sm:space-y-2 bg-white p-3 rounded-md shadow-sm">
              <h3 className="f-Nohemi-Light-BF6438cc583f70b text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                <CountUp start={0} end={100} duration={2.5} />
              </h3>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-xs sm:text-sm text-gray-600">Luxury Hotel</p>
            </div>
            <div className="space-y-1 sm:space-y-2 bg-white p-3 rounded-md shadow-sm">
              <h3 className="f-Nohemi-Light-BF6438cc583f70b text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                <CountUp start={0} end={7} duration={2.5} />
              </h3>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-xs sm:text-sm text-gray-600">Premium Airlines</p>
            </div>
            <div className="space-y-1 sm:space-y-2 bg-white p-3 rounded-md shadow-sm">
              <h3 className="f-Nohemi-Light-BF6438cc583f70b text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                <CountUp start={0} end={2000} duration={2.5} />+
              </h3>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-xs sm:text-sm text-gray-600">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat button */}
      {/* <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <button
          className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors group relative"
          aria-label="Chat with us"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
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
          <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs py-1 px-2 rounded">
            Chat with us
          </span>
        </button>
      </div> */}
    </div>
  )
}