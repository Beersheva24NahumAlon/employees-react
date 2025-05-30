import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";

export default function useEmployees() {

    return useQuery<Employee[], Error>({
        queryKey: ["employees"],
        //queryFn: () => apiClient.getAll(),
        queryFn: () => apiClient.getByAge(30, 43),
        //queryFn: () => apiClient.getBySalary(49000, 50000, config),
        staleTime: 5_000,
        //refetchInterval: 5_000,
    });
}