import { Service } from '@/types/service';

export const services: Service[] = [
  // Travel & Tours
  {
    id: 'itinerary-planning',
    name: 'Customized Itinerary Planning',
    slug: 'customized-itinerary-planning',
    description: 'Provide expert travel consultancy for unique and personalized itineraries, ensuring seamless and memorable journeys across all locations.',
    type: 'internal',
    category: 'travel',
    coverImage: '/images/services/travel_tour_section_01.jpg',
    isActive: true,
    seo: {
      title: 'Customized Itinerary Planning - Nay Yar Thit',
      description: 'Expert travel consultancy for unique and personalized itineraries.',
    },
    tags: ['Travel', 'Consultancy', 'Personalized'],
  },
  {
    id: 'cultural-tours',
    name: 'Guided and Cultural Tours',
    slug: 'guided-cultural-tours',
    description: 'Committed to delivering authentic cultural interactions and professional guided services to enrich your travel and discovery experiences.',
    type: 'internal',
    category: 'travel',
    coverImage: '/images/services/travel_tour_section_02.jpg',
    isActive: true,
    seo: {
      title: 'Guided and Cultural Tours - Nay Yar Thit',
      description: 'Authentic cultural interactions and professional guided services.',
    },
    tags: ['Culture', 'Tours', 'Guided'],
  },
  {
    id: 'travel-logistics',
    name: 'Transportation & Lodging Logistics',
    slug: 'transportation-lodging-logistics',
    description: 'Provide complete services for international flights, ground transportation, and curated accommodation bookings, to support entire travel systems.',
    type: 'internal',
    category: 'travel',
    coverImage: '/images/services/travel_tour_section_03.jpg',
    isActive: true,
    seo: {
      title: 'Transportation & Lodging Logistics - Nay Yar Thit',
      description: 'Complete services for flights, ground transportation, and curated accommodation bookings.',
    },
    tags: ['Logistics', 'Flights', 'Accommodation'],
  },

  // Digital Solutions
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Management',
    slug: 'cloud-infrastructure-management',
    description: 'Provide professional services such as cloud server optimization, scaling, and network security to ensure high-performance operation of digital platforms.',
    type: 'internal',
    category: 'digital',
    coverImage: '/images/services/digital_solution_section_01.jpg',
    isActive: true,
    seo: {
      title: 'Cloud Infrastructure Management - Nay Yar Thit',
      description: 'Professional cloud server optimization, scaling, and network security.',
    },
    tags: ['Cloud', 'Infrastructure', 'Security'],
  },
  {
    id: 'app-development',
    name: 'Mobile App and Platform Development',
    slug: 'mobile-app-platform-development',
    description: 'Committed to the design and development of digital platforms such as mobile applications, e-commerce sites, and customer portals, with high detail and quality.',
    type: 'internal',
    category: 'digital',
    coverImage: '/images/services/digital_solution_section_02.jpg',
    isActive: true,
    seo: {
      title: 'Mobile App and Platform Development - Nay Yar Thit',
      description: 'Design and development of digital platforms and mobile applications.',
    },
    tags: ['Development', 'Mobile', 'Platforms'],
  },
  {
    id: 'quality-assurance',
    name: 'Quality Assurance and Systems Testing',
    slug: 'quality-assurance-systems-testing',
    description: 'Provide comprehensive system evaluation and performance testing, including load testing, security audits, and rigorous functional verification.',
    type: 'internal',
    category: 'digital',
    coverImage: '/images/services/digital_solution_section_03.jpg',
    isActive: true,
    seo: {
      title: 'Quality Assurance and Systems Testing - Nay Yar Thit',
      description: 'Comprehensive system evaluation and performance testing.',
    },
    tags: ['QA', 'Testing', 'Security'],
  },

  // Keeping Sports Corner under 'digital' category as it's a mobile app
  {
    id: 'sports-corner',
    name: 'The Sports Corner',
    slug: 'the-sports-corner',
    description: 'The ultimate entertainment platform for sports lovers. Stay updated with live scores, news, and exclusive content.',
    type: 'external',
    category: 'digital',
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
