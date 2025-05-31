import { useQuery } from "@tanstack/react-query";
import Employee from "../model/Employee";
import apiClient from "../services/ApiClientJsonServer";
import { useEmployeesQuery } from "../state-management/store";

export default function useEmployees() {

    const ageRange = useEmployeesQuery(s => s.ageRange);
    const salaryRange = useEmployeesQuery(s => s.salaryRange);

    function getQueryFn() {
        let res = () => apiClient.getAll();
        if (ageRange != null && salaryRange == null) {
            res = () => apiClient.getByAge(ageRange.minAge, ageRange.maxAge);
        } else if (ageRange == null && salaryRange != null) {
            res = () => apiClient.getBySalary(salaryRange.minSalay, salaryRange.maxSalary);
        }
        return res;
    }

    return useQuery<Employee[], Error>({
        queryKey: ["employees", ageRange, salaryRange],
        queryFn: getQueryFn(),
        staleTime: 5_000,
    });
}