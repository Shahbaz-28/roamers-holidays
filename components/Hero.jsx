import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 relative">
      {/* Airplane image positioned in the top-right corner */}
      <div 
        className="absolute top-10 right-32 w-1/3 h-full bg-no-repeat bg-contain opacity-80"
        style={{ backgroundImage: "url('/images/layer.svg')" }}
      />
      
      {/* <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className="text-xl font-bold">Travlog</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium hover:text-purple-600" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600" href="#">
              Discover
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600" href="#">
              Special Deals
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600" href="#">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
          </div>
        </nav>
      </header> */}
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <span className="text-pink-500 font-bold">Romers Holidays</span>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm">Explore the world!</span>
              <span className="text-pink-500">🌎</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Travel{" "}
                <span className="text-pink-500 font-bold">top destination</span>
                <br />
                of the world
              </h1>
              <p className="text-gray-600 max-w-md">
                We always make our customer happy by providing as many choices as possible
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-contain bg-center bg-no-repeat opacity-10" />
            <div className="relative grid grid-cols-2 ">
              <div className="space-y-4">
                <div className="relative">
                  <Image
                    alt="Travel destination"
                    className="rounded-3xl object-cover"
                    height={250}
                    width={250}
                    src="/images/Rectangle 1.png"
                  />
                  {/* <div className="absolute -right-4 -bottom-4 bg-pink-500 text-white p-2 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
                <Image
                  alt="Travel destination"
                  className="rounded-3xl object-cover"
                  height={250}
                  width={250}
                  src="/images/Rectangle 2.png"
                />
              </div>
              <div className="mt-12">
                <div className="relative">
                  <Image
                    alt="Travel destination"
                    className="rounded-3xl object-cover"
                    height={300}
                    width={300}
                    src="/images/Rectangle 3.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-between items-center gap-8 overflow-hidden">
          <Image
            alt="TripAdvisor"
            className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            height={32}
            src="/placeholder.svg"
            width={120}
          />
          <Image
            alt="Expedia"
            className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            height={32}
            src="/placeholder.svg"
            width={120}
          />
          <Image
            alt="Booking.com"
            className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            height={32}
            src="/placeholder.svg"
            width={120}
          />
          <Image
            alt="Airbnb"
            className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            height={32}
            src="/placeholder.svg"
            width={120}
          />
          <Image
            alt="ORBITZ"
            className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            height={32}
            src="/placeholder.svg"
            width={120}
          />
        </div>
      </main>
    </div>
  );
}
