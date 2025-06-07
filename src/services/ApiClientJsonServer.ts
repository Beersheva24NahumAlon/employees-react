import axios, { AxiosError, AxiosInstance } from "axios";
import Employee from "../model/Employee";
import ApiClient from "./ApiClient";
import { calculateAge } from "../utils/functions";

class ApiClientJsonServer implements ApiClient {

    client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:3000/employees/",
        });

    }

    async addEmployee(empl: Employee): Promise<Employee> {
        return this.client.post("", empl).then(res => res.data)
    }

    async updateEmployee(updater: { id: string, empl: Partial<Employee> }): Promise<Employee> {
        const res = await this.client.patch<Employee>(`/${updater.id}`, updater.empl);
        return res.data;
    }

    async deleteEmployee(id: string): Promise<Employee> {
        return this.client.delete(id).then(res => res.data);
    }

    async getEmployee(id: string): Promise<Employee | null> {
        try {
            const response = await this.client.get<Employee>(id);
            return response.data;
        } catch (error) {
            if ((error as AxiosError).response?.status != 404) {
                throw error;
            } else {
                return null;
            }
        }
    }

    async getAll(config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        return this.client.get<Employee[]>("", config).then(res => res.data);
    }

    async getBySalary(minSalary: number, maxSalary: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        const newParams = { ...config?.params, salary_gt: minSalary, salary_lt: maxSalary };
        const newConfig = { ...config, params: newParams };
        const res = await this.getAll(newConfig);
        return res;
    }

    async getByAge(minAge: number, maxAge: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        const allEmployees = await this.getAll(config);
        return allEmployees.filter(empl => {
            const age = calculateAge(empl.birthDate);
            return age >= minAge && age < maxAge;
        });
    }

    setToken(token: string): void {
        this.client = axios.create({
            baseURL: "http://localhost:3000/employees/",
            headers: { Authorization: "Bearer " + token }
        });
    }
}



const apiClient = new ApiClientJsonServer();
export default apiClient;