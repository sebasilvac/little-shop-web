'use client';

import { useEffect, useState } from 'react';
import { Loading, Sidebar } from '../../components';
import { useAppDispatch, useAppSelector } from '@/store';
import { getProfile } from '@/store/slices/users';
import { useLogin } from '../../hooks';
import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const usersState = useAppSelector((state) => state.users);
  
  const { isLogin } = useLogin();

  const [loading , setLoading] = useState(true);

  useEffect(() => {
    if(!isLogin()) redirect('/login');
    dispatch(getProfile());
    setLoading(false);
  }, []);

  if(loading) {
    return <Loading />
  }

  return (
    <div className="bg-slate-50 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />

        <div className="w-3/4 text-slate-900">{children}</div>
      </div>
    </div>
  );
}
