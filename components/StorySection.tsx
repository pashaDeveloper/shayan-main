"use client";

import { useState } from "react";
import {
  Calendar,
  X,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface Story {
  id: number;
  title: string;
  content: string;
  category: string;
  type: "video" | "image";
  media: string;
  author: string;
  date: string;
  avatar: string;
  color: string;
  duration?: number;
}





export default function StoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t, isRTL } = useLanguage();
const stories: Story[] = [
  {
    id: 1,
    title: "",
    content: "",
    type: "image",
    category: t("story.introduction"), 
    media: "./assets/story/intro/1.jpg",
    author: t("story.author.sara_ahmadi"),
    date: "1403/01/14",
    avatar: "/assets/story/admins/1.webp",
    color: "from-emerald-500 to-emerald-700",
    duration: 10,
  },
  {
    id: 2,
    title: "",
    content: "",
    type: "video",
    category: t("story.introduction"),
    media: "./assets/story/intro/2.mp4",
    author: t("story.author.sara_ahmadi"),
    date: "1403/01/14",
    avatar: "/assets/story/admins/1.webp",
    color: "from-emerald-500 to-emerald-700",
    duration: 10,
  },
  {
    id: 3,
    title: "",
    content: "",
    category: t("story.migration"),
    type: "video",
    media: "./assets/story/migration/1.mp4",
    author: "",
    date: "1403/01/15",
    avatar: "/assets/story/admins/2.webp",
    color: "from-blue-500 to-blue-700",
    duration: 15,
  },
  {
    id: 4,
    title: "",
    content: "",
    category: t("story.residency"),
    type: "image",
    media: "./assets/story/residency/1.jpg",
    author: t("story.author.maryam_rezaei"),
    date: "1403/01/12",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    color: "from-violet-500 to-violet-700",
    duration: 10,
  },
  {
    id: 5,
    title: "",
    content: "",
    category: t("story.residency"),
    type: "image",
    media: "./assets/story/residency/2.jpg",
    author: "",
    date: "1403/01/11",
    avatar: "/assets/story/admins/3.webp",
    color: "from-blue-500 to-blue-700",
    duration: 10,
  },
  {
    id: 6,
    title: t("story.titles.market_analysis"),
    content: t("story.contents.market_analysis"),
    category: t("story.residency"),
    type: "image",
    media: "./assets/story/residency/3.jpg",
    author: "",
    date: "1403/01/10",
    avatar: "/assets/story/admins/3.webp",
    color: "from-emerald-500 to-emerald-700",
    duration: 15,
  },
  {
    id: 7,
    title: "",
    content: "",
    category: t("story.visa"),
    type: "image",
    media: "./assets/story/visa/1.jpg",
    author: "",
    date: "1403/01/13",
    avatar: "/assets/story/admins/2.webp",
    color: "from-orange-500 to-orange-700",
    duration: 12,
  },
  {
    id: 8,
    title: "",
    content: "",
    category: t("story.visa"),
    type: "image",
    media: "./assets/story/visa/2.jpg",
    author: "",
    date: "1403/01/13",
    avatar: "/assets/story/admins/2.webp",
    color: "from-orange-500 to-orange-700",
    duration: 12,
  },
  {
    id: 9,
    title: "",
    content: "",
    category: t("story.tourism"),
    type: "video",
    media: "./assets/story/trip/1.mp4",
    author: "",
    date: "1403/01/13",
    avatar: "/assets/story/admins/3.webp",
    color: "from-orange-500 to-orange-700",
    duration: 12,
  },
  {
    id: 10,
    title: "",
    content: "",
    category: t("story.tourism"),
    type: "video",
    media: "./assets/story/trip/2.mp4",
    author: "",
    date: "1403/01/13",
    avatar: "/assets/story/admins/3.webp",
    color: "from-orange-500 to-orange-700",
    duration: 12,
  },
  {
    id: 11,
    title: "",
    content: "",
    category: t("story.business"),
    type: "video",
    media: "./assets/story/shop/1.mp4",
    author: "",
    date: "1403/01/13",
    avatar: "/assets/story/admins/4.webp",
    color: "from-orange-500 to-orange-700",
    duration: 12,
  },
];
const groupedStories = Object.values(
  stories.reduce((acc, story) => {
    if (!acc[story.category]) {
      acc[story.category] = story;
    }
    return acc;
  }, {} as Record<string, Story>)
);
  const currentGroupStories = selectedCategory
    ? stories.filter((s) => s.category === selectedCategory)
    : [];

  const currentStory = currentGroupStories[currentStoryIndex];

  const openCategoryStories = (category: string) => {
    setSelectedCategory(category);
    setCurrentStoryIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const closeStory = () => {
    setSelectedCategory(null);
    setProgress(0);
    setIsPlaying(false);
  };

  const nextStory = () => {
    if (currentStoryIndex < currentGroupStories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
    }
  };

  return (
    <section className="py-5   overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto flex-nowrap py-4 px-2 sm:justify-center no-scrollbar">
          {groupedStories.map((story) => (
            <div
              key={story.category}
              onClick={() => openCategoryStories(story.category)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div
                className={`relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr ${story.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    src={story.avatar}
                    alt={story.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {story.type === "video" && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Play className="h-3 w-3 text-white fill-current" />
                  </div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700 mt-2 text-center max-w-20 truncate">
                {story.category}
              </span>
            </div>
          ))}
        </div>

        {selectedCategory && currentStory && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto bg-black">
              <div className="absolute top-4 left-4 right-4 z-20 flex gap-1">
                {currentGroupStories.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-100 ${
                        index < currentStoryIndex
                          ? "w-full"
                          : index === currentStoryIndex
                          ? `w-[${progress}%]`
                          : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="absolute top-12 left-4 right-4 z-20 flex items-center justify-between">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Image
                    width={150}
                    height={150}
                    src={currentStory.avatar}
                    alt={currentStory.author}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {currentStory.author}
                    </p>
                    <p className="text-white/70 text-xs">{currentStory.date}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  {currentStory.type === "video" && (
                    <>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>
                    </>
                  )}
                  <button
                    onClick={closeStory}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative w-full h-full">
                {currentStory.type === "video" ? (
                  <video
                    src={currentStory.media}
                    className="w-full h-full object-cover"
                    autoPlay={isPlaying}
                    muted={isMuted}
                    controls={false}
                    onEnded={nextStory}
                  />
                ) : (
                  <Image
                    width={800}
                    height={1280}
                    src={currentStory.media}
                    alt={currentStory.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">
                  {currentStory.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {currentStory.content}
                </p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-white text-xs font-medium">
                    {currentStory.category}
                  </span>
                </div>
              </div>

              <button
                onClick={prevStory}
                className="absolute ltr:left-0 rtl:right-0 top-0 w-1/3 h-full z-10 flex items-center justify-start pr-4 opacity-0 hover:opacity-100 transition-opacity"
                disabled={currentStoryIndex === 0}
              >
                <ChevronRight className="h-8 w-8 text-white bg-black/50 rounded-full p-1 ltr:rotate-180" />
              </button>

              <button
                onClick={nextStory}
                className="absolute ltr:right-0 rtl:left-0 top-0 w-1/3 h-full z-10 flex items-center justify-end pl-4 opacity-0 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-8 w-8 ltr:rotate-180 text-white bg-black/50 rounded-full p-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
