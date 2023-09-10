import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { DateTime } from 'luxon';

const t = (key: string) => key;

interface IUseSearchFilter<T> {
  listItems: T[];
  updateItemsList: (items: T[]) => void;
  SEARCH_BY: string[];
}

function useSearchFilter<T extends IState>({
  listItems,
  updateItemsList,
  SEARCH_BY,
}: IUseSearchFilter<T>) {
  const CHARACTERS = 1;
  const [searchFilter, setSearchFilter] = useState<string>('');

  useEffect(() => {
    if (!searchFilter){
      return;
    }

    if (searchFilter.length <= CHARACTERS){
      updateItemsList(listItems);
      return;
    }

    filterItems();
  }, [searchFilter]);

  const filterItems = () => {
    const filterItems = listItems.filter((item) => {
      return findIn(searchFilter, item, SEARCH_BY);
    });

    updateItemsList(filterItems);
  };

  

  const InputSearchFilter = () => (
    <>
      <TextField
        size="small"
        className="m-1"
        fullWidth
        label={t('Buscar')}
        value={searchFilter}
        onChange={async (e) => {
          e.preventDefault();

          console.log('setSearchFilter', e.currentTarget.value);
          setSearchFilter(e.currentTarget.value);
        }}
      />
    </>
  );

  return {
    InputSearchFilter,
    searchFilter,
    setSearchFilter,
  };
}

const findIn = (textSearch: string, item: any, fiels: string[]) => {
  let result: boolean = false;
  fiels.forEach((field) => {
    if(!item[field]) return;

    let data = item[field];
    if(isDateValue(item[field])) {
      data = DateTime.fromISO(item[field]).toFormat('dd-MM-yyyy');
    }

    if (matchBy(textSearch, data)) {
      result = true;
    }
  });
  return result;
};

const matchBy = (search: string, textIn: string) => {
  if (!textIn) {
    return false;
  }

  const find = `${search}`.toLowerCase();
  const text = `${textIn}`.toLowerCase();
  const result = text.search(find);
  return result != -1;
};

const isDateValue = (date: any) => {
  if( String(date).split('-').length < 2 ){
    return false;
  } 

  const result = DateTime.fromISO(date).toFormat('dd-MM-yyyy');
  return result != 'Invalid DateTime' ;
}

export default useSearchFilter;
