import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";
import { useSearch } from "../state-management/store";

export default function useEmployeesBySalary() {
    const minSalary = useSearch(s => s.minSalary);
    const maxSalary = useSearch(s => s.maxSalary);

    return useQuery<Employee[], Error>({
        queryKey: ["employeesBySalary", minSalary, maxSalary],
        queryFn: () => apiClient.getBySalary(minSalary, maxSalary),
        staleTime: 5_000,
    });
}