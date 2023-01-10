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
	max-width: 1360px;
	max-height: 80px;
`;

export const WrapperLink = styled.div`
	max-width: 796px;
	max-height: 70px;
`;

export const WrapperSocial = styled.div`
	max-width: 179px;
	max-height: 30px;
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
	gap: 70px;   
	}
`;



