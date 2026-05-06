import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug } from '@/lib/services/service-api';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seo?.title || `${service.name} | Nay Yar Thit`,
    description: service.seo?.description || service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isExternal = service.type === 'external';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={service.coverImage}
          alt={service.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              <Link href="/services" className="text-primary-300 text-sm hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/40 text-sm">/</span>
              {service.tags?.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 bg-primary-500/20 backdrop-blur-md text-primary-300 text-[10px] font-bold uppercase tracking-widest rounded border border-primary-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">About {service.name}</h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  Nay Yar Thit is proud to present {service.name}. 
                  {isExternal 
                    ? ` This service is available on external platforms. Click the button below to access the full features and experience.`
                    : ` Explore the internal features and benefits of this service directly through our platform.`
                  }
                </p>
                
                {isExternal ? (
                  <div className="space-y-4">
                    <a
                      href={service.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all transform hover:scale-[1.02] shadow-xl shadow-neutral-900/10"
                    >
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 15.3414C17.0213 15.3414 16.6022 15.7505 16.6022 16.2522V18.5232C16.6022 18.7909 16.3813 19.0118 16.1136 19.0118H5.47683C5.20914 19.0118 4.98825 18.7909 4.98825 18.5232V7.88636C4.98825 7.61867 5.20914 7.39778 5.47683 7.39778H7.74786C8.24953 7.39778 8.65863 6.98868 8.65863 6.48701C8.65863 5.98534 8.24953 5.57624 7.74786 5.57624H5.47683C4.20526 5.57624 3.1702 6.6113 3.1702 7.88287V18.5197C3.1702 19.7913 4.20526 20.8263 5.47683 20.8263H16.1136C17.3852 20.8263 18.4203 19.7913 18.4203 18.5197V16.2522C18.4203 15.7505 18.0142 15.3414 17.523 15.3414Z" />
                        <path d="M20.2522 3.17383H15.6154C15.1137 3.17383 14.7046 3.58293 14.7046 4.0846C14.7046 4.58627 15.1137 4.99537 15.6154 4.99537H18.2571L10.3541 12.8983C9.99988 13.2525 9.99988 13.8248 10.3541 14.179C10.5312 14.3561 10.7628 14.4447 10.9944 14.4447C11.2261 14.4447 11.4577 14.3561 11.6348 14.179L19.5377 6.27608V8.91778C19.5377 9.41945 19.9468 9.82855 20.4485 9.82855C20.9502 9.82855 21.3593 9.41945 21.3593 8.91778V4.28101C21.3593 3.66531 20.8679 3.17383 20.2522 3.17383Z" />
                      </svg>
                      Open {service.name}
                    </a>
                    {service.slug === 'the-sports-corner' && (
                      <p className="text-sm text-neutral-400 mt-4 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.523 15.3414C17.0213 15.3414 16.6022 15.7505 16.6022 16.2522V18.5232C16.6022 18.7909 16.3813 19.0118 16.1136 19.0118H5.47683C5.20914 19.0118 4.98825 18.7909 4.98825 18.5232V7.88636C4.98825 7.61867 5.20914 7.39778 5.47683 7.39778H7.74786C8.24953 7.39778 8.65863 6.98868 8.65863 6.48701C8.65863 5.98534 8.24953 5.57624 7.74786 5.57624H5.47683C4.20526 5.57624 3.1702 6.6113 3.1702 7.88287V18.5197C3.1702 19.7913 4.20526 20.8263 5.47683 20.8263H16.1136C17.3852 20.8263 18.4203 19.7913 18.4203 18.5197V16.2522C18.4203 15.7505 18.0142 15.3414 17.523 15.3414Z" />
                        </svg>
                        Redirecting to Google Play Store
                      </p>
                    )}
                  </div>
                ) : (
                  <button className="px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all transform hover:scale-[1.02] shadow-xl shadow-primary-600/10">
                    Get Started
                  </button>
                )}
              </div>
              
              {/* Feature Box */}
              <div className="w-full md:w-80 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 shrink-0">
                <h4 className="font-bold text-neutral-900 mb-4 pb-4 border-b border-neutral-100">Service Highlights</h4>
                <ul className="space-y-4">
                  {['High Performance', 'Trusted Security', '24/7 Availability', 'Digital Ecosystem'].map((highlight) => (
                    <li key={highlight} className="flex items-center text-sm text-neutral-600">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
