import styled from "@emotion/styled";

interface IBackgroundProps {
	imageUrl: string;
	display: string;
}

export const Background = styled.div<IBackgroundProps>`
    display: ${({ display }) => display};
    justify-content: center;
    min-height: 100vh;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
