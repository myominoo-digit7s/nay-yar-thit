import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isExternal = service.type === 'external';
  
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={service.coverImage}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {service.tags?.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.name}
        </h3>
        
        <p className="text-neutral-600 text-sm line-clamp-2 mb-6 flex-grow">
          {service.description}
        </p>

        {/* CTA */}
        <div className="mt-auto">
          {isExternal ? (
            <a
              href={service.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors group/btn"
            >
              Open Service
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-neutral-900 border-2 border-neutral-900 text-sm font-semibold rounded-xl hover:bg-neutral-900 hover:text-white transition-all group/btn"
            >
              View Details
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
