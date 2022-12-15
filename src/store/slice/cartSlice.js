import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === product._id);

			if (matchProduct?.quantity) {
				matchProduct.quantity++;
			} else {
				state.cart = [...state.cart, { ...product, quantity: 1 }];
			}
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(product) => product._id !== action.payload
			);
		},

		quantityIncrement: (state, action) => {
			const productId = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === productId);
			if (matchProduct?.quantity) {
				matchProduct.quantity++;
			}
		},

		quantityDecrement: (state, action) => {
			const productId = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === productId);
			if (matchProduct?.quantity > 1) {
				matchProduct.quantity--;
			} else {
				state.cart = state.cart.filter((product) => product._id !== productId);
			}
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	quantityIncrement,
	quantityDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
