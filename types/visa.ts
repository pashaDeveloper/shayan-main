export interface Visa {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  country: string;
  type: 'tourist' | 'business' | 'student' | 'work' | 'transit';
  processingTime: string;
  validity: string;
  price: number;
  currency: string;
  requirements: string[];
  documents: Document[];
  roadmap: RoadmapStep[];
  faqs: FAQ[];
  views: number;
  likes: number;
  rating: number;
  totalRatings: number;
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  required: boolean;
  format?: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  completed?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface VisaComment {
  id: string;
  visaId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  likes: number;
  replies: VisaCommentReply[];
  createdAt: string;
}

export interface VisaCommentReply {
  id: string;
  commentId: string;
  userName: string;
  userAvatar?: string;
  reply: string;
  createdAt: string;
}

export interface VisaRequest {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  travelDate: string;
  purpose: string;
  message?: string;
}

export interface VisaFilters {
  search?: string;
  country?: string;
  type?: string;
  sortBy?: 'newest' | 'mostViewed' | 'leastViewed' | 'mostLiked' | 'leastLiked';
}