import { DataGrid } from '@mui/x-data-grid';
import { getColumns, getRows } from './columns';
import { Product } from '@/products/interfaces';
import getPropsForGrid from './getPropsForGrid';

interface ProductDataGridProps {
  rowSelected: Product;
  products: Product[];
  setRowSelected:(row: Product) => void;
  formik: any;
}

export const ProductDataGrid = ({
  rowSelected,
  products,
  setRowSelected,
  formik,
}: ProductDataGridProps) => {
  return (
    <>
      <DataGrid
        disableColumnSelector
        keepNonExistentRowsSelected
        rowHeight={40}
        loading={false}
        rows={getRows(products)}
        columns={getColumns()}
        sx={getPropsForGrid()}
        getRowId={(row: Product) => row.id}
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        onRowClick={(row) => {
          setRowSelected(row.row);
          formik.setValues(row.row);
        }}
        rowSelectionModel={rowSelected ? [rowSelected.id] : []}
      />
    </>
  );
};

const CustomNoRowsOverlay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-2xl font-bold">No hay productos</div>
    </div>
  );
};
