
export type ServiceKey =
  | 'immigration'
  | 'investment'
  | 'work_visa'
  | 'education'
  | 'residence'
  | 'real_estate'
  | 'consultation'
  | 'documentation'
  | 'business'
  | 'tourism'
  | 'work_permit'
  | 'family_reunion'
  | 'skilled_migration'
  | 'student_visa'
  | 'business_visa'
  | 'trade'
  | 'citizenship';

export interface Representative {
  id: number;
  country: string;
  flag: string;
  city: string;
  position: { top: string; left: string };
  services: ServiceKey[];
  contact: string;
  clients: number;
}

export interface RepresentativesData {
  [language: string]: {
    representatives: Representative[];
  };
}

export interface RepresentativesTranslation {
  sectionTitle: string;
  sectionSubtitle: string;
  servicesLabel: string;
  clientsLabel: string;
  stats: {
    countries: string;
    activeClients: string;
    support: string;
    experience: string;
  };
  services: {
    [key in ServiceKey]: string;
  };
}
