import styled from "@emotion/styled";

interface IIconContainerProps {
    text?: string;
    margin?: string | number;
    size?: string | number;
    color?: string;
    activeColor?: string;
    active?: boolean;
    hover?: boolean;
}

export const IconContainer = styled.span<IIconContainerProps>`
    display: flex;
    flex-direction: ${({ text }) => (text ? "column" : "row")};
    justify-content: center;
    align-self: center;
    margin: ${({ margin }) => margin};
    padding: ${({ text }) => (text ? "5px" : 0)};
    min-width: ${({ text }) => (text ? "65px" : "auto")};
    color: ${({ active, hover, color, activeColor }) =>
        active || hover ? activeColor : color};
    cursor: pointer;
`;

export const IconImage = styled.img<IIconContainerProps>`
    margin: ${({ margin }) => margin};
    align-self: center;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;

export const ExternalIcon = styled.span<IIconContainerProps>`
    font-size: ${({ size }) => `${size}px`};
`;
