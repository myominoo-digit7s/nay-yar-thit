import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/data/tours";
import CTABanner from "@/components/CTABanner";

interface TourDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const tour = getTourBySlug(resolvedParams.slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: tour.name,
    description: tour.shortDescription,
    openGraph: {
      title: `${tour.name} | NAY YAR THIT Travel & Tours`,
      description: tour.shortDescription,
      images: [{ url: tour.image, width: 1200, height: 630, alt: tour.name }],
    },
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const resolvedParams = await params;
  const tour = getTourBySlug(resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary-300 text-sm mb-3">
                <Link href="/tours" className="hover:text-white transition-colors">
                  Tours
                </Link>
                <span>/</span>
                <span>{tour.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {tour.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-400"
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
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-400"
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
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-400"
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
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                  About This Tour
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 border-primary-200 last:border-l-transparent"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary-500 border-4 border-white shadow" />
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                        <div className="text-sm font-semibold text-primary-600 mb-1">
                          Day {day.day}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-800 mb-2">
                          {day.title}
                        </h3>
                        <p className="text-neutral-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-neutral-600"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    What&apos;s Not Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.exclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-neutral-600"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-neutral-100 p-6">
                {/* Price */}
                <div className="text-center pb-6 border-b border-neutral-100">
                  <div className="text-sm text-neutral-500 mb-1">From</div>
                  <div className="text-4xl font-bold text-primary-600">
                    ${tour.price}
                  </div>
                  <div className="text-neutral-500">per person</div>
                </div>

                {/* Quick Info */}
                <div className="py-6 space-y-4 border-b border-neutral-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Duration</span>
                    <span className="font-medium text-neutral-800">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Difficulty</span>
                    <span className="font-medium text-neutral-800">
                      {tour.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Group Size</span>
                    <span className="font-medium text-neutral-800">
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Best Time</span>
                    <span className="font-medium text-neutral-800">
                      {tour.bestTime}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-6 space-y-3">
                  <Link
                    href={`/reservations?tour=${tour.slug}`}
                    className="block w-full text-center bg-primary-600 text-white font-semibold py-4 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    Book This Tour
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center border border-primary-600 text-primary-600 font-semibold py-4 rounded-full hover:bg-primary-50 transition-colors"
                  >
                    Ask a Question
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Best Price Guarantee
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600 mt-3">
                    <svg
                      className="w-5 h-5 text-green-500"
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
                    Free Cancellation (48h notice)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Experience This Tour?"
        subtitle="Book now and create memories that will last a lifetime."
        primaryButtonText="Book Now"
        primaryButtonHref={`/reservations?tour=${tour.slug}`}
      />
    </>
  );
}
