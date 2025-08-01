
export interface Stat {
  number: string;
  suffix: string;
  labelKey: 'servicesCount' | 'customersCount' | 'countriesCount' | 'experienceYears';
  icon: 'CheckCircle' | 'Users' | 'Globe' | 'Award';
  color: string;
}

export interface RatingCard {
  rating: string;
  text: string;
}

export interface AboutData {
  [language: string]: {
    stats: Stat[];
    features: string[];
    ratingCard: RatingCard;
  };
}

export interface AboutTranslation {
  aboutTitle: string;
  aboutSubtitle: string;
  featuresTitle: string;
  servicesCount: string;
  customersCount: string;
  countriesCount: string;
  experienceYears: string;
  [key: string]: string; // Index signature to allow dynamic key access
}