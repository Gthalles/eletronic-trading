import React, { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
    children: ReactNode;
    flex?: boolean;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
    border?: string;
}

function Container({
    children,
    flex,
    direction,
    alignItems,
    justifyContent,
    margin = "",
    padding = "",
    width = "",
    height = "",
    backgroundColor,
    border,
}: IProps) {
    return (
        <S.Container
            flex={flex}
            margin={margin}
            padding={padding}
            width={width}
            height={height}
            direction={direction}
            alignItems={alignItems}
            justifyContent={justifyContent}
            backgroundColor={backgroundColor}
            border={border}
        >
            {children}
        </S.Container>
    );
}

export default Container;
