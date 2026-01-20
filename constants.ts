
import { Region, Category, Tour } from './types';

export const WEEKLY_TOURS: Tour[] = [
  {
    id: 'naran-kaghan-3d',
    name: '3 Days Naran Kaghan Shogran Tour',
    duration: '3 Days',
    destinations: ['Naran', 'Kaghan', 'Shogran', 'Siri Paye'],
    departureDays: ['Every Mon, Thu & Sat'],
    price: 18500,
    image: 'https://picsum.photos/id/1015/800/600',
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
    image: 'https://picsum.photos/id/1016/800/600',
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
    image: 'https://picsum.photos/id/1018/800/600',
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
    image: 'https://picsum.photos/id/1019/800/600',
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
    image: 'https://picsum.photos/id/1020/800/600',
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
    image: 'https://picsum.photos/id/1021/800/600',
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
    image: 'https://picsum.photos/id/1022/800/600',
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
    image: 'https://picsum.photos/id/1023/800/600',
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
    image: 'https://picsum.photos/id/1024/800/600',
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
    image: 'https://picsum.photos/id/1036/1200/600',
    highlights: ['K2 Base Camp', 'Baltit Fort', 'Attabad Lake'],
    metaTitle: 'Explore Gilgit-Baltistan | Sandhu Travels',
    metaDesc: 'Book your tour to Gilgit-Baltistan. Explore Hunza, Skardu, and Khunjerab Pass with Sandhu Travels.'
  },
  {
    id: 'khunjerab-pass',
    title: 'Khunjerab Pass',
    region: Region.GILGIT_BALTISTAN,
    description: 'The world\'s highest paved border crossing. Experience the roof of the world.',
    image: 'https://picsum.photos/id/1037/1200/600',
    highlights: ['Highest ATM', 'Snowy Peaks', 'Yak Sightings'],
    metaTitle: 'Khunjerab Pass Tours | Highest Border Crossing',
    metaDesc: 'Visit the Pak-China border at Khunjerab Pass. Premium tours available weekly.'
  },
  {
    id: 'deosai-plains',
    title: 'Deosai Plains',
    region: Region.GILGIT_BALTISTAN,
    description: 'The land of the giants. A massive high-altitude plateau with vibrant wildflowers.',
    image: 'https://picsum.photos/id/1038/1200/600',
    highlights: ['Sheosar Lake', 'Golden Marmots', 'Vast Meadows'],
    metaTitle: 'Deosai Plains Camping & Tours | Sandhu Travels',
    metaDesc: 'Experience the magic of Deosai Plains. Best time to visit is July-September.'
  },
  {
    id: 'khyber-pakhtunkhwa',
    title: 'Khyber Pakhtunkhwa (KPK)',
    region: Region.KPK,
    description: 'Lush green valleys, roaring rivers, and hospitality like no other.',
    image: 'https://picsum.photos/id/1039/1200/600',
    highlights: ['Naran Kaghan', 'Swat Valley', 'Kumrat Valley'],
    metaTitle: 'KPK Travel Packages | Swat & Naran Tours',
    metaDesc: 'Discover the beauty of KPK. Weekly group tours to Naran, Swat, and Kalam.'
  },
  {
    id: 'azad-kashmir',
    title: 'Azad Kashmir',
    region: Region.AZAD_KASHMIR,
    description: 'The Heaven on Earth. Thick forests, waterfalls, and the stunning Neelum River.',
    image: 'https://picsum.photos/id/1040/1200/600',
    highlights: ['Neelum Valley', 'Ratti Gali', 'Arang Kel'],
    metaTitle: 'Neelum Valley Kashmir Tours | Sandhu Travels',
    metaDesc: 'Book your dream trip to Azad Kashmir. Explore Neelum Valley and more.'
  }
];
