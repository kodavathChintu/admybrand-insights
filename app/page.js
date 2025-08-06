'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      router.replace('/login');
    } else {
      router.replace('/dashboard');
    }
  }, [router]);

  return null; // No UI needed, just redirect
}