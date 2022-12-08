import IUser from "../model/IUser";
import Axios from "./axios";

async function registerUser (newUser: IUser) {
    try {
        const response = await Axios.post("/user/register", newUser);

        return response.data;
    } catch(error: any) {
        alert(error.message);
        
        throw new Error(error.message);
    }

}

export default registerUser;