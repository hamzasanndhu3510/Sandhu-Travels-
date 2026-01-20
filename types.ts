
export enum Region {
  KPK = 'Khyber Pakhtunkhwa (KPK)',
  GILGIT_BALTISTAN = 'Gilgit-Baltistan',
  AZAD_KASHMIR = 'Azad Kashmir'
}

export enum Category {
  VALLEY = 'Valley',
  LAKE = 'Lake',
  PASS = 'Pass',
  TREK = 'Trek'
}

export interface Tour {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  departureDays: string[];
  price: number;
  image: string;
  category?: Category;
  region: Region;
  tags: string[];
  bestSeason: string;
  accessibility: string;
}

export interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  tourId: string;
  travelDate: string;
  persons: number;
  packageType: 'Standard' | 'Premium' | 'Luxury';
  message?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}
