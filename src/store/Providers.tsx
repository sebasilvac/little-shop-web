'use client';

import { Provider } from 'react-redux';
import { store } from '.';

import { SnackbarProvider } from 'notistack';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
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
