import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";
import { useEmployeesQuery } from "../state-management/store";

export default function useEmployees() {

    const filterType = useEmployeesQuery(s => s.searchQuery.filterType);
    const rangeAge = useEmployeesQuery(s => s.searchQuery.rangeAge);
    const rangeSalary = useEmployeesQuery(s => s.searchQuery.rangeSalary);

    function getQueryFn() {
        let res = () => apiClient.getAll();
        if (filterType == "Age") {
            res = () => apiClient.getByAge(rangeAge.min, rangeAge.max);
        } else if (filterType == "Salary") {
            res = () => apiClient.getBySalary(rangeSalary.min, rangeSalary.max);
        }
        return res;
    }

    return useQuery<Employee[], Error>({
        queryKey: ["employees", filterType, rangeAge, rangeSalary],
        queryFn: getQueryFn(),
        staleTime: 10_000,
    });
}