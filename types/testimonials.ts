
export type TestimonialServiceKey =
  | 'work_visa'
  | 'real_estate'
  | 'company_registration'
  | 'student_visa';

export interface Testimonial {
  id: number;
  name: string;
  service: TestimonialServiceKey;
  rating: number;
  avatar: string;
  text: string;
}

export interface TestimonialsData {
  [language: string]: {
    testimonials: Testimonial[];
  };
}

export interface TestimonialsTranslation {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAll: string;
  services: {
    [key in TestimonialServiceKey]: string;
  };
}