import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 'sports-corner',
    name: 'The Sports Corner',
    slug: 'the-sports-corner',
    description: 'The ultimate entertainment platform for sports lovers. Stay updated with live scores, news, and exclusive content.',
    type: 'external',
    coverImage: '/images/services/unnamed.webp',
    isActive: true,
    externalUrl: 'https://play.google.com/store/apps/details?id=com.thesportscorner.app',
    seo: {
      title: 'The Sports Corner - Nay Yar Thit',
      description: 'Enjoy sports entertainment with The Sports Corner app by Nay Yar Thit.',
    },
    tags: ['Sports', 'Entertainment', 'Mobile App'],
  },
];
