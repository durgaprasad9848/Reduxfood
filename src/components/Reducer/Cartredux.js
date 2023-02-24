import { createSlice } from "@reduxjs/toolkit";

import { DATA } from "../DATA";

const cartRedux = createSlice({
  name: "Cartreducer",
  initialState: {
    showCart: true,
    cartCount: 0,
    items: [],
  },
  reducers: {
    change: (state) => {
      state.showCart = !state.showCart;
    },
    add: (state, action) => {
      var newItem = action.payload;

      var existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      }
      state.cartCount++;
    },
    remove: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
      state.cartCount--;
    },
  },
});

export const { change, add, remove } = cartRedux.actions;
export default cartRedux.reducer;
