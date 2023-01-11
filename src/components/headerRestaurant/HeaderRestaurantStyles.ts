import styled from 'styled-components';
import { Breakpoints } from '../../theme/breakpoints';


export const WrapperBanner = styled.section`
  	background-color: #40464F;
`;

export const WrapperLogo = styled.div`
	padding: 20px 30px;
	max-width: 1360px;
	max-height: 188px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 122px;
`;

export const Logo = styled.div`
	max-width: 378px;
	max-height: 188px;
`;

export const Span = styled.span`
	max-width: 1440px;
	display: block;
	height: 1px;
	background: #5C6168;
	mix-blend-mode: normal;
`;

export const WrapperLinkSocial = styled.div`
    margin: 10px 45px 10px 10px;
	max-width: 1360px;
	max-height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px; 
`;

export const WrapperLink = styled.div`
	max-width: 796px;
	max-height: 70px;
`;

export const WrapperSocial = styled.div`
    margin: 20px 10px 10px 10px;
	max-height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: 20px; 
`;

export const LinkYellow = styled.a`
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 0.2px;
	color: #E1B168;
`;

export const LinkWhite = styled(LinkYellow)`
	color: #FFFFFF;
`;


export const Link = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: start;
	margin: 20px;
	list-style-type: none;
	gap: 55px;   
	}
`;


export const WrapperWelcome = styled.div`
	margin: 10px 45px 10px 10px;
	max-width: 1440px;
	max-height: 810px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px; 

	h1{ 
		margin: 150px 0px 10px 25px;
		text-align: start;
		font-family: 'Cormorant Infant';
		font-style: normal;
		font-weight: 400;
		font-size: 100px;
		line-height: 110px;
		letter-spacing: 0.2px;
		color: #FFFFFF;
	}
	h2{
		margin: 40px 0px 10px 25px;
		text-align: start;
		max-width: 600px;
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 0.2px;
		color: #FFFFFF;
	}
`;


export const WrapperTitle = styled.div`
	margin: 0; 
	max-width: 665px;

	}
`;



export const WrapperImg = styled.div`
	margin: 0; 
	max-width: 665px;

	}
	`;