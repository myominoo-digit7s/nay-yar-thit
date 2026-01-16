import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group block">
      <article className="relative h-80 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-primary-900/80 transition-colors duration-300" />

        {/* Featured Badge */}
        {destination.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
            {/* Country Tag */}
            <span className="inline-block text-xs font-medium text-primary-300 uppercase tracking-wider mb-2">
              {destination.country}
            </span>

            {/* Destination Name */}
            <h3 className="text-2xl font-bold text-white mb-2">
              {destination.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-white/80 mb-4 line-clamp-2">
              {destination.tagline}
            </p>

            {/* Explore Button - Hidden by default, shows on hover */}
            <div className="flex items-center gap-2 text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium">Explore</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
