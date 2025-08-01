
export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  likes: number;
  location: string;
  aspectRatio: 'tall' | 'wide' | 'medium' | 'square';
}

export interface GalleryData {
  [language: string]: {
    items: GalleryItem[];
    moreItems: GalleryItem[];
    categories: string[];
  };
}

export interface GalleryTranslation {
  sectionTitle: string;
  sectionSubtitle: string;
  loadMore: string;
  allImagesLoaded: string;
  share: string;
  download: string;
}
