import styled from 'styled-components';
import { breakpoint } from '../../../theme/breakpoints';
import { theme } from '../../../theme/theme';


export const WrapperBanner = styled.section`
	background-color: ${({ theme }) => theme.colors.grey};
	
	${breakpoint.lg} {
		min-height: 790px;
	}
`;


export const WrapperLogo = styled.div`
	padding: 5px 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	${breakpoint.md} {
		padding: 20px;
		max-width: 1025px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 15px;
	}

	${breakpoint.lg} {
		margin: 0px 0px 22px 0px;
		padding: 20px 30px;
		max-width: 1360px;
		gap: 122px;
	}
	${breakpoint.xl} {
		margin: 0px auto;
		max-width: 1460px;
	}
`;


export const Logo = styled.div`
	margin: 0 auto;
	margin-top: 20px;
	margin-top: 30px;
	max-width: 259px;
	max-height: 188px;

	${breakpoint.md} {
		max-width: 295px;
	}

	${breakpoint.lg} {
		margin-top: 0px;
		max-width: 378px;
	}
`;


export const Span = styled.span`
	margin: 20px auto;
	max-width: 280px;
	display: block;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.grey8};
	mix-blend-mode: normal;

	${breakpoint.sm} {
		max-width: 550px;
	}

	${breakpoint.md} {
		margin: 0px auto;
		max-width: 1020px;
	}

	${breakpoint.lg} {
		max-width: 1300px;
	}

	${breakpoint.xl} {
		max-width: 1440px;
	}
`;


export const WrapperLinkSocial = styled.div`
    margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 10px; 

	${breakpoint.md} {
		display: flex;
		margin: 0 auto;
		flex-direction: column;	
	}

	${breakpoint.lg} {
		margin: 10px 45px 10px 10px;
		max-width: 1360px;
		max-height: 80px;
		flex-direction: row;
		justify-content: space-between; 
	} 
`;


export const WrapperLink = styled.div`

	${breakpoint.lg} {
		max-width: 796px;
		max-height: 70px;
	}
`;


export const WrapperSocial = styled.div`
    margin: 0 auto;
	margin-top: 20px;
	max-height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: ${({ theme }) => theme.gap.sm};



	${breakpoint.sm} {
		margin-top: 0px;
		margin: 20px 90px 10px 10px;
	}

	${breakpoint.md} {
		margin: 20px 76px 10px 10px;
	}

	${breakpoint.lg} {
		margin: 20px 55px 10px 10px;

	}
`;


export const LinkYellow = styled.a`
margin: 10px auto;
	font-family: ${({ theme }) => theme.font1};
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 0.2px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	&:hover {
        color: ${({ theme }) => theme.colors.yellow};
        }
 

`;


export const LinkWhite = styled(LinkYellow)`
	color: #FFFFFF;
`;


export const Link = styled.ul`
    margin: 20px auto;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	list-style-type: none;
	gap: 25px; 


	${breakpoint.sm} {
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;   
	}

	${breakpoint.md} {
		flex-wrap: wrap;
		justify-content: start;
		gap: 50px;   
	}

	${breakpoint.lg} {
		gap: 55px;   
	}	
`;


export const WrapperWelcome = styled.div`
	padding: 15px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 10px;

	${breakpoint.md} {
		max-width: 1240px;
		flex-direction: row;
		justify-content: space-between;	
	}

	${breakpoint.lg} {
		margin: 10px 45px 10px 10px;
		max-width: 1440px;
		max-height: 810px;	
	}

	h1{ 
		margin: 0 auto;
		text-align: center;
		font-family: ${({ theme }) => theme.font2};
		font-style: normal;
		font-weight: 400;
		font-size: 46px;
		line-height: 76px;
		letter-spacing: 0.2px;
		color: ${({ theme }) => theme.colors.white};
		
		${breakpoint.md} {
			margin: 80px 0px 0px 0px;
			font-size: 78px;
			line-height: 80px;
		}

		${breakpoint.lg} {
			text-align: start;
			margin: 100px 0px 10px 25px;
			font-size: 100px;
			line-height: 110px;
		}

		${breakpoint.xl} {
			margin: 150px 0px 10px 65px;
			font-size: 100px;
			line-height: 110px;
		}  
		}

	h2{
		padding: 15px;
		text-align: center;
		margin: 0 auto;
		margin-top: 20px;
		max-width: 300px;
		font-family: ${({ theme }) => theme.font1};
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 0.2px;
		color: ${({ theme }) => theme.colors.white};

		${breakpoint.sm} {
			max-width: 472px;
		}
		${breakpoint.md} {
			max-width: 500px;
		}
		${breakpoint.lg} {
			max-width: 600px;
			padding: 0 auto;
			text-align: start;
			margin-top: 0px;
			margin: 40px 0px 10px 25px;
		}
		${breakpoint.xl} {
			margin: 40px 0px 10px 63px;
			max-width: 600px;
		} 
	}
`;


export const WrapperTitle = styled.div`
	margin: 0; 
	max-width: 665px;
	min-height: 418px;
	
`;


export const WrapperImg = styled.div`
	margin-top: 55px;
	margin: 0; 
		img {
			width: 100%;	
		}

		${breakpoint.md} {
			margin-top: 60px;
			max-width: 425px;
			max-height: 600px;
			img {
				width: 595px;
				max-height: 612px;	
			}
		}

		${breakpoint.lg} {
			margin-top: 40px;
			max-width: 620px;
			max-height: 700px;
			img {
				width: 620px;
				max-height: 700px;	
			}
		}

		${breakpoint.xl} {
			margin-top: 60px;
			max-width: 645px;
			max-height: 700px;
			img {
				width: 645px;
				max-height: 700px;	
			}
		}	
	}
`;

