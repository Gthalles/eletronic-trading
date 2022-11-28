import styled from "@emotion/styled";

interface IButtonProps {
    margin?: string;
    width: string | number;
    height: string | number;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string | number;
}

export const Button = styled.button<IButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    cursor: pointer;
`;
