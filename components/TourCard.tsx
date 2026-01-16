import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-primary-700 font-bold px-4 py-2 rounded-full text-sm shadow-lg">
          From ${tour.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-2">
          <svg
            className="w-4 h-4 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>
            {tour.location}, {tour.country}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
          {tour.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{tour.groupSize}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/tours/${tour.slug}`}
            className="flex-1 text-center py-2.5 px-4 border border-primary-600 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/reservations?tour=${tour.slug}`}
            className="flex-1 text-center py-2.5 px-4 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
