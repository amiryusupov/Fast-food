import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthDiv = styled.div`
    width: 100%;
    height: 92vh;
    background-color: ${props => props.theme.colors.white};
`
export const AuthTitle = styled.span`
    font-family: ${props => props.theme.fonts.main};
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 45px;
    color: ${props => props.theme.colors.black};
`
export const AuthInput = styled.input`
    border: 1px solid ${props => props.theme.colors.inputBorder};
    background-color: ${props => props.theme.colors.inputBackColor};
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.main};
    border-radius: 5px;
    width: 22%;
    padding: 12px;
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.blue};
    }
    &::placeholder {
        color: ${props => props.theme.colors.inputName};
    }
    &:not(:last-child) {
        margin-bottom: 25px;
    }
    transition: all 0.3s;
`
export const AuthBtn = styled(Link)`
    width: 10%;
    font-family: ${props => props.theme.fonts.main};
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.1em;
    border: 1px solid transparent;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    padding: 12px;
    margin-top: 9px;
    cursor: pointer;
    box-shadow: 0px 2px 11px 0px ${props => props.theme.colors.btnShadow};
    background: ${props => props.theme.colors.blue};
    transition: all 0.3s;
    &:hover {
        box-shadow: none;
        border: 1px solid ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.white};
    }
`
export const BackButton = styled(AuthBtn)`
    color: ${props => props.theme.colors.dark};
    margin-top: 18px;
    border: 1px solid ${props => props.theme.colors.inputBorder};
    background: ${props => props.theme.colors.white};
    box-shadow: none;
    &:hover {
        border: 1px solid transparent;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.blue};
    }
`