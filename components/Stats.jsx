'use client'
import { Users, User, Mountain, Medal } from 'lucide-react';
import Image from "next/image";
import CountUp from 'react-countup';

export default function Stats() {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/stats.svg"
        alt="Mountain landscape with travelers"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Stats Container */}
      <div className="relative h-full max-w-6xl mx-auto px-4">
        <div className="h-full flex items-center justify-between gap-4">
          {/* Satisfied Clients */}
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-8 w-8 text-white mb-2" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              <CountUp start={0} end={126} duration={2.5} />+
            </p>
            <p className="text-sm text-white/90">Satisfied Client</p>
          </div>

          {/* New Traveller */}
          <div className="text-center">
            <div className="flex justify-center">
              <User className="h-8 w-8 text-white mb-2" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              <CountUp start={0} end={230} duration={2.5} />
            </p>
            <p className="text-sm text-white/90">New Traveller</p>
          </div>

          {/* Destination */}
          <div className="text-center">
            <div className="flex justify-center">
              <Mountain className="h-8 w-8 text-white mb-2" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              <CountUp start={0} end={230} duration={2.5} />+
            </p>
            <p className="text-sm text-white/90">Destination</p>
          </div>

          {/* Award */}
          <div className="text-center">
            <div className="flex justify-center">
              <Medal className="h-8 w-8 text-white mb-2" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
              <CountUp start={0} end={230} duration={2.5} />+
            </p>
            <p className="text-sm text-white/90">Award</p>
          </div>
        </div>
      </div>
    </div>
  );
}
