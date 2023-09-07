import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, SelectedProduct } from '@/products';
import { productService as Service } from '@/services';



interface PokemonState {
  products: Product[];
  selectedProducts: SelectedProduct[];
  total: number;
}

const initialState: PokemonState = {
  products: [],
  selectedProducts: [],
  total: 0,
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
    addProductPicking(state, action: PayloadAction<Product>) {

      const index = state.selectedProducts.findIndex((product) => product.id === action.payload.id);

      console.log('index', index)

      if (index !== -1) {
        state.selectedProducts[index].quantity += 1;
        state.selectedProducts[index].total += state.selectedProducts[index].price;
        return;
      }

      state.selectedProducts.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
        total: action.payload.price,
      });

      state.total += action.payload.price;
    },
    deleteProductPicking(state, action: PayloadAction<Product>) {
      const index = state.selectedProducts.findIndex((product) => product.id === action.payload.id);
      
      if (state.selectedProducts[index].quantity > 1) {
        state.selectedProducts[index].quantity -= 1;
        state.selectedProducts[index].total -= state.selectedProducts[index].price;
      } else {
        state.selectedProducts.splice(index, 1);
      }
    }
  },
});

export const getAllProducts = createAsyncThunk('areas/getAll', async () => {
  return await Service.getAll();
});

export const { setProducts, addProductPicking, deleteProductPicking } = productSlice.actions;
export default productSlice.reducer;
