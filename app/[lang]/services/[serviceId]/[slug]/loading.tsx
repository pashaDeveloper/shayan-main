export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* هدر سکشن */}
      <section className="relative py-20 bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gray-400 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="h-44 w-2/3 mx-auto bg-gray-300 rounded animate-pulse mb-4" />
          <div className="h-6 w-1/2 mx-auto bg-gray-300 rounded animate-pulse mb-4" />
          <div className="h-1 w-24 bg-yellow-400 rounded-full mx-auto animate-pulse" />
        </div>
      </section>

      {/* توضیحات */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-8 w-1/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-6" />
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
