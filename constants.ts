
import { Region, Category, Tour } from './types';

// Using quality placeholders that support format parameters for performance
const getImg = (id: number, width = 800, height = 600) => `https://images.weserv.nl/?url=https://picsum.photos/id/${id}/${width}/${height}&output=webp&q=80`;

export const WEEKLY_TOURS: Tour[] = [
  {
    id: 'naran-kaghan-3d',
    name: '3 Days Naran Kaghan Shogran Tour',
    duration: '3 Days',
    destinations: ['Naran', 'Kaghan', 'Shogran', 'Siri Paye'],
    departureDays: ['Every Mon, Thu & Sat'],
    price: 18500,
    image: getImg(1015),
    region: Region.KPK,
    tags: ['Family', 'Scenic'],
    bestSeason: 'Summer',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'neelum-valley-3d',
    name: '3 Days Neelum Valley Tour',
    duration: '3 Days',
    destinations: ['Kutton', 'Keran', 'Upper Neelum'],
    departureDays: ['Every Mon & Thu'],
    price: 16000,
    image: getImg(1016),
    region: Region.AZAD_KASHMIR,
    tags: ['Adventure', 'Scenic'],
    bestSeason: 'Spring-Fall',
    accessibility: 'Jeep'
  },
  {
    id: 'swat-kalam-3d',
    name: '3 Days Swat Kalam Malam Jabba Tour',
    duration: '3 Days',
    destinations: ['Mingora', 'Kalam', 'Malam Jabba'],
    departureDays: ['Every Mon & Thu'],
    price: 17500,
    image: getImg(1018),
    region: Region.KPK,
    tags: ['Family', 'Snow'],
    bestSeason: 'Winter/Summer',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'ratti-gali-3d',
    name: '3 Days Ratti Gali Tour',
    duration: '3 Days',
    destinations: ['Dowarian', 'Ratti Gali Lake'],
    departureDays: ['Every Mon & Thu'],
    price: 19000,
    image: getImg(1019),
    region: Region.AZAD_KASHMIR,
    tags: ['Trek', 'Scenic'],
    bestSeason: 'Summer',
    accessibility: 'Jeep/Hiking'
  },
  {
    id: 'taobat-4d',
    name: '4 Days Taobat Tour',
    duration: '4 Days',
    destinations: ['Kel', 'Taobat', 'Arang Kel'],
    departureDays: ['Every Wednesday Night'],
    price: 22000,
    image: getImg(1020),
    region: Region.AZAD_KASHMIR,
    tags: ['Off-Grid', 'Adventure'],
    bestSeason: 'Summer',
    accessibility: 'Jeep'
  },
  {
    id: 'hunza-skardu-8d',
    name: '8 Days Hunza Skardu Tour',
    duration: '8 Days',
    destinations: ['Chilas', 'Hunza', 'Skardu', 'Khunjerab'],
    departureDays: ['Every Friday'],
    price: 45000,
    image: getImg(1021),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Adventure', 'Premium'],
    bestSeason: 'Summer/Autumn',
    accessibility: 'Coaster/Pajero'
  },
  {
    id: 'hunza-valley-5d',
    name: '5 Days Hunza Valley Tour',
    duration: '5 Days',
    destinations: ['Hunza', 'Attabad Lake', 'Passu'],
    departureDays: ['Every Tue & Fri'],
    price: 28000,
    image: getImg(1022),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Scenic', 'Family'],
    bestSeason: 'All Year',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'skardu-6d',
    name: '6 Days Skardu Tour',
    duration: '6 Days',
    destinations: ['Skardu', 'Shangrila', 'Deosai'],
    departureDays: ['Every Monday'],
    price: 32000,
    image: getImg(1023),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Adventure', 'Family'],
    bestSeason: 'Summer',
    accessibility: 'Coaster/Jeep'
  },
  {
    id: 'kumrat-3d',
    name: '3 Days Kumrat Tour',
    duration: '3 Days',
    destinations: ['Kumrat Valley', 'Jahaz Banda'],
    departureDays: ['Every Thursday'],
    price: 18000,
    image: getImg(1024),
    region: Region.KPK,
    tags: ['Off-Grid', 'Nature'],
    bestSeason: 'Summer',
    accessibility: 'Jeep'
  }
];

export const SEO_DESTINATIONS = [
  {
    id: 'gilgit-baltistan',
    title: 'Gilgit-Baltistan',
    region: Region.GILGIT_BALTISTAN,
    description: 'The land of giants and turquoise lakes. Home to K2 and breathtaking Hunza Valley.',
    image: getImg(10, 1200, 600), // Lake theme for Gilgit
    highlights: ['K2 Base Camp', 'Baltit Fort', 'Attabad Lake'],
    metaTitle: 'Explore Gilgit-Baltistan | Sandhu Travels',
    metaDesc: 'Book your tour to Gilgit-Baltistan. Explore Hunza, Skardu, and Khunjerab Pass with Sandhu Travels.'
  },
  {
    id: 'khyber-pakhtunkhwa',
    title: 'Khyber Pakhtunkhwa (KPK)',
    region: Region.KPK,
    description: 'Lush green valleys, roaring rivers, and hospitality like no other.',
    image: getImg(1036, 1200, 600), // Mountain theme for KPK
    highlights: ['Naran Kaghan', 'Swat Valley', 'Kumrat Valley'],
    metaTitle: 'KPK Travel Packages | Swat & Naran Tours',
    metaDesc: 'Discover the beauty of KPK. Weekly group tours to Naran, Swat, and Kalam.'
  },
  {
    id: 'azad-kashmir',
    title: 'Azad Kashmir',
    region: Region.AZAD_KASHMIR,
    description: 'The Heaven on Earth. Thick forests, waterfalls, and the stunning Neelum River.',
    image: getImg(1039, 1200, 600), // Mountain theme for Kashmir
    highlights: ['Neelum Valley', 'Ratti Gali', 'Arang Kel'],
    metaTitle: 'Neelum Valley Kashmir Tours | Sandhu Travels',
    metaDesc: 'Book your dream trip to Azad Kashmir. Explore Neelum Valley and more.'
  }
];
