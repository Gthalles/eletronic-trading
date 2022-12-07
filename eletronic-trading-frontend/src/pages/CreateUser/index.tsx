import React, { useState } from "react";
import Header from "../../components/Header";
import BackgroundPaper from "../../layout/BackgroundPaper";
import Button from "../../layout/Button";
import Container from "../../layout/Container";
import Font from "../../layout/Font";
import Input from "../../layout/Input";
import { IUser } from "../../model/IUser";
import registerUser from "../../services/userRegistration";
import colors from "../../styles/colors";

function CreateUser() {
  const [CPF, setCPF] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const newUser: IUser = {
    cpf: CPF,
    name: name,
    password: password,
    city: city
  }

  function handleCPFChange(value: string | undefined) {
    value ? setCPF(value) : setCPF("");
  }

  function handleNameChange(value: string | undefined) {
    value ? setName(value) : setName("");
  }

  function handlePasswordChange(value: string | undefined) {
    value ? setPassword(value) : setPassword("");
  }

  function handleCityChange(value: string | undefined) {
    value ? setCity(value) : setCity("");
  }

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
          id="cpf"
          type="text"
          placeholder="Informe o CPF.."
          margin="15px 30px"
          height="25px"
          onchange={(event) => handleCPFChange(event?.target?.value)}
        />

        <Input
          id="name"
          type="text"
          placeholder="Digite o nome.."
          margin="15px 30px"
          height="25px"
          onchange={(event) => handleNameChange(event?.target?.value)}
        />

        <Input
          id="password"
          type="password"
          placeholder="Digite a senha.."
          margin="15px 30px"
          height="25px"
          onchange={(event) => handlePasswordChange(event?.target?.value)}
        />

        <Input
          id="city"
          type="text"
          placeholder="Informe o município.."
          margin="15px 30px"
          height="25px"
          onchange={(event) => handleCityChange(event?.target?.value)}
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
            onclick={() => registerUser(newUser)}
          />
        </Container>
      </Container>
    </BackgroundPaper>
  );
}

export default CreateUser;
