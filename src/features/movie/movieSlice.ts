import { createSlice } from '@reduxjs/toolkit';

interface Movie {
	id: string;
	backgroundImg?: string;
	cardImg?: string;
	description?: string;
	subTitle?: string;
	title?: string;
	titleImg?: string;
	type?: string;
}

const initialState = {
	recommend: null,
	newDisney: null,
	original: null,
	trending: null,
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.recommend = action.payload.recommend;
			state.newDisney = action.payload.newDisney;
			state.original = action.payload.original;
			state.trending = action.payload.trending;
		},
	},
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state: { movie: { recommend: Movie[] } }) =>
	state.movie.recommend;
export const selectNewDisney = (state: { movie: { newDisney: Movie[] } }) =>
	state.movie.newDisney;
export const selectOriginal = (state: { movie: { original: Movie[] } }) =>
	state.movie.original;
export const selectTrending = (state: { movie: { trending: Movie[] } }) =>
	state.movie.trending;

export default movieSlice.reducer;
