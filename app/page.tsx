import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TourCard from "@/components/TourCard";
import DestinationCard from "@/components/DestinationCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { getFeaturedTours } from "@/data/tours";
import { getFeaturedDestinations } from "@/data/destinations";

export default function HomePage() {
  const featuredTours = getFeaturedTours();
  const featuredDestinations = getFeaturedDestinations();

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Tours Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Explore Our Tours"
            title="Popular Tour Packages"
            description="Discover our most sought-after journeys, carefully crafted to provide unforgettable experiences in Myanmar and beyond."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.slice(0, 6).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Tours
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Destinations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Destinations"
            title="Featured Destinations"
            description="From ancient temples to pristine beaches, explore the diverse wonders of Southeast Asia with our expert guides."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Explore All Destinations
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Stats Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                500+
              </div>
              <div className="text-neutral-400 text-sm">Happy Travelers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                50+
              </div>
              <div className="text-neutral-400 text-sm">Tour Packages</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                10+
              </div>
              <div className="text-neutral-400 text-sm">Destinations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                24/7
              </div>
              <div className="text-neutral-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
