import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="container mt-10 mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0c4a6e]">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We&apos;re here to help plan your perfect adventure. Reach out to us through any of the methods below, and we&apos;ll get back to you as soon as possible!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-[#0c4a6e] border-2 text-[#0c4a6e]">
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0c4a6e] rounded-full p-2 hover:bg-[#7dd3fc] transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0c4a6e] rounded-full p-2 hover:bg-[#7dd3fc] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0c4a6e] rounded-full p-2 hover:bg-[#7dd3fc] transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-[#0c4a6e] border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-[#0c4a6e]">Quick Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-[#0c4a6e]">WhatsApp Us</h3>
                <p className="text-sm text-gray-600">Scan the QR code or click to chat</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/scan.png"
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="border-2 border-[#0c4a6e] rounded-lg hover:border-green-500 transition-colors"
              />
            </div>
            <a 
              href="https://wa.link/tq7r6i" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center bg-[#0c4a6e] text-white py-2 rounded-md hover:bg-[#7dd3fc] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

