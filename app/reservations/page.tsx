import { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Tour",
  description:
    "Make a reservation with NAY YAR THIT Travel & Tours. Book your dream trip to Myanmar, Thailand, Vietnam, and beyond.",
  openGraph: {
    title: "Book Your Tour | NAY YAR THIT Travel & Tours",
    description:
      "Make a reservation for your next adventure in Southeast Asia.",
  },
};

function BookingFormWrapper({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
  // Use React.use() pattern for async data in client components
  return (
    <Suspense fallback={<div className="animate-pulse bg-neutral-100 h-96 rounded-2xl" />}>
      <BookingFormAsync searchParams={searchParams} />
    </Suspense>
  );
}

async function BookingFormAsync({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
  const resolvedParams = await searchParams;
  return <BookingForm preselectedTour={resolvedParams.tour} />;
}

export default async function ReservationsPage({
  searchParams,
}: {
  searchParams: Promise<{ tour?: string }>;
}) {
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
            Book Your Trip
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Start your adventure today. Fill out the form below and our travel
            experts will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                  Booking Request Form
                </h2>
                <BookingFormWrapper searchParams={searchParams} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-neutral-600 text-sm mb-6">
                    Our travel experts are here to assist you with any questions
                    about your booking.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+959975399383"
                      className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Call Us</div>
                        <div className="font-medium">+95 9975399383</div>
                      </div>
                    </a>
                    <a
                      href="mailto:nayyarthitfuture@gmail.com"
                      className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Email Us</div>
                        <div className="font-medium text-sm">
                          nayyarthitfuture@gmail.com
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-neutral-800 mb-4">
                    Book with Confidence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary-600 shrink-0"
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
                      <div>
                        <div className="font-medium text-neutral-800">
                          Secure Booking
                        </div>
                        <div className="text-sm text-neutral-600">
                          Your information is protected
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary-600 shrink-0"
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
                        <div className="font-medium text-neutral-800">
                          Best Price Guarantee
                        </div>
                        <div className="text-sm text-neutral-600">
                          No hidden fees or surprises
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary-600 shrink-0"
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
                        <div className="font-medium text-neutral-800">
                          Flexible Cancellation
                        </div>
                        <div className="text-sm text-neutral-600">
                          Free cancellation with 48h notice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-accent-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">
                    24h
                  </div>
                  <div className="text-neutral-700 font-medium">
                    Average Response Time
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">
                    We&apos;ll get back to you quickly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
