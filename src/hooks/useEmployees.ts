import { QueryFunction, useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import { useEmployeesQuery } from "../state-management/store";

export default function useEmployees(queryFn: QueryFunction<Employee[]>) {

    const searchQuery = useEmployeesQuery(s => s.searchQuery);

    return useQuery<Employee[], Error>({
        queryKey: ["employees", searchQuery],
        queryFn,
        staleTime: 3600_000,
    });
}