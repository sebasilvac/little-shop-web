import { Product as IResponse } from '../../../interfaces/product';
import { GridValueFormatterParams } from '@mui/x-data-grid';

export const getColumns = (): any[] => {
  return [
    {
      field: 'code',
      headerName: 'C° Barra',
      width: 200,
    },
    {
      field: 'title',
      headerName: 'Nombre',
      width: 400,
    },
    {
      field: 'price',
      headerName: '$ Precio',
      width: 100,
      type: 'number',
    },
    {
      field: 'description',
      headerName: 'Detalle',
      width: 500,
    },
  ];
};

export const getRows = (items: IResponse[]): any[] => {
  return items;
};
