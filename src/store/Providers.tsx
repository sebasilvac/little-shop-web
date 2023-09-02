'use client';

import { Provider } from 'react-redux';
import { store } from './';
import { useEffect } from 'react';
import { setFavorites } from './slices/pokemons';

interface Props {
  children: React.ReactNode,
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}' );
    store.dispatch(setFavorites(favorites));
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
