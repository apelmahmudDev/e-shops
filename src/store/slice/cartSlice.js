import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	subTotal: 0,
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

			// calculation of subTotal
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(product) => product._id !== action.payload
			);
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},

		quantityIncrement: (state, action) => {
			const productId = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === productId);
			if (matchProduct?.quantity) {
				matchProduct.quantity++;
			}

			// calculation of subTotal
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},

		quantityDecrement: (state, action) => {
			const productId = action.payload;
			const matchProduct = state.cart.find((pd) => pd._id === productId);
			if (matchProduct?.quantity) {
				matchProduct.quantity--;
			}

			// calculation of subTotal
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	removeFromCart,
	quantityIncrement,
	quantityDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
