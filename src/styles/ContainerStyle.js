import styled from "styled-components"

const PageContainer = styled.div`
	width: 100vw;
    height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	margin: 0 auto;

    position: relative;

	@media (min-width: 611px) {
		flex-direction: row;
	}
`;

export {
    PageContainer,
}
