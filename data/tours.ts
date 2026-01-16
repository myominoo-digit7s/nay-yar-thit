export interface Tour {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  price: number;
  currency: string;
  duration: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  groupSize: string;
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "bagan-temples-exploration",
    name: "Bagan Temples Exploration",
    location: "Bagan",
    country: "Myanmar",
    price: 450,
    currency: "USD",
    duration: "4 Days / 3 Nights",
    description:
      "Discover the ancient wonders of Bagan, home to over 2,000 Buddhist temples and pagodas. This immersive journey takes you through the mystical plains of Old Bagan, where you'll witness breathtaking sunrises over ancient stupas, explore hidden temples, and experience authentic Burmese culture. Our expert local guides will share centuries-old stories and take you to both famous landmarks and secret spots away from the crowds.",
    shortDescription:
      "Explore over 2,000 ancient temples in the mystical plains of Bagan with expert local guides.",
    image: "https://images.unsplash.com/photo-1517071893752-c61373ceb5f4?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1569431059802-7e017a59d899?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Sunrise hot air balloon experience over the temples",
      "Visit the iconic Ananda Temple and Shwezigon Pagoda",
      "Traditional lacquerware workshop tour",
      "Sunset boat cruise on Irrawaddy River",
      "Authentic Burmese cooking class",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bagan",
        description:
          "Arrive at Nyaung U Airport and transfer to your hotel. Evening orientation walk and welcome dinner with traditional Burmese cuisine.",
      },
      {
        day: 2,
        title: "Temple Discovery",
        description:
          "Early morning hot air balloon ride over the temples (optional). Visit Ananda Temple, Htilominlo, and Sulamani. Afternoon lacquerware workshop.",
      },
      {
        day: 3,
        title: "Hidden Gems & Culture",
        description:
          "Explore lesser-known temples with our expert guide. Traditional cooking class followed by sunset cruise on the Irrawaddy River.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Morning visit to Shwezigon Pagoda and local market. Transfer to airport for departure.",
      },
    ],
    inclusions: [
      "3 nights accommodation in boutique hotel",
      "Daily breakfast and 2 dinners",
      "English-speaking licensed guide",
      "All entrance fees",
      "Private air-conditioned transportation",
      "Airport transfers",
      "Irrawaddy River sunset cruise",
      "Cooking class",
    ],
    exclusions: [
      "International flights",
      "Hot air balloon ride (optional extra)",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
    ],
    bestTime: "October to March",
    difficulty: "Easy",
    groupSize: "2-12 people",
    featured: true,
  },
  {
    id: "2",
    slug: "inle-lake-adventure",
    name: "Inle Lake Adventure",
    location: "Inle Lake",
    country: "Myanmar",
    price: 520,
    currency: "USD",
    duration: "5 Days / 4 Nights",
    description:
      "Experience the unique floating world of Inle Lake, where leg-rowing fishermen navigate between floating gardens and stilted villages. This adventure combines natural beauty with cultural immersion, taking you through traditional Shan State communities, ancient monasteries, and vibrant local markets. Discover the remarkable lifestyle of the Intha people who have adapted to life on water.",
    shortDescription:
      "Experience floating gardens, leg-rowing fishermen, and stilted villages on mystical Inle Lake.",
    image: "https://images.unsplash.com/photo-1519877428050-f51669c289d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Traditional long-boat exploration of the lake",
      "Visit to Phaung Daw Oo Pagoda",
      "Floating market experience (market days)",
      "Traditional silk weaving demonstration",
      "Trek to Kalaw hill station",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Heho Airport",
        description:
          "Transfer to Nyaungshwe, gateway to Inle Lake. Afternoon orientation and sunset boat ride.",
      },
      {
        day: 2,
        title: "Lake Exploration",
        description:
          "Full day exploring Inle Lake by traditional long-boat. Visit floating villages, gardens, and workshops.",
      },
      {
        day: 3,
        title: "Indein & Pagodas",
        description:
          "Boat trip to Indein village with its ancient stupas. Explore Phaung Daw Oo Pagoda.",
      },
      {
        day: 4,
        title: "Trekking Day",
        description:
          "Light trek through Shan State villages with stunning views of the lake and surrounding mountains.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning at leisure, transfer to Heho Airport.",
      },
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast",
      "All boat trips",
      "Licensed English-speaking guide",
      "Entrance fees",
      "Trekking guide and permits",
      "Airport transfers",
    ],
    exclusions: [
      "Flights",
      "Travel insurance",
      "Meals not mentioned",
      "Personal expenses",
    ],
    bestTime: "September to April",
    difficulty: "Moderate",
    groupSize: "2-10 people",
    featured: true,
  },
  {
    id: "3",
    slug: "golden-rock-pilgrimage",
    name: "Golden Rock Pilgrimage",
    location: "Kyaiktiyo",
    country: "Myanmar",
    price: 280,
    currency: "USD",
    duration: "2 Days / 1 Night",
    description:
      "Witness one of Buddhism's most sacred sites - the Golden Rock (Kyaiktiyo Pagoda), a gravity-defying boulder covered in gold leaf perched on the edge of a cliff. Join pilgrims from around the world on this spiritual journey and experience the magical atmosphere at sunrise and sunset when the rock glows golden against the mountain backdrop.",
    shortDescription:
      "Visit the sacred gravity-defying Golden Rock, one of Buddhism's most important pilgrimage sites.",
    image: "https://images.unsplash.com/photo-1650708904958-2d0752c0463d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Sunrise and sunset at the Golden Rock",
      "Traditional truck ride up the mountain",
      "Experience with local pilgrims",
      "Panoramic mountain views",
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Golden Rock",
        description:
          "Early departure from Yangon. Traditional open-air truck ride to the summit. Evening prayers and sunset viewing.",
      },
      {
        day: 2,
        title: "Sunrise & Return",
        description:
          "Early morning sunrise viewing. Breakfast at the pagoda. Return journey to Yangon.",
      },
    ],
    inclusions: [
      "1 night accommodation near the pagoda",
      "Meals as mentioned",
      "Licensed guide",
      "All transportation",
      "Entrance fees",
    ],
    exclusions: ["Travel insurance", "Personal expenses", "Tips"],
    bestTime: "November to February",
    difficulty: "Moderate",
    groupSize: "2-15 people",
    featured: false,
  },
  {
    id: "4",
    slug: "yangon-city-discovery",
    name: "Yangon City Discovery",
    location: "Yangon",
    country: "Myanmar",
    price: 180,
    currency: "USD",
    duration: "2 Days / 1 Night",
    description:
      "Explore Myanmar's largest city and former capital, where colonial architecture meets Buddhist tradition. Discover the magnificent Shwedagon Pagoda, wander through bustling markets, experience local street food, and learn about the city's rich history through its diverse neighborhoods.",
    shortDescription:
      "Discover Yangon's colonial charm, sacred pagodas, and vibrant street life.",
    image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Shwedagon Pagoda at sunset",
      "Colonial downtown walking tour",
      "Bogyoke Market shopping",
      "Street food tasting tour",
      "Circular train experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "City Exploration",
        description:
          "Morning downtown walking tour. Afternoon at Bogyoke Market. Sunset at Shwedagon Pagoda.",
      },
      {
        day: 2,
        title: "Local Life & Departure",
        description:
          "Morning circular train ride. Street food tour. Afternoon departure.",
      },
    ],
    inclusions: [
      "1 night hotel accommodation",
      "Breakfast",
      "English-speaking guide",
      "Entrance fees",
      "Street food tasting",
    ],
    exclusions: ["Flights", "Travel insurance", "Shopping expenses"],
    bestTime: "November to February",
    difficulty: "Easy",
    groupSize: "2-12 people",
    featured: true,
  },
  {
    id: "5",
    slug: "mandalay-heritage-trail",
    name: "Mandalay Heritage Trail",
    location: "Mandalay",
    country: "Myanmar",
    price: 380,
    currency: "USD",
    duration: "3 Days / 2 Nights",
    description:
      "Journey through Mandalay, the cultural heart of Myanmar and last royal capital. Explore magnificent monasteries, witness traditional arts and crafts, and experience the famous U Bein Bridge at sunset. This heritage trail reveals the artistic and spiritual essence of Upper Burma.",
    shortDescription:
      "Experience the cultural heart of Myanmar with royal palaces, monasteries, and the iconic U Bein Bridge.",
    image: "https://images.unsplash.com/photo-1722414553260-513e758add90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1582651957695-7ee2b7bb9899?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "U Bein Bridge sunset walk",
      "Mandalay Palace and Fort",
      "Mahamuni Buddha Temple",
      "Traditional puppet workshop",
      "Mingun ancient city excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Amarapura",
        description:
          "Arrive in Mandalay. Afternoon visit to Amarapura and U Bein Bridge sunset.",
      },
      {
        day: 2,
        title: "Mandalay Exploration",
        description:
          "Full day touring Mandalay's temples, palace, and craft workshops.",
      },
      {
        day: 3,
        title: "Mingun & Departure",
        description:
          "Morning boat trip to Mingun. Return and airport transfer.",
      },
    ],
    inclusions: [
      "2 nights accommodation",
      "Daily breakfast",
      "All transportation including boat",
      "Licensed guide",
      "Entrance fees",
    ],
    exclusions: ["Flights", "Travel insurance", "Personal expenses"],
    bestTime: "October to March",
    difficulty: "Easy",
    groupSize: "2-10 people",
    featured: false,
  },
  {
    id: "6",
    slug: "ngapali-beach-escape",
    name: "Ngapali Beach Escape",
    location: "Ngapali",
    country: "Myanmar",
    price: 650,
    currency: "USD",
    duration: "4 Days / 3 Nights",
    description:
      "Relax on Myanmar's most beautiful beach, where pristine white sand meets the turquoise waters of the Bay of Bengal. Ngapali offers the perfect blend of relaxation and adventure with activities like snorkeling, cycling through fishing villages, and sampling the freshest seafood.",
    shortDescription:
      "Unwind on pristine white sand beaches with crystal-clear waters and fresh seafood.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Pristine beach relaxation",
      "Snorkeling and swimming",
      "Fresh seafood dining",
      "Fishing village cycling tour",
      "Sunset cocktails",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach",
        description:
          "Arrive at Thandwe Airport. Transfer to beach resort. Afternoon at leisure.",
      },
      {
        day: 2,
        title: "Beach & Village",
        description:
          "Morning snorkeling. Afternoon cycling to local fishing village.",
      },
      {
        day: 3,
        title: "Relaxation Day",
        description:
          "Full day at leisure. Optional spa treatments. Sunset dinner on the beach.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning at leisure. Transfer to airport.",
      },
    ],
    inclusions: [
      "3 nights beachfront resort",
      "Daily breakfast",
      "Airport transfers",
      "Snorkeling equipment",
      "Bicycle rental",
    ],
    exclusions: [
      "Flights",
      "Travel insurance",
      "Spa treatments",
      "Personal expenses",
    ],
    bestTime: "October to May",
    difficulty: "Easy",
    groupSize: "2-6 people",
    featured: true,
  },
  {
    id: "7",
    slug: "thailand-golden-triangle",
    name: "Thailand Golden Triangle",
    location: "Chiang Rai",
    country: "Thailand",
    price: 420,
    currency: "USD",
    duration: "3 Days / 2 Nights",
    description:
      "Explore the legendary Golden Triangle where Thailand, Laos, and Myanmar meet at the confluence of the Mekong and Ruak rivers. Discover hill tribe villages, visit the stunning White Temple, and learn about the region's fascinating opium trade history.",
    shortDescription:
      "Discover where three countries meet, explore hill tribes, and visit the iconic White Temple.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Wat Rong Khun (White Temple)",
      "Mekong River boat cruise",
      "Hill tribe village visit",
      "Hall of Opium Museum",
      "Three-country viewpoint",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chiang Rai Arrival",
        description:
          "Arrive in Chiang Rai. Visit White Temple and Black House. Evening night market.",
      },
      {
        day: 2,
        title: "Golden Triangle",
        description:
          "Full day exploring Golden Triangle, boat cruise, and hill tribe visit.",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "Morning tea plantation visit. Transfer to airport or continue to next destination.",
      },
    ],
    inclusions: [
      "2 nights accommodation",
      "Daily breakfast",
      "English-speaking guide",
      "All transportation",
      "Entrance fees",
      "Boat cruise",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses"],
    bestTime: "November to February",
    difficulty: "Easy",
    groupSize: "2-12 people",
    featured: false,
  },
  // {
  //   id: "8",
  //   slug: "vietnam-halong-bay",
  //   name: "Vietnam Ha Long Bay Cruise",
  //   location: "Ha Long Bay",
  //   country: "Vietnam",
  //   price: 580,
  //   currency: "USD",
  //   duration: "3 Days / 2 Nights",
  //   description:
  //     "Cruise through the emerald waters of Ha Long Bay, a UNESCO World Heritage Site featuring thousands of limestone karsts and islands rising from the sea. Enjoy luxury accommodation on a traditional junk boat, explore hidden caves, kayak through floating villages, and witness spectacular sunsets.",
  //   shortDescription:
  //     "Cruise among 2,000 limestone islands on a luxury traditional junk boat.",
  //   image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=800&fit=crop",
  //   ],
  //   highlights: [
  //     "Overnight luxury junk boat cruise",
  //     "Kayaking through limestone karsts",
  //     "Cooking class on board",
  //     "Tai Chi sunrise session",
  //     "Cave exploration",
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       title: "Hanoi to Ha Long",
  //       description:
  //         "Transfer from Hanoi. Board cruise, lunch, and afternoon exploration.",
  //     },
  //     {
  //       day: 2,
  //       title: "Full Day Cruising",
  //       description:
  //         "Sunrise Tai Chi. Full day exploring caves, kayaking, and swimming.",
  //     },
  //     {
  //       day: 3,
  //       title: "Return to Hanoi",
  //       description: "Morning cruise. Brunch and transfer back to Hanoi.",
  //     },
  //   ],
  //   inclusions: [
  //     "2 nights on luxury cruise",
  //     "All meals on board",
  //     "Kayaking equipment",
  //     "Guided excursions",
  //     "Round-trip Hanoi transfers",
  //   ],
  //   exclusions: ["International flights", "Travel insurance", "Beverages"],
  //   bestTime: "October to April",
  //   difficulty: "Easy",
  //   groupSize: "2-20 people",
  //   featured: true,
  // },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((tour) => tour.featured);
}

export function getToursByCountry(country: string): Tour[] {
  return tours.filter((tour) => tour.country === country);
}
