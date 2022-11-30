import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		name: "Steve jobs",
		email: "steve@gmail.com",
		phone: "+88 288565247",
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
