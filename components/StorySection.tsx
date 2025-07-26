'use client';

import { useState } from 'react';
import { Calendar, X, Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  content: string;
  category: string;
  type: 'video' | 'image';
  media: string;
  author: string;
  date: string;
  avatar: string;
  color: string;
  duration?: number;
}

const stories: Story[] = [
  {
    id: 1,
    title: "قوانین جدید مهاجرت کانادا",
    content: "آخرین تغییرات در سیستم امتیازدهی اکسپرس انتری و تأثیر آن بر متقاضیان مهاجرت. این تغییرات شامل افزایش امتیاز برای متقاضیان با تجربه کاری کانادایی و کاهش سن مورد نیاز می‌شود.",
    category: "مهاجرت",
    type: "video",
    media: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg",
    author: "دکتر علیرضا محمدی",
    date: "1403/01/15",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    color: "from-blue-500 to-blue-700",
    duration: 15
  },
  {
    id: 2,
    title: "سرمایه‌گذاری در املاک ترکیه",
    content: "بهترین مناطق استانبول برای خرید ملک و اخذ اقامت. قیمت‌های املاک در مناطق مختلف و پیش‌بینی روند بازار در سال آینده.",
    category: "سرمایه‌گذاری",
    type: "image",
    media: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    author: "مهندس سارا احمدی",
    date: "1403/01/14",
    avatar: "https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg",
    color: "from-emerald-500 to-emerald-700",
    duration: 10
  },
  {
    id: 3,
    title: "پروژه‌های عمرانی دبی",
    content: "گزارش تصویری از جدیدترین پروژه‌های عمرانی دبی و فرصت‌های سرمایه‌گذاری. از برج‌های مسکونی تا مراکز تجاری و پروژه‌های گردشگری.",
    category: "عمران",
    type: "video",
    media: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
    author: "مهندس رضا نوری",
    date: "1403/01/13",
    avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    color: "from-orange-500 to-orange-700",
    duration: 12
  },
  {
    id: 4,
    title: "تکنولوژی نقشه‌کشی",
    content: "استفاده از هوش مصنوعی و تکنولوژی‌های جدید در نقشه‌کشی و طراحی شهری. نرم‌افزارهای پیشرفته و روش‌های نوین طراحی.",
    category: "نقشه‌کشی",
    type: "image",
    media: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    author: "دکتر مریم رضایی",
    date: "1403/01/12",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    color: "from-violet-500 to-violet-700",
    duration: 8
  },
  {
    id: 5,
    title: "تجربه موفق مهاجرت",
    content: "داستان موفقیت خانواده‌ای که با سرمایه‌گذاری به کانادا مهاجرت کردند. از انتخاب مسیر تا اخذ اقامت دائم و شروع زندگی جدید.",
    category: "مهاجرت",
    type: "video",
    media: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
    author: "خانواده محمدزاده",
    date: "1403/01/11",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    color: "from-blue-500 to-blue-700",
    duration: 20
  },
  {
    id: 6,
    title: "آنالیز بازار املاک",
    content: "بررسی روند قیمت مسکن در شهرهای مختلف و پیش‌بینی تغییرات آینده. تحلیل آماری و نمودارهای قیمتی.",
    category: "سرمایه‌گذاری",
    type: "image",
    media: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    author: "تیم تحلیل بازار",
    date: "1403/01/10",
    avatar: "https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg",
    color: "from-emerald-500 to-emerald-700",
    duration: 15
  }
];

export default function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const openStory = (storyId: number) => {
    const index = stories.findIndex(story => story.id === storyId);
    setCurrentStoryIndex(index);
    setSelectedStory(storyId);
    setProgress(0);
    setIsPlaying(true);
  };

  const closeStory = () => {
    setSelectedStory(null);
    setProgress(0);
    setIsPlaying(false);
  };

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      const nextIndex = currentStoryIndex + 1;
      setCurrentStoryIndex(nextIndex);
      setSelectedStory(stories[nextIndex].id);
      setProgress(0);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      const prevIndex = currentStoryIndex - 1;
      setCurrentStoryIndex(prevIndex);
      setSelectedStory(stories[prevIndex].id);
      setProgress(0);
    }
  };

  const currentStory = stories[currentStoryIndex];

  return (
<section
  className="py-5 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Stories Circles */}
<div className="flex gap-6 overflow-x-auto flex-nowrap  py-4 px-2 sm:justify-center hide-scrollbar">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => openStory(story.id)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className={`relative w-20 h-20 rounded-full p-1 bg-gradient-to-tr ${story.color} group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {story.type === 'video' && (
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

        {/* Full Screen Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            {/* Story Content */}
            <div className="relative w-full h-full max-w-md mx-auto bg-black">
              
              {/* Progress Bars */}
              <div className="absolute top-4 left-4 right-4 z-20 flex gap-1">
                {stories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-white transition-all duration-100 ${
                        index < currentStoryIndex ? 'w-full' : 
                        index === currentStoryIndex ? `w-[${progress}%]` : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Header */}
              <div className="absolute top-12 left-4 right-4 z-20 flex items-center justify-between">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <img
                    src={currentStory.avatar}
                    alt={currentStory.author}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{currentStory.author}</p>
                    <p className="text-white/70 text-xs">{currentStory.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse">
                  {currentStory.type === 'video' && (
                    <>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
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

              {/* Story Media */}
              <div className="relative w-full h-full">
                <img
                  src={currentStory.media}
                  alt={currentStory.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentStory.color} opacity-20`} />
              </div>

              {/* Story Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">{currentStory.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{currentStory.content}</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-white text-xs font-medium">{currentStory.category}</span>
                </div>
              </div>

              {/* Navigation Areas */}
              <button
                onClick={prevStory}
                className="absolute left-0 top-0 w-1/3 h-full z-10 flex items-center justify-start pl-4 opacity-0 hover:opacity-100 transition-opacity"
                disabled={currentStoryIndex === 0}
              >
                <ChevronRight className="h-8 w-8 text-white bg-black/50 rounded-full p-1" />
              </button>
              
              <button
                onClick={nextStory}
                className="absolute right-0 top-0 w-1/3 h-full z-10 flex items-center justify-end pr-4 opacity-0 hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="h-8 w-8 text-white bg-black/50 rounded-full p-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}