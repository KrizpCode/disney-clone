import styled from 'styled-components';

const Detail = () => {
	return (
		<Container>
			<Background>
				<img
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"
					alt=""
				/>
			</Background>

			<ImageTitle>
				<img
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78"
					alt=""
				/>
			</ImageTitle>
			<ContentMeta>
				<Controls>
					<Player>
						<img src="/images/play-icon-black.png" alt="" />
						<span>Play</span>
					</Player>
					<Trailer>
						<img src="/images/play-icon-white.png" alt="" />
						<span>Trailer</span>
					</Trailer>
					<AddList>
						<span />
						<span />
					</AddList>
				</Controls>
			</ContentMeta>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
	position: fixed;
	left: 0px;
	right: 0px;
	top: 0px;
	opacity: 0.8;
	z-index: -1;

	img {
		width: 100vw;
		height: 100vh;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`;

const ImageTitle = styled.div`
	display: flex;
	align-items: flex-end;
	-webkit-box-pack: start;
	justify-content: flex-start;
	margin-left: auto;
	margin-right: auto;
	height: 30vw;
	min-height: 170px;
	padding-bottom: 24px;
	width: 100%;

	img {
		max-width: 600px;
		min-width: 200px;
		width: 35vw;
	}
`;

const ContentMeta = styled.div`
	max-width: 874px;
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	margin: 24px 0;
	min-height: 56px;
`;

const Player = styled.button`
	font-size: 15px;
	margin: 0 22px 0 0;
	padding: 0 24px;
	height: 56px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	text-transform: uppercase;
	background: rgb(249, 249, 249);
	border: none;
	color: rgb(0, 0, 0);

	img {
		width: 32px;
	}

	&:hover {
		background: rgb(198, 198, 198);
	}

	@media (max-width: 768px) {
		height: 45px;
		padding: 0 12px;
		font-size: 12px;
		margin-right: 10px;

		img {
			width: 25px;
		}
	}
`;

const Trailer = styled(Player)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;

const AddList = styled.div`
	margin-right: 16px;
	height: 44px;
	width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 50%;
	border: 2px solid white;
	cursor: pointer;

	span {
		background-color: rgb(249, 249, 249);
		display: inline-block;

		&:first-child {
			height: 2px;
			transform: translate(1px, 0px) rotate(0deg);
			width: 16px;
		}

		&:nth-child(2) {
			height: 16px;
			transform: translateX(-8px) rotate(0deg);
			width: 2px;
		}
	}
`;

export default Detail;
