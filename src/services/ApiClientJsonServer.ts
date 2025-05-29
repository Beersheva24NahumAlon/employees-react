import axios, { AxiosInstance } from "axios";
import Employee from "../model/Employee";
import ApiClient from "./ApiClient";

class ApiClientJsonServer implements ApiClient {

    client: AxiosInstance;

    constructor( ) {
        this.client = axios.create({baseURL:"http://localhost:3000"})
    }

    addEmployee(empl: Employee): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(id: number, empl: Partial<Employee>): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getEmployee(id: number): Promise<Employee | null> {
        throw new Error("Method not implemented.");
    }
    async getAll(config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        const responce = await this.client.get("employees", config);
        return responce.data;
    }
    async getBySalary(minSalary: number, maxSalary: number, config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        const newParams = {...config?.params, salary_gt: minSalary, salary_lt: maxSalary};
        const newConfig = {...config, params: newParams};
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
}

function calculateAge(birthDateStr: string): number {
    const birthDate = new Date(birthDateStr);
    const now = new Date();
    const birthDay = birthDate.getDay();
    const birthMonth = birthDate.getMonth();
    const birthYear = birthDate.getFullYear();
    const currentYear = now.getFullYear();
    const currentBirthDate = new Date(currentYear, birthMonth, birthDay);
    const age = currentYear - birthYear;
    return now.getTime() - currentBirthDate.getTime() > 0 ? age : age - 1; 
}

const apiClient = new ApiClientJsonServer();
export default apiClient;