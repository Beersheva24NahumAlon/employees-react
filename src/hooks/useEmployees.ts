import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";

export default function useEmployees() {

    const config = {params: {_start: 0, _end: 1000}};

    return useQuery<Employee[], Error>({
        queryKey: ["employees", config],
        //queryFn: () => apiClient.getAll(config),
        queryFn: () => apiClient.getByAge(40, 43, config),
        //queryFn: () => apiClient.getBySalary(30000, 50000, config),
        staleTime: 30_000
    });
}