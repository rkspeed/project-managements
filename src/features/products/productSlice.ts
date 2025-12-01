import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../services/apiClient";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  active: boolean;
  rating: number;
  image: string;
  description: string;
}

interface ProductState {
  items: Product[];
  status: "idle" | "loading" | "failed";
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  items: [],
  status: "idle",
  selectedProduct: null
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await api.get("/products");
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = "failed";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id: string) => {
    const res = await api.get(`/products/${id}`);
    console.log(res.data);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async (payload: { id: number; stock: number; active: boolean }) => {
    const response = await api.patch(`/products/${payload.id}`, {
      stock: payload.stock,
      active: payload.active,
    });

    return response.data;
  }
);


export default productSlice.reducer;
