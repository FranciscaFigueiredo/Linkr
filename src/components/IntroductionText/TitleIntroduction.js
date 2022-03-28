import styled from "styled-components"

const Introduction = styled.div`
	width: 100vw;
    height: 30vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: rgba(21, 21, 21, 1);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	margin: 0 auto 30px;

	@media (min-width: 611px) {
		width: 60vw;
		height: 100vh;

		margin: 0;
	}
`;

const Title = styled.h1`
	width: 70vw;
	
    font-size: 65px;
	font-family: 'Passion One', cursive;
	font-weight: bold;
	text-align: center;

	margin: 0 auto;

	@media (min-width: 611px) and (max-width: 1000px){
		width: 40vw;

		font-size: 80px;
		text-align: left;
	}

	@media (min-width: 1000px) and (max-width: 3000px) {
		width: 40vw;

		font-size: 106px;
		text-align: left;
	}	
`;

const Description = styled.h2`
	width: 70vw;

    font-size: 23px;
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	line-height: 34px;
	text-align: center;

	margin: 0 auto;

	@media (min-width: 611px) and (max-width: 1000px) {
		width: 40vw;

		font-size: 30px;
		text-align: left;
	}

	@media (min-width: 1000px) and (max-width: 3000px) {
		width: 40vw;

		font-size: 43px;
		line-height: 40px;
		text-align: left;
	}
`;

export {
    Introduction,
    Title,
	Description,
}
