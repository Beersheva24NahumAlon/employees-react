import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";

export default function useEmployees() {

    return useQuery<Employee[], Error>({
        queryKey: ["employees"],
        queryFn: () => apiClient.getAll(),
        staleTime: 5_000,
    });
}