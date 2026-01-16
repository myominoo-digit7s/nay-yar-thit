import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { tours } from "@/data/tours";
import TourCard from "@/components/TourCard";
import CTABanner from "@/components/CTABanner";

interface DestinationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const destination = getDestinationBySlug(resolvedParams.slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: destination.name,
    description: destination.tagline,
    openGraph: {
      title: `${destination.name} | NAY YAR THIT Travel & Tours`,
      description: destination.tagline,
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const resolvedParams = await params;
  const destination = getDestinationBySlug(resolvedParams.slug);

  if (!destination) {
    notFound();
  }

  // Get related tours
  const relatedTours = tours.filter((tour) =>
    destination.relatedTourSlugs.includes(tour.slug)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={destination.image}
          alt={destination.name}
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
                <Link
                  href="/destinations"
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </Link>
                <span>/</span>
                <span>{destination.country}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              <p className="text-xl text-white/90">{destination.tagline}</p>
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
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                  About {destination.name}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl"
                    >
                      <svg
                        className="w-6 h-6 text-primary-500 shrink-0"
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
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tours */}
              {relatedTours.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                    Tours in {destination.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedTours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-neutral-100 p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-6">
                  Quick Facts
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="text-sm text-neutral-500">
                        Best Time to Visit
                      </div>
                      <div className="font-medium text-neutral-800">
                        {destination.bestTimeToVisit}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    <div>
                      <div className="text-sm text-neutral-500">Weather</div>
                      <div className="font-medium text-neutral-800">
                        {destination.weather}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <div className="text-sm text-neutral-500">Currency</div>
                      <div className="font-medium text-neutral-800">
                        {destination.currency}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    <div>
                      <div className="text-sm text-neutral-500">Language</div>
                      <div className="font-medium text-neutral-800">
                        {destination.language}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
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
                    <div>
                      <div className="text-sm text-neutral-500">Timezone</div>
                      <div className="font-medium text-neutral-800">
                        {destination.timezone}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div>
                      <div className="text-sm text-neutral-500">Visa Info</div>
                      <div className="font-medium text-neutral-800 text-sm">
                        {destination.visaInfo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                  <Link
                    href="/tours"
                    className="block w-full text-center bg-primary-600 text-white font-semibold py-4 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    Browse Tours
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center border border-primary-600 text-primary-600 font-semibold py-4 rounded-full hover:bg-primary-50 transition-colors"
                  >
                    Plan Custom Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`Ready to Visit ${destination.name}?`}
        subtitle="Let our travel experts help you plan the perfect journey."
      />
    </>
  );
}
