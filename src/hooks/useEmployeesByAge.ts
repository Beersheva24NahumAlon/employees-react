import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";
import { useSearch } from "../state-management/store";

export default function useEmployeesByAge() {
    const minAge = useSearch(s => s.minAge);
    const maxAge = useSearch(s => s.maxAge);

    return useQuery<Employee[], Error>({
        queryKey: ["employeesByAge", minAge, maxAge],
        queryFn: () => apiClient.getByAge(minAge, maxAge),
        staleTime: 5_000,
    });
}