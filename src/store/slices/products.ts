import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, SelectedProduct } from '@/products';
import { productService as Service } from '@/services';

interface ProductState {
  products: Product[];
  selectedProducts: SelectedProduct[];
  filterdValues: Product[];
}

const initialState: ProductState = {
  products: [],
  selectedProducts: [],
  filterdValues: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllProducts.fulfilled,
        (state, action: { type: string; payload: any }) => {
          state.products = action.payload;
          state.filterdValues = action.payload;
        },
      );
  },
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilteredValues(state, action: PayloadAction<Product[]>) {
      state.filterdValues = action.payload;
    },
    addProductPicking(state, action: PayloadAction<Product>) {
      const index = state.selectedProducts.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (index !== -1) {
        state.selectedProducts[index].quantity += 1;
        state.selectedProducts[index].total +=
          state.selectedProducts[index].price;
        return;
      }

      state.selectedProducts.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
        total: action.payload.price,
      });
    },
    deleteProductPicking(state, action: PayloadAction<Product>) {
      const index = state.selectedProducts.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (state.selectedProducts[index].quantity > 1) {
        state.selectedProducts[index].quantity -= 1;
        state.selectedProducts[index].total -=
          state.selectedProducts[index].price;
      } else {
        state.selectedProducts.splice(index, 1);
      }
    },
    resetProductPicking(state) {
      state.selectedProducts = [];
    },
  },
});

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  return await Service.getAll();
});

export const {
  setProducts,
  setFilteredValues,
  addProductPicking,
  deleteProductPicking,
  resetProductPicking,
} = productSlice.actions;
export default productSlice.reducer;
