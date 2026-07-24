"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";


interface Seat {
  name: string;
  trade: string;
  founder?: string;
  url?: string;
}

interface ClubGridProps {
  liveSeat: Seat;
  openSeats: Seat[];
}

export function ClubGrid({ openSeats }: ClubGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-fit mx-auto">


      {/* OPEN SEATS */}
      {openSeats.map((seat) => (
        <ScrollReveal key={seat.name} className="h-full">
          <a
            href={seat.url || "#"}
            target="_blank"
            rel="noopener"
            className="p-8 bg-white border border-outline-variant/60 rounded-[32px] shadow-ambient-shadow hover:bg-primary hover:border-secondary/50 hover:shadow-app-glow transition-all group cursor-pointer flex flex-col items-start text-left justify-start h-full"
          >
            <div className="inline-flex px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[9px] font-bold tracking-widest rounded uppercase mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors">
              Seat Open
            </div>
            <div className="relative h-10 w-full mb-3 flex items-center justify-start">
              <Image
                src={`/logos/${seat.name}/${seat.name}-1.png`}
                alt={seat.name}
                width={128}
                height={32}
                className="absolute inset-0 h-full w-full object-contain object-center opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                unoptimized
              />
              <Image
                src={`/logos/${seat.name}/${seat.name}-2.png`}
                alt={`${seat.name} hover`}
                width={128}
                height={32}
                className="absolute inset-0 h-full w-full object-contain object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                unoptimized
              />
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed group-hover:text-white/70 transition-colors mt-auto">
              {seat.trade} &middot; Unclaimed
            </p>
          </a>
        </ScrollReveal>
      ))}

      {/* YOUR SEAT */}
     
    </div>
  );
}
