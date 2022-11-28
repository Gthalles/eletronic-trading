import styled from "@emotion/styled";

interface IFontProps {
    size?: string;
    align?: string;
    transform: string;
    weight?: number;
    color?: string;
}

export const Font = styled.span<IFontProps>`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: ${({ size }) => size};
    text-transform: ${({ transform }) => transform};
    text-align: ${({ align }) => align};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
`;
