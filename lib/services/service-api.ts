import { services } from '@/data/services';
import { Service } from '@/types/service';

export async function getActiveServices(): Promise<Service[]> {
  // Simulate API delay for future-proofing
  return services.filter(service => service.isActive);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return services.find(service => service.slug === slug && service.isActive);
}
