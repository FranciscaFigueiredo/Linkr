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
`;

const Title = styled.h1`
	width: 70vw;
	
    font-size: 65px;
	font-family: 'Passion One', cursive;
	font-weight: bold;
	text-align: center;

	margin: 0 auto;
`;

const Description = styled.h2`
	width: 70vw;

    font-size: 23px;
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	line-height: 34px;
	text-align: center;

	margin: 0 auto;
`;

export {
    Introduction,
    Title,
	Description,
}
