import React, { useState } from "react";
import colors from "../../styles/colors";
import Container from "../../layout/Container";
import Font from "../../layout/Font";
import Input from "../../layout/Input";
import Button from "../../layout/Button";
import registerUser from "../../services/userRegistration";
import IUser from "../../model/IUser";

function RegisterForm() {
    const [CPF, setCPF] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const newUser: IUser = {
        cpf: CPF,
        name: name,
        password: password,
        city: city
    }

    async function register(data: IUser) {
        setLoading(true);

        try {
            const response = await registerUser(data);
            alert(response);
        } catch (error) {
            alert(error);
            throw error;
        } finally {
            setLoading(false);
        }
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
        <Container
            flex
            direction="column"
            margin="50px auto"
            width="400px"
            height="450px"
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
                margin="10px 30px"
                height="30px"
                outlined="none"
                border={`1px solid ${colors.primary}`}
                onchange={(event) => handleCPFChange(event?.target?.value)}
            />

            <Input
                id="name"
                type="text"
                placeholder="Digite o nome.."
                margin="10px 30px"
                height="30px"
                outlined="none"
                border={`1px solid ${colors.primary}`}
                onchange={(event) => handleNameChange(event?.target?.value)}
            />

            <Input
                id="password"
                type="password"
                placeholder="Digite a senha.."
                margin="10px 30px"
                height="30px"
                outlined="none"
                border={`1px solid ${colors.primary}`}
                onchange={(event) => handlePasswordChange(event?.target?.value)}
            />

            <Input
                id="city"
                type="text"
                placeholder="Informe o município.."
                margin="10px 30px"
                height="30px"
                outlined="none"
                border={`1px solid ${colors.primary}`}
                onchange={(event) => handleCityChange(event?.target?.value)}
            />

            <Container flex>
                <Button
                    text="Cadastrar"
                    margin="30px auto"
                    width="calc(100% - 60px)"
                    height="50px"
                    color="#FFF"
                    fontSize="22px"
                    backgroundColor={loading ? colors.disabled : colors.success}
                    onclick={() => register(newUser)}
                    borderRadius="7.5px"
                />
            </Container>
        </Container>
    );
}

export default RegisterForm;