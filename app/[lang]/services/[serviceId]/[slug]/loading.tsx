
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header Skeleton */}
      <div className="h-20 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
      
      {/* Hero Section Skeleton */}
      <div className="py-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-8 bg-white/20 rounded-lg mb-8 max-w-2xl mx-auto animate-pulse"></div>
          
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-white/20 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="w-12 h-6 bg-white/20 rounded animate-pulse"></div>
            </div>
            <div className="w-24 h-6 bg-white/20 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content Skeleton */}
            <div className="lg:col-span-3">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-12 animate-pulse">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
                    <div className="space-y-3 mb-6">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse">
                          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
                          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
                </div>

                {/* Features Skeleton */}
                <div className="mb-8">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-48 animate-pulse"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse">
                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Countries Skeleton */}
                <div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-56 animate-pulse"></div>
                  <div className="flex flex-wrap gap-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments Section Skeleton */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-8 w-48 animate-pulse"></div>
                
                {/* Comment Form Skeleton */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-6 mb-8 animate-pulse">
                  <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-56 animate-pulse"></div>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      ))}
                    </div>
                    <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    <div className="w-24 h-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Comments List Skeleton */}
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-600 rounded-xl p-6 animate-pulse">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-32 animate-pulse"></div>
                          <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, j) => (
                              <div key={j} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Request Form Skeleton */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 animate-pulse">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-32 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mx-auto animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    ))}
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Contact Info Skeleton */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl p-6 animate-pulse">
                  <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-24 animate-pulse"></div>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}