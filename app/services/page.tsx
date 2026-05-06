import { Metadata } from 'next';
import { getActiveServices } from '@/lib/services/service-api';
import ServiceHero from '@/components/services/ServiceHero';
import SectionHeader from '@/components/SectionHeader';
import ServiceZigzag from '@/components/services/ServiceZigzag';

export const metadata: Metadata = {
  title: 'Our Services | Nay Yar Thit',
  description: 'Explore our premium travel experiences and innovative digital solutions tailored for your growth.',
};

export default async function ServicesPage() {
  const allServices = await getActiveServices();
  
  const travelServices = allServices.filter(s => s.category === 'travel');
  const digitalServices = allServices.filter(s => s.category === 'digital');

  return (
    <div className="bg-white overflow-hidden">
      <ServiceHero />
      
      {/* Travel & Tours Section */}
      <section id="travel-tours" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <SectionHeader
              tagline="Category 01"
              title="Travel & Tours"
              description="NAY YAR THIT is a premier travel management company dedicated to providing high-quality and immersive travel experiences to diverse global destinations."
            />
          </div>
          <ServiceZigzag services={travelServices} />
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section id="digital-solutions" className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <SectionHeader
              tagline="Category 02"
              title="Digital Solutions"
              description="NAY YAR THIT is also expanding to a specialized digital platform and software development committed to creating impactful and smart business solutions."
            />
          </div>
          <ServiceZigzag services={digitalServices} />
        </div>
      </section>
    </div>
  );
}
