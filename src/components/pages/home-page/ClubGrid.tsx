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
      {openSeats.map((seat) => {
        const isLive = seat.name === "TreeROI";

        if (isLive) {
          return (
            <a
              key={seat.name}
              href={seat.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-smooth relative flex h-full flex-col items-start overflow-hidden rounded-3xl bg-navy-deep p-6 sm:p-8 text-white shadow-[0_30px_60px_-25px_rgba(15,43,53,0.6)] hover:-translate-y-1 hover:shadow-[0_35px_70px_-25px_rgba(125,194,67,0.35)] cursor-pointer"
            >
              {/* Ambient green glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-green/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
              />

              {/* LIVE badge with pulse */}
              <div className="relative inline-flex items-center gap-2 rounded-full bg-green/15 border border-green/40 px-3 py-1 mb-10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-green font-display">
                  Live
                </span>
              </div>

              {/* Logo */}
              <div className="relative h-10 w-full mb-6">
                <Image
                  src={`/logos/${seat.name}/${seat.name}-2.png`}
                  alt={seat.name}
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>

              {/* Trade + founder */}
              <p className="text-sm font-semibold text-white/75 mt-auto">
                {seat.trade} {seat.founder && `· ${seat.founder}`}
              </p>

              {/* Visit indicator arrow */}
              <span className="absolute top-6 right-6 text-white/40 group-hover:text-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </span>
            </a>
          );
        }

        // Upcoming - ghosted / shadow-only treatment
        return (
          <div
            key={seat.name}
            className="card-smooth relative flex h-full flex-col items-start overflow-hidden rounded-3xl border border-line/60 bg-white p-6 sm:p-8 shadow-[0_4px_20px_-8px_rgba(15,43,53,0.08)] hover:border-line hover:shadow-[0_10px_30px_-15px_rgba(15,43,53,0.12)]"
          >
            {/* Upcoming badge */}
            <div className="inline-flex items-center rounded-full bg-mist border border-line/70 px-3 py-1 mb-10">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-ink-soft/70 font-display">
                Upcoming
              </span>
            </div>

            {/* Logo - muted */}
            <div className="relative h-10 w-full mb-6 opacity-60 grayscale-[15%]">
              <Image
                src={`/logos/${seat.name}/${seat.name}-1.png`}
                alt={seat.name}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>

            {/* Trade */}
            <p className="text-sm font-semibold text-ink-soft/70 mt-auto">
              {seat.trade}
            </p>
          </div>
        );
      })}
    </div>
  );
}
