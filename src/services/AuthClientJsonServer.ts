import axios, { AxiosError } from "axios";
import { LoginData, UserData } from "../model/auth-data";
import AuthClient from "./AuthClient";

interface ResponceLoginData {
    accessToken: string;
    user: {
        email: string;
        id: string;
    }
}

class AuthClientJsonServer implements AuthClient {

    async login(loginData: LoginData): Promise<UserData | null> {
        let res: UserData | null = null;
        try {
            const response = await axios.post<ResponceLoginData>("http://localhost:3000/login/", loginData);
            res = {
                token: response.data.accessToken,
                role: response.data.user.id,
                username: response.data.user.email
            };
        } catch (error) {
            const axiosError = error as AxiosError;
            if (!axiosError.response) {
                throw Error(axiosError.message);
            }
        }
        return res;
    }

    async logout(_: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}

const authClient = new AuthClientJsonServer();
export default authClient;