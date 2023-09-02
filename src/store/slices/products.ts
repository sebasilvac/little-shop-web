import { Product } from '@/products';
import { productService as Service } from '@/services';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface PokemonState {
  products: Product[];
}

const initialState: PokemonState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllProducts.fulfilled,
        (state, action: { type: string; payload: Product[] }) => {
          state.products = action.payload;
        },
      )
  },
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const getAllProducts = createAsyncThunk('areas/getAll', async () => {
  return await Service.getAll();
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
