import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import Font from "../../layout/Font";
import Container from "../../layout/Container";
import IconContainer from "../../layout/IconContainer";

function Header() {
    return (
        <>
            <S.Header>
                <Container
                    flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="auto"
                    width="calc(100% - 40px)"
                >
                    <Link to="/">
                        <Font
                            text="Eletronic Trading"
                            color={colors.primary}
                            size="35px"
                            weight={900}
                        />
                    </Link>

                    <Container flex height="60px" alignItems="center">
                        <IconContainer
                            externalIcon="group"
                            margin="10px"
                            size={45}
                            color={colors.primary}
                            linkReference="/list"
                        />
                        <IconContainer
                            externalIcon="person_add"
                            margin="10px"
                            size={45}
                            color={colors.primary}
                            linkReference="/register"
                        />
                    </Container>
                </Container>
            </S.Header>
        </>
    );
}

export default Header;
