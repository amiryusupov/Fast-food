import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarDiv = styled.div`
	width: 100%;
	height: 60px;
	background-color: ${props => props.theme.colors.gray};
`
export const NavbarText = styled(Link)`
	font-family: ${props => props.theme.fonts.main};
	font-weight: 600;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;
	color: ${props => props.theme.colors.black}
`