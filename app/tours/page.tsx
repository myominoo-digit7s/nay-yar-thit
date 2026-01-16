import { Metadata } from "next";
import TourCard from "@/components/TourCard";
import SectionHeader from "@/components/SectionHeader";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Explore our curated collection of tours across Myanmar, Thailand, Vietnam, and more. Find your perfect adventure with NAY YAR THIT Travel & Tours.",
  openGraph: {
    title: "Tours | NAY YAR THIT Travel & Tours",
    description:
      "Explore our curated collection of tours across Myanmar, Thailand, Vietnam, and more.",
  },
};

export default function ToursPage() {
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
            Our Tours
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover handcrafted journeys designed to immerse you in the culture,
            history, and natural beauty of Southeast Asia.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline={`${tours.length} Tours Available`}
            title="Choose Your Adventure"
            description="From ancient temples to pristine beaches, we have the perfect tour for every traveler."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            Looking for Something Special?
          </h2>
          <p className="text-neutral-600 mb-8">
            Can&apos;t find the perfect tour? We specialize in creating custom
            itineraries tailored to your interests, timeline, and budget.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-700 transition-colors"
          >
            Request a Custom Tour
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
          </a>
        </div>
      </section>
    </>
  );
}
