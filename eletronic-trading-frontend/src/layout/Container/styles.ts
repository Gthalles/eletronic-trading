import styled from "@emotion/styled";

interface IContainerProps {
    flex?: boolean;
    margin: string;
    padding: string;
    width: string;
    height: string;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
    border?: string;
}

export const Container = styled.div<IContainerProps>`
    display: ${({ flex }) => (flex ? "flex" : "block")};
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    max-width: 1400px;
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ border }) => border};
`;
