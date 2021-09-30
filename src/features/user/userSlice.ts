import { createSlice } from '@reduxjs/toolkit';

interface User {
	name: string | null;
	email: string | null;
	photo: string | null;
}

const initialState: User = {
	name: '',
	email: '',
	photo: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserLoginDetails: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},

		setSignOutState: (state) => {
			state.name = null;
			state.email = null;
			state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state: { user: User }) => state.user.name;
export const selectUserEmail = (state: { user: User }) => state.user.email;
export const selectUserPhoto = (state: { user: User }) => state.user.photo;

export default userSlice.reducer;
