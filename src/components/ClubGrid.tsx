"use client";

import Image from "next/image";

interface Seat {
  name: string;
  trade: string;
  founder?: string;
  url?: string;
}

interface ClubGridProps {
  openSeats: Seat[];
}

export function ClubGrid({ openSeats }: ClubGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
      {/* OPEN SEATS */}
      {openSeats.map((seat) => (
        <a
          key={seat.name}
          href={seat.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-line rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-green/50 hover:bg-navy transition-all duration-300 group flex flex-col items-start h-full relative overflow-hidden"
        >
          {/* Decorative hover background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
          
          <div className="inline-flex px-3 py-1 bg-mist text-navy text-[10px] font-bold tracking-widest rounded-full uppercase mb-10 group-hover:bg-white/10 group-hover:text-white transition-colors">
            Seat Open
          </div>
          
          <div className="relative h-10 w-full mb-6">
            <Image
              src={`/logos/${seat.name}/${seat.name}-1.png`}
              alt={seat.name}
              fill
              className="object-contain object-left opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              unoptimized
            />
            <Image
              src={`/logos/${seat.name}/${seat.name}-2.png`}
              alt={`${seat.name} hover`}
              fill
              className="object-contain object-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              unoptimized
            />
          </div>
          
          <p className="text-sm font-medium text-ink-soft mt-auto group-hover:text-white/70 transition-colors">
            {seat.trade} &middot; Unclaimed
          </p>
        </a>
      ))}
    </div>
  );
}
