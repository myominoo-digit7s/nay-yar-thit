'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SoftwarePortfolio from './corporate/SoftwarePortfolio';
import {
  Plane,
  Code,
  Film,
  Briefcase,
  Check,
  Heart,
  Shield,
  Zap
} from 'lucide-react';

// --- Sub-components for easy extraction later ---



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

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
            Nay Yar Thit Future Company Limited
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          A Multi-Faceted Holding Company for the Future
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          We innovate and lead across diverse industries, from premium travel and tourism to cutting-edge software development and media entertainment.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Explore Our Ventures
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
            href="#who-we-are"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-slate-900">5+</p>
            <p className="text-sm text-slate-500 mt-1">Years of Excellence</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">50+</p>
            <p className="text-sm text-slate-500 mt-1">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">10k+</p>
            <p className="text-sm text-slate-500 mt-1">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">3</p>
            <p className="text-sm text-slate-500 mt-1">Core Industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionLayout = ({
  id,
  title,
  tagline,
  description,
  icon,
  reverse = false,
  gradient,
  features = [],
  imageUrl
}: {
  id: string,
  title: string,
  tagline: string,
  description: string,
  icon: React.ReactNode,
  reverse?: boolean,
  gradient: string,
  features?: string[],
  imageUrl?: string
}) => {
  return (
    <section id={id} className="py-24 border-b border-slate-50 last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>

          {/* Content Column */}
          <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider">
              {tagline}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                  {icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {description}
              </p>

              {/* Feature List */}
              {features.length > 0 && (
                <ul className="space-y-3 pt-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full mt-1">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Visual Placeholder Column */}
          <div className={`${reverse ? 'lg:order-1' : ''}`}>
            <div className={`aspect-[4/3] w-full ${gradient} rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden transition-transform hover:scale-[1.01] duration-300 relative`}>
              {imageUrl ? (
                <Image src={imageUrl} alt={title} fill className="object-cover" />
              ) : (
                <div className="text-center space-y-3 p-8">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-400 mx-auto shadow-sm">
                    {icon}
                  </div>
                  <p className="text-sm font-medium text-slate-500">Visual Placeholder</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      icon: <Heart className="text-slate-700" size={24} />,
      title: 'Customer Centric',
      description: 'We prioritize the needs of our clients and customers above everything else.'
    },
    {
      icon: <Shield className="text-slate-700" size={24} />,
      title: 'Integrity & Trust',
      description: 'We operate with the highest standards of integrity and transparency.'
    },
    {
      icon: <Zap className="text-slate-700" size={24} />,
      title: 'Innovation',
      description: 'We constantly look for new ways to innovate and improve our services.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600">
            The principles that guide our business operations and relationships every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function CorporateLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      <Hero />
      <Stats />

      {/* Zig-Zag Sections */}
      <div id="services">
        <SectionLayout
          id="who-we-are"
          tagline="About Us"
          title="Who We Are?"
          description="Nay Yar Thit is a dynamic holding company committed to excellence across multiple verticals. We combine strategic vision with operational expertise to build and grow businesses that make a lasting impact in the region. Our core mission is to drive innovation and create value in every sector we operate."
          icon={<Briefcase size={20} />}
          gradient="bg-gradient-to-br from-slate-50 to-slate-100"
          imageUrl="/images/corporate/who-are-we.jpg"
          features={[
            'Strategic investments in high-growth sectors',
            'Dedicated team of industry experts',
            'Commitment to sustainable and ethical business practices'
          ]}
        />

        <SectionLayout
          id="travel"
          tagline="Leisure & Travel"
          title="Travel & Tour"
          description="We provide premium travel and tourism services, crafting unforgettable journeys and bespoke experiences for travelers exploring the rich culture and landscapes of Myanmar and Southeast Asia. Our dedicated team ensures the highest standards of hospitality and local expertise."
          icon={<Plane size={20} />}
          reverse={true}
          gradient="bg-gradient-to-br from-blue-50 to-indigo-50"
          imageUrl="/images/corporate/travel-tour.jpg"
          features={[
            'Customized tour packages and itineraries',
            'Luxury transportation and accommodation booking',
            'Experienced local guides and 24/7 support'
          ]}
        />

        <SectionLayout
          id="software"
          tagline="Technology"
          title="Software Development"
          description="Our technology arm delivers cutting-edge digital solutions, custom software development, and digital transformation services. We help businesses modernize their operations and scale efficiently using modern technology stacks and agile methodologies."
          icon={<Code size={20} />}
          gradient="bg-gradient-to-br from-emerald-50 to-teal-50"
          imageUrl="/images/corporate/software-development.jpg"
          features={[
            'Custom web and mobile application development',
            'Cloud infrastructure setup and management',
            'UI/UX design and product strategy'
          ]}
        />

        <SoftwarePortfolio />

        <SectionLayout
          id="entertainment"
          tagline="Media"
          title="Entertainment"
          description="We are expanding into the media and entertainment landscape, creating engaging content and digital experiences that resonate with modern audiences. From digital media production to entertainment platforms, we aim to inspire and connect."
          icon={<Film size={20} />}
          reverse={true}
          gradient="bg-gradient-to-br from-purple-50 to-pink-50"
          imageUrl="/images/corporate/entertainment.jpg"
          features={[
            'Digital content creation and marketing',
            'Event management and promotion',
            'Talent management and collaboration'
          ]}
        />
      </div>

      <Values />

    </div>
  );
}
