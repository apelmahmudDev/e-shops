import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// state.cart = [...state.cart, action.payload}];
			const product = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === product._id);

			if (matchProduct?.quantity) {
				matchProduct.quantity++;
			} else {
				state.cart = [...state.cart, { ...product, quantity: 1 }];
			}

			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
