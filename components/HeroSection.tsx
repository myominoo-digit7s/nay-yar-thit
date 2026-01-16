import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  size?: "full" | "large" | "medium";
}

export default function HeroSection({
  title = "Explore Myanmar & Beyond with Confidence",
  subtitle = "Trusted Travel & Tour Services",
  tagline = "NAY YAR THIT FUTURE COMPANY LIMITED",
  primaryCTA = { text: "Book Your Trip", href: "/reservations" },
  secondaryCTA = { text: "View Tours", href: "/tours" },
  backgroundImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
  overlay = true,
  size = "full",
}: HeroSectionProps) {
  const sizeClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  return (
    <section className={`relative ${sizeClasses[size]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary-300 mb-6 border border-white/20">
            {tagline}
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            {primaryCTA.text}
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
          <Link
            href={secondaryCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            {secondaryCTA.text}
          </Link>
        </div>

        {/* Scroll Indicator */}
        {size === "full" && (
          <div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
