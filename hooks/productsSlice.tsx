import { createSlice } from '@reduxjs/toolkit';

type Products = {
  id: string;
  name: string;
  description: string;
};

export interface ProductsState {
  products: Products[];
}

const initialState: ProductsState = {
  products: [],
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
