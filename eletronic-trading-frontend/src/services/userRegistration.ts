import IUser from "../model/IUser";
import Axios from "./axios";

export async function registerUser(newUser: IUser) {
    try {
        const response = await Axios.post("/user/register", newUser);

        return response.data;
    } catch(error: any) {
        alert(error.message);
        
        throw new Error(error.message);
    }

}

export async function getUsers() {
    try {
        const response = await Axios.get("/users/list");

        return response.data;
    } catch(error: any) {
        alert(error.message);
        
        throw new Error(error.message);
    }
}

export default registerUser;