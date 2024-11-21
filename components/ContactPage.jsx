import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="container mt-10 mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        We`&lsquo;`re here to help plan your perfect adventure. Reach out to us through any of the methods below, and we`&lsquo;`ll get back to you as soon as possible!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>91-8108993222</span>
              <span>+91-8976116296</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <span>roamersholidays@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5" />
              <span>Office: 003, Bldg No. 06, Gurusadan Comlplex, Shivaji Chowk, Badalapur East - 421503</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Quick Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="h-8 w-8 text-green-500" /> {/* WhatsApp icon from react-icons */}
              <div>
                <h3 className="font-semibold">WhatsApp Us</h3>
                <p className="text-sm text-muted-foreground">Scan the QR code or click to chat</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/scan.png"
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="border-2 border-primary rounded-lg hover:border-green-500 transition-colors"
              />
            </div>
            <a 
              href="https://wa.link/tq7r6i" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </CardContent>
        </Card>
      </div>
      
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Our Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Map of our location"
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity"
            />
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            Visit us at our office to discuss your travel plans in person!
          </p>
        </CardContent>
      </Card> */}
    </div>
  )
}
