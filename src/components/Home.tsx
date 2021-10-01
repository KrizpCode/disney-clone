import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

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

const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	let recommends: Movie[] = [];
	let newDisneys: Movie[] = [];
	let originals: Movie[] = [];
	let trending: Movie[] = [];

	useEffect(() => {
		db.collection('movies').onSnapshot((snapshot) => {
			snapshot.docs.forEach((doc) => {
				switch (doc.data().type) {
					case 'recommend':
						// recommends.push({ id: doc.id, ...doc.data() });
						recommends = [...recommends, { id: doc.id, ...doc.data() }];
						break;
					case 'new':
						// newDisneys.push({ id: doc.id, ...doc.data() });
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;
					case 'original':
						// originals.push({ id: doc.id, ...doc.data() });
						originals = [...originals, { id: doc.id, ...doc.data() }];
						break;
					case 'trending':
						// trending.push({ id: doc.id, ...doc.data() });
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});
	}, [userName]);

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url('/images/home-background.png') center center / cover
			no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

export default Home;
