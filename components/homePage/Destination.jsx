import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, MapPin, Plane, Calendar } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    name: "Paris",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Experience the romance and charm of the City of Light.",
    rating: 4.8,
  },
  {
    name: "Swiss Alps",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Discover breathtaking mountain views and pristine nature.",
    rating: 4.9,
  },
  {
    name: "Thailand",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Explore exotic beaches and vibrant cultural experiences.",
    rating: 4.7,
  },
  {
    name: "Taiwan",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Immerse yourself in a blend of modern cities and natural wonders.",
    rating: 4.6,
  },
  {
    name: "Indonesia",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Discover diverse islands, rich culture, and stunning landscapes.",
    rating: 4.8,
  },
  {
    name: "Singapore",
    image: "/images/Rectangle 2.png",
    price: 299.0,
    description: "Experience a futuristic city-state with incredible attractions.",
    rating: 4.9,
  },
]

export default function Destinations() {
  return (
    <div className="px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-900 mb-4 md:mb-0">Discover Your Next Adventure</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <Card
            key={index}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative overflow-hidden">
              <Image
                src={destination.image}
                alt={`Scenic view of ${destination.name}`}
                width={400}
                height={224}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium mb-1 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Available all year
                </p>
                <p className="text-sm font-medium flex items-center">
                  <Plane className="w-4 h-4 mr-1" />
                  Flight included
                </p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-sky-900 group-hover:text-sky-700 transition-colors duration-300">
                  {destination.name}
                </h2>
                <div className="flex items-center bg-sky-100 rounded-full px-2 py-1">
                  <MapPin className="w-4 h-4 text-sky-700 mr-1" />
                  <span className="text-sm font-medium text-sky-900">{destination.name}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {destination.description}
              </p>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-sky-50 flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(destination.rating) ? "text-amber-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-sky-900">{destination.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-sky-900 mr-2">
                  ${destination.price.toFixed(2)}
                  <span className="text-sm text-gray-600 ml-1">/3days</span>
                </p>
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white transition-colors">
                  Book Now
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
