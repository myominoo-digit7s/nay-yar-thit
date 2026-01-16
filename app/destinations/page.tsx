import { Metadata } from "next";
import DestinationCard from "@/components/DestinationCard";
import SectionHeader from "@/components/SectionHeader";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our featured destinations across Myanmar, Thailand, Vietnam, and beyond. Discover ancient temples, pristine beaches, and vibrant cultures.",
  openGraph: {
    title: "Destinations | NAY YAR THIT Travel & Tours",
    description:
      "Explore our featured destinations across Myanmar, Thailand, Vietnam, and beyond.",
  },
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From the ancient temples of Bagan to the emerald waters of Ha Long Bay,
            discover Southeast Asia&apos;s most captivating destinations.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline={`${destinations.length} Destinations`}
            title="Where Will You Go?"
            description="Each destination offers unique experiences, from cultural immersion to natural wonders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Explore Our Regions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              We specialize in Myanmar and the Greater Mekong Subregion, offering
              authentic experiences in some of Asia&apos;s most culturally rich and
              naturally diverse destinations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Myanmar
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Thailand
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Vietnam
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Laos
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Cambodia
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
