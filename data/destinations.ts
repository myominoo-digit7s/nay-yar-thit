export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  weather: string;
  currency: string;
  language: string;
  timezone: string;
  visaInfo: string;
  relatedTourSlugs: string[];
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "myanmar",
    name: "Myanmar",
    country: "Myanmar",
    tagline: "The Golden Land of Temples and Traditions",
    description:
      "Myanmar, formerly known as Burma, is a Southeast Asian nation of more than 100 ethnic groups, bordering India, Bangladesh, China, Laos, and Thailand. Its Irrawaddy River flows through the country's center and is dotted with ancient temple cities. Myanmar offers travelers an authentic glimpse into Buddhist culture, from the thousands of ancient temples in Bagan to the serene waters of Inle Lake. The country's rich history, diverse landscapes, and warm hospitality make it one of Asia's most compelling destinations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1569431059802-7e017a59d899?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Bagan's 2,000+ ancient temples and pagodas",
      "Inle Lake's floating gardens and leg-rowing fishermen",
      "The magnificent Shwedagon Pagoda in Yangon",
      "Sacred Golden Rock pilgrimage site",
      "Mandalay's cultural treasures and U Bein Bridge",
      "Pristine beaches of Ngapali",
    ],
    bestTimeToVisit: "October to March (dry season)",
    weather: "Tropical monsoon climate. Cool and dry from November to February.",
    currency: "Myanmar Kyat (MMK)",
    language: "Burmese (Myanmar)",
    timezone: "Myanmar Standard Time (UTC+6:30)",
    visaInfo:
      "Most visitors need a visa. E-visa available for tourism for many nationalities.",
    relatedTourSlugs: [
      "bagan-temples-exploration",
      "inle-lake-adventure",
      "golden-rock-pilgrimage",
      "yangon-city-discovery",
      "mandalay-heritage-trail",
      "ngapali-beach-escape",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    tagline: "The Land of Smiles",
    description:
      "Thailand, known as 'The Land of Smiles,' captivates visitors with its perfect blend of ancient traditions and modern conveniences. From the bustling streets of Bangkok to the serene temples of Chiang Mai and the stunning islands of the south, Thailand offers something for every traveler. The country's renowned cuisine, warm hospitality, and rich Buddhist heritage create unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Bangkok's Grand Palace and Wat Pho",
      "Chiang Mai's night bazaars and temples",
      "The Golden Triangle region",
      "World-famous Thai cuisine",
      "Tropical island paradises",
      "Ancient ruins of Ayutthaya",
    ],
    bestTimeToVisit: "November to February (cool season)",
    weather: "Tropical climate. Hot and humid year-round with monsoon season from May to October.",
    currency: "Thai Baht (THB)",
    language: "Thai",
    timezone: "Indochina Time (UTC+7)",
    visaInfo:
      "Many nationalities get visa-free entry for 30-60 days. Visa on arrival available.",
    relatedTourSlugs: ["thailand-golden-triangle"],
    featured: true,
  },
  // {
  //   id: "3",
  //   slug: "vietnam",
  //   name: "Vietnam",
  //   country: "Vietnam",
  //   tagline: "Timeless Charm Meets Natural Wonder",
  //   description:
  //     "Vietnam stretches over 1,600 kilometers along the eastern coast of the Indochina Peninsula. From the terraced rice fields of Sapa in the north to the Mekong Delta in the south, Vietnam offers incredible natural diversity. The country's 4,000 years of history have created a rich tapestry of culture, cuisine, and architecture that continues to enchant travelers.",
  //   image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1200&h=800&fit=crop",
  //   ],
  //   highlights: [
  //     "Ha Long Bay's limestone karsts",
  //     "Ancient town of Hoi An",
  //     "Imperial City of Hue",
  //     "Sapa's terraced rice paddies",
  //     "Cu Chi Tunnels near Ho Chi Minh City",
  //     "Mekong Delta floating markets",
  //   ],
  //   bestTimeToVisit: "Spring (February-April) and Autumn (August-October)",
  //   weather: "Varies by region. Generally tropical with monsoon influences.",
  //   currency: "Vietnamese Dong (VND)",
  //   language: "Vietnamese",
  //   timezone: "Indochina Time (UTC+7)",
  //   visaInfo:
  //     "E-visa available for most nationalities. Some countries get visa-free entry.",
  //   relatedTourSlugs: ["vietnam-halong-bay"],
  //   featured: true,
  // },
  {
    id: "4",
    slug: "bagan",
    name: "Bagan",
    country: "Myanmar",
    tagline: "The Land of 2,000 Temples",
    description:
      "Bagan is an ancient city and UNESCO World Heritage Site located in the Mandalay Region of Myanmar. From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom to unify the regions that would later constitute modern Myanmar. During the kingdom's height, over 10,000 Buddhist temples, pagodas, and monasteries were constructed, of which over 2,000 remain today, creating one of the world's most remarkable archaeological zones.",
    image: "https://images.unsplash.com/photo-1583257242616-b4c5a5dee7d0?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Sunrise hot air balloon rides",
      "Ananda Temple",
      "Shwezigon Pagoda",
      "Irrawaddy River sunset cruises",
      "Traditional lacquerware workshops",
      "Archaeological museum",
    ],
    bestTimeToVisit: "October to March",
    weather: "Hot and dry. Coolest from November to February.",
    currency: "Myanmar Kyat (MMK)",
    language: "Burmese",
    timezone: "Myanmar Standard Time (UTC+6:30)",
    visaInfo: "Myanmar visa required",
    relatedTourSlugs: ["bagan-temples-exploration"],
    featured: true,
  },
  {
    id: "5",
    slug: "inle-lake",
    name: "Inle Lake",
    country: "Myanmar",
    tagline: "Life on the Water",
    description:
      "Inle Lake is a freshwater lake located in the Nyaungshwe Township of Shan State. The lake is famous for its floating villages, gardens, and the unique rowing style of the Intha people who paddle standing up. Life revolves around the lake, with communities living in stilted houses over the water and cultivating hydroponic gardens that float on the surface.",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Leg-rowing fishermen",
      "Floating gardens",
      "Phaung Daw Oo Pagoda",
      "Jumping Cat Monastery",
      "Traditional silk weaving",
      "Five-day rotating market",
    ],
    bestTimeToVisit: "September to April",
    weather: "Pleasant year-round due to elevation. Misty mornings common.",
    currency: "Myanmar Kyat (MMK)",
    language: "Burmese, Shan",
    timezone: "Myanmar Standard Time (UTC+6:30)",
    visaInfo: "Myanmar visa required",
    relatedTourSlugs: ["inle-lake-adventure"],
    featured: false,
  },
  // {
  //   id: "6",
  //   slug: "ha-long-bay",
  //   name: "Ha Long Bay",
  //   country: "Vietnam",
  //   tagline: "Where Dragons Descended",
  //   description:
  //     "Ha Long Bay, meaning 'Descending Dragon Bay,' is a UNESCO World Heritage Site in northeastern Vietnam known for its emerald waters and thousands of towering limestone islands topped with rainforests. Legend has it that the bay was created when dragons descended from heaven to protect Vietnam from invaders, spitting out jewels and jade that turned into the islands we see today.",
  //   image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop",
  //   ],
  //   highlights: [
  //     "Overnight junk boat cruises",
  //     "Kayaking through caves",
  //     "Sung Sot (Surprise) Cave",
  //     "Floating fishing villages",
  //     "Cat Ba Island",
  //     "Pristine beaches",
  //   ],
  //   bestTimeToVisit: "October to April",
  //   weather: "Subtropical. Cool and dry from October to April.",
  //   currency: "Vietnamese Dong (VND)",
  //   language: "Vietnamese",
  //   timezone: "Indochina Time (UTC+7)",
  //   visaInfo: "Vietnam visa required for most nationalities",
  //   relatedTourSlugs: ["vietnam-halong-bay"],
  //   featured: false,
  // },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((destination) => destination.featured);
}

export function getDestinationsByCountry(country: string): Destination[] {
  return destinations.filter((destination) => destination.country === country);
}
