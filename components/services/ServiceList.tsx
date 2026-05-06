import { Service } from '@/types/service';
import ServiceCard from './ServiceCard';

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
      
      {services.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="text-neutral-500 text-lg">No services found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
