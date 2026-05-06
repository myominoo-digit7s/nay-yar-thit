export type ServiceType = 'internal' | 'external';
export type ServiceCategory = 'travel' | 'digital';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: ServiceType;
  category: ServiceCategory;
  coverImage: string;
  isActive: boolean;

  externalUrl?: string;

  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
}
