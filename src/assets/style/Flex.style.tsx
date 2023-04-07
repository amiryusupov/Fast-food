import styled from "styled-components";
import { styleProps } from "../../models/styleProps";

export const Flex = styled.div<styleProps>`
    display: flex;
    height: 100%;
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    flex-direction: ${props => props.direction || "row"}; 
    flex-wrap: ${props => props.wrap || "unset"};
`