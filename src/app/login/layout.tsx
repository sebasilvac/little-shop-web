'use client';

import { useLogin } from '@/hooks';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLogin } = useLogin();

  useEffect(() => {
    if (isLogin()) {
      redirect('/dashboard/products/picking');
    }
  }, []);

  return (
    <div className="bg-blue-300 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div className="w-full h-full text-slate-900">{children}</div>
      </div>
    </div>
  );
}
