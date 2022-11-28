import React from "react";
import Header from "../../components/Header";
import BackgroundPaper from "../../layout/BackgroundPaper";
import Button from "../../layout/Button";
import Container from "../../layout/Container";
import Font from "../../layout/Font";
import Input from "../../layout/Input";
import colors from "../../styles/colors";

function CreateUser() {
  return (
    <BackgroundPaper>
      <Header />

      <Container
        flex
        direction="column"
        margin="50px auto"
        width="400px"
        height="500px"
        border={`1px solid ${colors.primary}`}
      >
        <Container flex margin="50px auto">
          <Font
            text="Cadastro de Usuário"
            size="35px"
            weight={600}
            color={colors.primary}
          />
        </Container>

        <Input
          id="name"
          type="text"
          placeholder="Digite o nome.."
          margin="15px 30px"
          height="25px"
        />

        <Input
          id="password"
          type="password"
          placeholder="Digite a senha.."
          margin="15px 30px"
          height="25px"
        />

        <Input
          id="cpf"
          type="text"
          placeholder="Informe o CPF.."
          margin="15px 30px"
          height="25px"
        />

        <Input
          id="name"
          type="text"
          placeholder="Informe o município.."
          margin="15px 30px"
          height="25px"
        />

        <Container flex>
          <Button
            text="Cadastrar"
            margin="30px auto"
            width="calc(100% - 60px)"
            height="50px"
            color="#FFF"
            fontSize="25px"
            backgroundColor={colors.success}
          />
        </Container>
      </Container>
    </BackgroundPaper>
  );
}

export default CreateUser;
