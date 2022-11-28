import React from "react";
import * as S from "./styles";

interface IProps {
    id: string;
    type: string;
    margin?: string;
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    outlined?: string;
    placeholder?: string;
    onchange?: (event: any) => void;
}

function Input(props: IProps) {
    return (
        <S.Input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            margin={props.margin}
            width={props.width}
            height={props.height}
            color={props.color}
            backgroundColor={props.backgroundColor}
            border={props.border}
            borderBottom={props.borderBottom}
            outlined={props.outlined}
            onChange={props.onchange}
        />
    );
}

export default Input;
