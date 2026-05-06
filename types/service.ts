export type ServiceType = 'internal' | 'external';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: ServiceType;
  coverImage: string;
  isActive: boolean;

  externalUrl?: string;

  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
}
