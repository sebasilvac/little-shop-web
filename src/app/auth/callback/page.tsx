'use client';

import { redirect, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const callbackPage = () => {
  const searchParam = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('TOKEN_EXPIRADO');
      localStorage.setItem('token', searchParam.get('token') as string);
      localStorage.setItem('email', searchParam.get('email') as string);
    }

    setLoading(false);
  }, []);
  
  if(loading) return (<h1>Loading...</h1>);
  redirect('/dashboard/main');
}

export default callbackPage;