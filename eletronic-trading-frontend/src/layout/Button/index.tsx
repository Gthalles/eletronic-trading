/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";
import Font from "../Font";
import { Link } from "react-router-dom";

interface IProps {
    text: string;
    fontSize?: string;
    fontWeight?: number;
    margin?: string;
    width: string | number;
    height: string | number;
    border?: string;
    borderRadius?: string | number;
    backgroundColor?: string;
    color?: string;
    linkReference?: string;
    onclick?: () => void;
}

function Button({
    text,
    margin,
    width,
    height,
    backgroundColor,
    fontSize = "14px",
    fontWeight,
    border,
    borderRadius,
    onclick,
    color,
    linkReference,
}: IProps) {
    if (linkReference) {
        return (
            <Link to={linkReference}>
                <S.Button
                    type="button"
                    margin={margin || "auto"}
                    width={width}
                    height={height}
                    backgroundColor={backgroundColor}
                    border={border || "none"}
                    borderRadius={borderRadius || "none"}
                    onClick={onclick}
                >
                    <Font
                        text={text}
                        size={fontSize}
                        weight={fontWeight || 300}
                        color={color}
                    />
                </S.Button>
            </Link>
        );
    }

    return (
        <S.Button
            type="button"
            margin={margin || "auto"}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            border={border || "none"}
            borderRadius={borderRadius || "none"}
            onClick={onclick}
        >
            <Font
                text={text}
                size={fontSize}
                weight={fontWeight || 300}
                color={color}
            />
        </S.Button>
    );
}

export default Button;
