import axios, { AxiosInstance } from "axios";
import Employee from "../model/Employee";
import ApiClient from "./ApiClient";
import DataResponse from "../model/DataResponse";

class ApiClientJsonServer implements ApiClient {

    client: AxiosInstance;

    constructor() {
        this.client = axios.create({ baseURL: "http://localhost:3000/employees/" })
    }

    addEmployee(empl: Employee): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(id: string, empl: Partial<Employee>): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getEmployee(id: string): Promise<Employee | null> {
        const response: DataResponse<Employee> = await this.client.get(id);
        console.log(response.status);
        return response.status < 400 ? response.data : null;
    }
    async getAll(config?: { headers?: any; params?: any; }): Promise<Employee[]> {
        const response: DataResponse<Employee[]> = await this.client.get("", config);
        return response.data;
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
}

function calculateBirthDate(age: number): string {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();
    const nowDay = nowDate.getDate();
    const birthYear = nowYear - age;
    return new Date(birthYear, nowMonth, nowDay).toISOString().split("T")[0];
}

export function calculateAge(birthDateStr: string): number {
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