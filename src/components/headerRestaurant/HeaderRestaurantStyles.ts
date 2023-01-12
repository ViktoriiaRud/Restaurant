import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoints';



export const WrapperBanner = styled.section`
  	background-color: #40464F;
`;

export const WrapperLogo = styled.div`
	padding: 5px 5px;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	${breakpoint.lg} {
		padding: 20px 30px;
		max-width: 1360px;
		max-height: 188px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 122px;
	}
`;

export const Logo = styled.div`
	margin-top: 30px;
	max-width: 320px;
	max-height: 188px;

	${breakpoint.lg} {
		margin-top: 0px;
		max-width: 378px;
	}
`;

export const Span = styled.span`
	margin-top: 15px;
	max-width: 320px;
	display: block;
	height: 1px;
	background: #5C6168;
	mix-blend-mode: normal;

	${breakpoint.md} {
		margin-top: 0px;
		max-width: 700px;
	}
	${breakpoint.lg} {
		max-width: 1240px;
	}
	${breakpoint.xl} {
		max-width: 1440px;
	}
`;

export const WrapperLinkSocial = styled.div`
    margin: 10px 0px 10px 10px;
	max-width: 320px;
	display: flex;
	flex-direction: column;
	gap: 10px; 

	${breakpoint.lg} {
		margin: 10px 45px 10px 10px;
		max-width: 1360px;
		max-height: 80px;
		flex-direction: row;
		justify-content: space-between; 
	}

`;

export const WrapperLink = styled.div`
	max-width: 320px;
	${breakpoint.lg} {
		max-width: 796px;
		max-height: 70px;
	}
`;

export const WrapperSocial = styled.div`
    margin: 20px 50px 10px 10px;
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
	flex-direction: column;
	justify-content: start;
	margin-top: 20px;
	list-style-type: none;
	gap: 30px;   
	}

	${breakpoint.lg} {
		flex-direction: row;
		gap: 55px;   
	}
	}
`;


export const WrapperWelcome = styled.div`
    position: relative;
	margin: 10px 45px 10px 10px;
	max-width: 320px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	
	${breakpoint.lg} {
		max-width: 1440px;
		max-height: 810px;
		flex-direction: row;
		justify-content: space-between;	
	}

	h1{ 
		margin: 30px 0px 10px 25px;
		text-align: start;
		font-family: 'Cormorant Infant';
		font-style: normal;
		font-weight: 400;
		font-size: 50px;
		line-height: 110px;
		letter-spacing: 0.2px;
		color: #FFFFFF;

	${breakpoint.md} {
		margin: 100px 0px 10px 25px;
		font-size: 72px;
	}
	${breakpoint.lg} {
		margin: 150px 0px 10px 25px;
		font-size: 86px;
	}

	${breakpoint.xl} {
		margin: 150px 0px 10px 25px;
		font-size: 100px;
	}
	  
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
	margin-top: 25px;
	position: relative:
	margin: 0; 
	max-width: 320px;
	max-height: 600px;
		img {
			width: 320px;
			max-height: 612px;	
		}

	${breakpoint.lg} {
		margin-top: 0px;
		max-width: 645px;
		max-height: 700px;
		img {
			width: 595px;
			max-height: 612px;	
		}
	}
	}
	`;
export const WrapperImg2 = styled.div`
	margin: 0; 
	max-width: 250px;
	max-height: 250px;
	position: absolute;
    z-index: 1;
    margin: -573px 0px 0px 283px;
		img {
			width: 100%;	
		}
	}
	`;

export const Span1 = styled.span`
	display: none;
	
	${breakpoint.lg} {
	margin: 20px -5px 38px -6px;
	max-width: 670px;
	display: block;
	height: 30px;
	background: #5C6168;
	mix-blend-mode: normal;
	}

`;

export const Span2 = styled.span`
	display: none;

	${breakpoint.lg} {
		margin: -654px -47px 0px 552px;
		max-width: 30px;
		display: block;
		height: 650px;
		background: #5C6168;
		mix-blend-mode: normal;
	}

`;

export const Span3 = styled.span`
	display: none;

	${breakpoint.lg} {
		margin: -650px -21px -4px -36px;
		max-width: 30px;
		display: block;
		height: 650px;
		background: #5C6168;
		mix-blend-mode: normal;
	}

`;

