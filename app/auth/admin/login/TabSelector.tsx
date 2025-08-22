import React from 'react';

interface TabSelectorProps {
  activeTab: 'email' | 'phone';
  onTabChange: (tab: 'email' | 'phone') => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => (
  <div className="flex mb-6 bg-gray-100 rounded-lg p-2 gap-x-1">
    <button
      className={`flex-1 py-2 text-center rounded-md transition-all ${
        activeTab === 'email' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'
      }`}
      onClick={() => onTabChange('email')}
    >
      ایمیل
    </button>
    <button
      className={`flex-1 py-2 text-center rounded-md transition-all ${
        activeTab === 'phone' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'
      }`}
      onClick={() => onTabChange('phone')}
    >
      شماره موبایل
    </button>
  </div>
);

export default TabSelector;