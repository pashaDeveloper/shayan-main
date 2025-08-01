'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, Download, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';
import tr from '@/translations/tr.json';
import galleryData from '@/data/gallery.json';
import { GalleryData, GalleryTranslation } from '@/types/gallery';
import { cn } from '@/lib/utils';

const translations = { fa, en, ar, tr } as {
  [key: string]: { gallery: GalleryTranslation };
};

type Props = {
  lang: string;
};

const GallerySection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const t = translations[currentLang]?.gallery || translations.en.gallery;
  const { items, moreItems, categories } = (galleryData as GalleryData)[currentLang] || galleryData.en;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [showMore, setShowMore] = useState(false);
  const [allItems, setAllItems] = useState(items);

  const filteredItems = selectedCategory === categories[0]
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  const handleLoadMore = () => {
    if (!showMore) {
      setAllItems([...items, ...moreItems]);
      setShowMore(true);
    }
  };

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      case 'medium':
        return 'row-span-1';
      case 'square':
      default:
        return 'row-span-1';
    }
  };

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedItems = new Set(likedItems);
    if (likedItems.has(id)) {
      newLikedItems.delete(id);
    } else {
      newLikedItems.add(id);
    }
    setLikedItems(newLikedItems);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.share?.({ title: t.sectionTitle, url: window.location.href });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto gap-3 mb-12 px-2 no-scrollbar">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={cn(
                'rounded-full py-1 transition-all h-8 duration-300 flex-shrink-0',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg'
                  : 'hover:bg-muted hover:border-primary/50'
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[150px] md:auto-rows-[250px]">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card
                  className={cn(
                    'group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300',
                    getAspectRatioClass(item.aspectRatio)
                  )}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-foreground border-0">
                      {item.category}
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80 mb-3">{item.location}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm">
                          <Heart
                            className={cn(
                              'w-4 h-4 cursor-pointer transition-colors',
                              likedItems.has(item.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-white hover:text-red-400'
                            )}
                            onClick={(e) => handleLike(item.id, e)}
                          />
                          <span>{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-white hover:bg-white/20"
                          onClick={handleShare}
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>

              {/* Full Size Image Dialog */}
              <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/95 border-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  {selectedImage && (
                    <div className="w-full h-full flex flex-col">
                      <div className="flex-1 flex items-center justify-center p-8">
                        <img
                          src={filteredItems.find(item => item.id === selectedImage)?.src}
                          alt={filteredItems.find(item => item.id === selectedImage)?.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm p-6 text-white">
                        <div className="max-w-5xl mx-auto flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">
                              {filteredItems.find(item => item.id === selectedImage)?.title}
                            </h3>
                            <p className="text-white/80">
                              {filteredItems.find(item => item.id === selectedImage)?.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Heart
                                className={cn(
                                  'w-5 h-5 cursor-pointer transition-colors',
                                  selectedImage && likedItems.has(selectedImage)
                                    ? 'fill-red-500 text-red-500'
                                    : 'text-white hover:text-red-400'
                                )}
                                onClick={(e) => selectedImage && handleLike(selectedImage, e)}
                              />
                              <span>
                                {(filteredItems.find(item => item.id === selectedImage)?.likes || 0) +
                                 (selectedImage && likedItems.has(selectedImage) ? 1 : 0)}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white hover:bg-white/20"
                              onClick={handleShare}
                            >
                              <Share2 className="w-4 h-4 ml-2" />
                              {t.share}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white hover:bg-white/20"
                            >
                              <Download className="w-4 h-4 ml-2" />
                              {t.download}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-0 transition-all duration-300"
            onClick={handleLoadMore}
            disabled={showMore}
          >
            {showMore ? t.allImagesLoaded : t.loadMore}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;