import { QueryFunction, useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import { useEmployeesQueryStore } from "../state-management/store";
import { AxiosError } from "axios";

export default function useEmployeesQuery(queryFn: QueryFunction<Employee[]>) {

    const searchQuery = useEmployeesQueryStore(s => s.searchQuery);

    const res = useQuery<Employee[], AxiosError>({
        queryKey: ["employees", searchQuery],
        queryFn,
        staleTime: 3600_000,
    });
    if (res.error) {
        throw res.error;
    }
    return res;
}