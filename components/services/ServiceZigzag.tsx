import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/types/service';

interface ServiceZigzagProps {
  services: Service[];
}

export default function ServiceZigzag({ services }: ServiceZigzagProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={service.id}
            className={`flex flex-col md:items-center gap-12 lg:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={service.coverImage}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-widest">
                {service.tags?.[0] || 'Service'}
              </div>

              <h3 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                {service.name}
              </h3>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {service.type === 'external' ? (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-600/25 group"
                  >
                    Open Platform
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-600/25 group"
                  >
                    Consult Now
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}

                {/* <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-100 font-bold rounded-2xl hover:border-primary-600 hover:text-primary-600 transition-all duration-300"
                >
                  Consult Now
                </Link> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
