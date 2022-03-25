import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
	}

	body {
		background-color: #333333;
		font-family: 'Lato', sans-serif;
    color: #ffffff;
	}
`;
 
export default GlobalStyle;