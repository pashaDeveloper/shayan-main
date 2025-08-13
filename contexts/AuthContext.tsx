'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check against stored users or default admin
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = storedUsers.find((u: any) => u.email === email && u.password === password);
    
    // Default admin account
    if (email === 'admin@2shigroup.com' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin',
        name: 'مدیر سیستم',
        email: 'admin@2shigroup.com',
        role: 'admin',
        createdAt: new Date().toISOString()
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      setIsLoading(false);
      return true;
    }
    
    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone,
        role: 'user',
        createdAt: foundUser.createdAt
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = storedUsers.find((u: any) => u.email === userData.email);
    
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    
    // Auto login after registration
    const userForState: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: 'user',
      createdAt: newUser.createdAt
    };
    
    setUser(userForState);
    localStorage.setItem('user', JSON.stringify(userForState));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Update in users array if exists
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = storedUsers.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      storedUsers[userIndex] = { ...storedUsers[userIndex], ...userData };
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
    
    setIsLoading(false);
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}