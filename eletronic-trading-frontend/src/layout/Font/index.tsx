/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";

interface IProps {
    text?: string;
    size?: string;
    align?: string;
    transform?: string;
    weight?: number;
    color?: string;
}

function Font({
    text,
    color,
    size,
    align = "center",
    transform = "initial",
    weight = 300,
}: IProps) {
    return (
        <S.Font
            color={color}
            size={size}
            align={align}
            weight={weight}
            transform={transform}
        >
            {text}
        </S.Font>
    );
}

export default Font;
