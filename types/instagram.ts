export interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  hashtags: string;
}

export interface InstagramData {
  [language: string]: {
    posts: InstagramPost[];
  };
}

export interface InstagramTranslation {
  sectionTitle: string;
  sectionSubtitle: string;
  accountName: string;
  accountHandle: string;
  accountDescription: string;
  viewOnInstagram: string;
  followOnInstagram: string;
}