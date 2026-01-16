import { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NAY YAR THIT FUTURE COMPANY LIMITED - your trusted partner for travel and tour services in Myanmar and beyond.",
  openGraph: {
    title: "About Us | NAY YAR THIT Travel & Tours",
    description:
      "Your trusted partner for travel and tour services in Myanmar and beyond.",
  },
};

const values = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Passion for Travel",
    description:
      "We believe travel transforms lives. Every journey we craft is designed to inspire, educate, and create lasting memories.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Trust & Integrity",
    description:
      "Transparency and honesty are at the core of everything we do. We build lasting relationships based on trust.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Local Expertise",
    description:
      "Our team of local experts brings authentic insights and connections that make your journey truly special.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Sustainable Tourism",
    description:
      "We're committed to responsible travel that respects local cultures, supports communities, and protects the environment.",
  },
];

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner for unforgettable journeys across Myanmar and
            Southeast Asia.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                NAY YAR THIT FUTURE COMPANY LIMITED
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Based in Tachileik, Shan State, Myanmar, NAY YAR THIT FUTURE
                  COMPANY LIMITED is a fully licensed travel agency and tour
                  operator dedicated to showcasing the wonders of Myanmar and
                  Southeast Asia to travelers from around the world.
                </p>
                <p>
                  Our name &quot;Nay Yar Thit&quot; embodies our vision of creating new
                  horizons in travel. We specialize in crafting authentic,
                  immersive experiences that go beyond typical tourism to reveal
                  the true heart and soul of our destinations.
                </p>
                <p>
                  From the ancient temples of Bagan to the serene waters of Inle
                  Lake, from the bustling streets of Yangon to the pristine
                  beaches of Ngapali, we offer comprehensive travel services
                  including tour operations, reservations, and customized
                  itineraries.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Bagan temples at sunrise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-600">
                To provide exceptional travel experiences that connect travelers
                with the authentic beauty, culture, and people of Myanmar and
                Southeast Asia, while promoting sustainable tourism practices
                that benefit local communities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <div className="w-14 h-14 rounded-2xl bg-accent-100 text-accent-600 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-600">
                To become the most trusted and respected travel company in
                Myanmar, known for our expertise, reliability, and commitment to
                creating meaningful travel experiences that transform lives and
                foster cross-cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the experiences
              we create for our travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-primary-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-primary-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
              The NAY YAR THIT Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Travel With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-neutral-700 rounded-2xl hover:border-primary-500 transition-colors">
              <div className="text-5xl font-bold text-primary-400 mb-4">100%</div>
              <div className="text-lg font-semibold mb-2">Licensed & Insured</div>
              <p className="text-neutral-400 text-sm">
                Fully licensed by Myanmar tourism authorities with comprehensive
                travel insurance coverage.
              </p>
            </div>
            <div className="text-center p-8 border border-neutral-700 rounded-2xl hover:border-primary-500 transition-colors">
              <div className="text-5xl font-bold text-primary-400 mb-4">24/7</div>
              <div className="text-lg font-semibold mb-2">Support Available</div>
              <p className="text-neutral-400 text-sm">
                Round-the-clock assistance throughout your journey for complete
                peace of mind.
              </p>
            </div>
            <div className="text-center p-8 border border-neutral-700 rounded-2xl hover:border-primary-500 transition-colors">
              <div className="text-5xl font-bold text-primary-400 mb-4">5★</div>
              <div className="text-lg font-semibold mb-2">Quality Service</div>
              <p className="text-neutral-400 text-sm">
                Committed to excellence in every detail, from planning to
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Start Your Journey?"
        subtitle="Let us help you create unforgettable memories in Myanmar and beyond."
      />
    </>
  );
}
