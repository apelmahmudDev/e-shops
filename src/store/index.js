import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		cart: cartReducer,
		user: userReducer,
	},
});
