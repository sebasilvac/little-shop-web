import { TextField } from '@mui/material';
import React from 'react';
import { useSearchFilter } from '@/hooks';
import { Product } from '@/products/interfaces';
import { useAppSelector } from '@/store';

const t = (key: string) => key;

interface IInputSearch {
  updateResults: (items: Product[]) => void;
}

export const InputSearch = ({
  updateResults,
}: IInputSearch) => {
  const productsState = useAppSelector((state) => state.products);

  const { searchFilter, setSearchFilter } = useSearchFilter<Product>({
    listItems: productsState.products,
    updateItemsList: updateResults,
    SEARCH_BY: ['code', 'title', 'description', 'price'],
  });

  return (
    <>
      <TextField
        size="small"
        className="m-1"
        fullWidth
        label={t('Buscar')}
        value={searchFilter}
        onChange={async (e) => {
          e.preventDefault();
          setSearchFilter(e.currentTarget.value);
        }}
      />
    </>
  );
};
