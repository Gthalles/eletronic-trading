import React, { useEffect, useState } from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Container from "../../layout/Container";
import { getUsers } from "../../services/userRegistration";
import IUser from "../../model/IUser";
import Font from "../../layout/Font";

function UsersList() {
    const [users, setUsers] = useState<IUser[]>();

    async function handleUsers() {
        try {
            const response = await getUsers();
            setUsers(response);
        } catch (error: any) {
            throw error;
        }
    }

    useEffect(() => {
        handleUsers();
    }, []);

    return (
        <S.Table>
            <thead>
                <S.TableRow>
                    <S.TableHeader>CPF</S.TableHeader>
                    <S.TableHeader>Nome</S.TableHeader>
                    <S.TableHeader>Cidade</S.TableHeader>
                </S.TableRow>
            </thead>
            {
                users?.map((user: IUser) => (
                    <S.TableBody key={user.cpf}>
                        <S.TableRow>
                            <S.TableData>{user.cpf}</S.TableData>
                            <S.TableData>{user.name}</S.TableData>
                            <S.TableData>{user.city}</S.TableData>
                        </S.TableRow>
                    </S.TableBody>
                ))
            }
        </S.Table>
    );
}

export default UsersList;