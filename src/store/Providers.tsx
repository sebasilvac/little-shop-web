'use client';

import { Provider } from 'react-redux';
import { store } from './';
import { useEffect } from 'react';
import { setFavorites } from './slices/pokemons';

import { SnackbarProvider } from 'notistack';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('favorite-pokemons') ?? '{}',
    );
    store.dispatch(setFavorites(favorites));
  }, []);

  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        maxSnack={2}
      >
        {children}
      </SnackbarProvider>
    </Provider>
  );
};
