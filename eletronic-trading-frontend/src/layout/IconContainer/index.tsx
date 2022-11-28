import React, { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";
import * as S from "./styles";
import Font from "../Font";

interface IProps {
    externalIcon?: any;
    className?: string;
    text?: string;
    color?: string;
    size?: string | number;
    linkReference?: string;
    externalLink?: string;
    margin?: string | number;
    active?: boolean;
    onclick?: () => void;
    isHoverable?: boolean;
}

function IconContainer({
    externalIcon,
    className,
    text = "",
    size,
    color = "#A1A1A1",
    margin = "auto",
    active,
    linkReference = "",
    externalLink = "",
    onclick,
    isHoverable = true,
}: IProps) {
    const [hover, setHover] = useState(false);

    const icon = (
        <S.ExternalIcon
            className={className || "material-symbols-outlined"}
            size={size}
        >
            {externalIcon || ""}
        </S.ExternalIcon>
    );

    const iconText = (
        <Font
            text={text}
            size="11px"
            color={active || hover ? colors.secondary : color}
        />
    );

    const iconContainer = (
        <S.IconContainer
            margin={margin}
            color={color}
            activeColor={colors.secondary}
            text={text}
            active={active}
            hover={hover}
            onMouseEnter={() => (isHoverable ? setHover(true) : null)}
            onMouseLeave={() => (isHoverable ? setHover(false) : null)}
        >
            {icon}
            {text ? iconText : null}
        </S.IconContainer>
    );

    if (externalLink) {
        return (
            <a
                href={externalLink}
                onClick={() => onclick}
                target="_blank"
                rel="noreferrer"
            >
                {iconContainer}
            </a>
        );
    }

    if (linkReference) {
        return (
            <Link to={linkReference} onClick={onclick}>
                {iconContainer}
            </Link>
        );
    }

    return (
        <span onClick={onclick} aria-hidden="true">
            {iconContainer}
        </span>
    );
}

export default IconContainer;
