"use client";

import { useState, useEffect } from "react";
import { Users, User, Mountain, Medal } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";

const statsData = [
  { icon: Users, label: "Satisfied Clients", value: 126, suffix: "+" },
  { icon: User, label: "New Travellers", value: 230 },
  { icon: Mountain, label: "Destinations", value: 230, suffix: "+" },
  { icon: Medal, label: "Awards", value: 230, suffix: "+" },
];

const StatItem = ({ Icon, value, label, suffix }) => (
  <div className="text-center">
    <div className="flex justify-center">
      <Icon className="h-8 w-8 text-white mb-2" />
    </div>
    <p className="text-3xl font-bold text-white mb-1">
      <CountUp start={0} end={value} duration={2.5} useEasing />{suffix}
    </p>
    <p className="text-sm text-white/90">{label}</p>
  </div>
);

export default function Stats() {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (!hasRendered) {
      setHasRendered(true); // Ensure counters run only once
    }
  }, [hasRendered]);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/stats.svg"
        alt="A scenic view of mountains and travelers"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Stats Container */}
      <div className="relative h-full max-w-6xl mx-auto px-4">
        <div className="h-full flex items-center justify-between gap-4">
          {hasRendered &&
            statsData.map(({ icon: Icon, label, value, suffix }, index) => (
              <StatItem
                key={index}
                Icon={Icon}
                label={label}
                value={value}
                suffix={suffix}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
