import { IUser } from "../model/IUser";
import Axios from "./axios";

async function registerUser (newUser: IUser) {
    try {
        const response = await Axios.post("/user/register", newUser);

        alert("USUÁRIO CADASTRADO COM SUCESSO!");

        console.log(response);
    } catch(error: any) {
        console.log(error);
        throw error;
    }

}

export default registerUser;