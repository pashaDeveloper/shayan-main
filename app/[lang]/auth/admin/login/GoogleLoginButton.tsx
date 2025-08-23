import React from 'react';
import { signIn } from 'next-auth/react';

interface GoogleLoginButtonProps {
  callbackUrl?: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ callbackUrl = '/dashboard' }) => (
  <button
    onClick={() => signIn('google', { callbackUrl })}
    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg mb-6 hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.24 10.493v1.937h5.532c-.224 1.195-.898 2.21-1.898 2.896l3.063 2.364c1.799-1.665 2.837-4.078 2.837-6.917 0-.642-.057-1.267-.162-1.87h-9.372z" fill="#4285F4"/>
      <path d="M12 20c3.042 0 5.592-1.008 7.463-2.73l-3.063-2.364c-.834.558-1.898 1.008-3.4 1.008-2.61 0-4.83-1.764-5.62-4.137H3.82v2.593A9.996 9.996 0 0012 20z" fill="#34A853"/>
      <path d="M6.38 13.137c-.198-.595-.31-1.232-.31-1.887s.112-1.292.31-1.887V7.07H3.82A9.996 9.996 0 002 12c0 1.762.566 3.392 1.82 4.73l2.56-1.593z" fill="#FBBC05"/>
      <path d="M12 4c1.62 0 3.067.558 4.216 1.645l3.162-3.162C17.592 1.008 15.042 0 12 0 7.37 0 3.343 2.645 1.82 6.37l2.56 1.593C5.17 5.59 7.39 3.827 12 3.827z" fill="#EA4335"/>
    </svg>
    ورود با گوگل
  </button>
);

export default GoogleLoginButton;