import { Metadata } from 'next';
import { getActiveServices } from '@/lib/services/service-api';
import ServiceList from '@/components/services/ServiceList';
import ServiceHero from '@/components/services/ServiceHero';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Other Services | Nay Yar Thit',
  description: 'Explore the diverse range of services offered by Nay Yar Thit, including entertainment and digital platforms.',
};

export default async function ServicesPage() {
  const services = await getActiveServices();

  return (
    <div className="bg-white">
      <ServiceHero />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Our Ecosystem"
            title="Explore Our Services"
            description="Discover how we are growing to serve you better across multiple domains, from sports entertainment to digital lifestyle solutions."
          />

          <ServiceList services={services} />
        </div>
      </section>
    </div>
  );
}
