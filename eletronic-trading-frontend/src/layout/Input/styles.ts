import styled from "@emotion/styled";

interface IInputProps {
    margin?: string;
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    outlined?: string;
}

export const Input = styled.input<IInputProps>`
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    font-size: 15px;
    text-indent: 5px;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ border }) => border};
    border-bottom: ${({ borderBottom }) => borderBottom};
    border-radius: 5px;

    :focus {
        outline: ${({ outlined }) => outlined};
    }
`;
