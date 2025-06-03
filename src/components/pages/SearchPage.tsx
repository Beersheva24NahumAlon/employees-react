import React from 'react'
import EmployeesTable from '../EmployeesTable'
import { VStack } from '@chakra-ui/react'
import FilterForm from '../FilterForm'
import { useEmployeesQuery } from '../../state-management/store'
import { QueryFunction } from '@tanstack/react-query'
import Employee from '../../model/Employee'
import apiClient from '../../services/ApiClientJsonServer'

const SearchPage: React.FC = () => {
    let queryFn: QueryFunction<Employee[]> = () => apiClient.getAll();
    const filterType = useEmployeesQuery(s => s.searchQuery.filterType);
    const rangeAge = useEmployeesQuery(s => s.searchQuery.rangeAge);
    const rangeSalary = useEmployeesQuery(s => s.searchQuery.rangeSalary);
    if (filterType == "Age") {
        queryFn = () => apiClient.getByAge(rangeAge.min, rangeAge.max);
    } else if (filterType == "Salary") {
        queryFn = () => apiClient.getBySalary(rangeSalary.min, rangeSalary.max);
    }
    return (
        <VStack>
            <FilterForm />
            <EmployeesTable queryFn={queryFn}/>
        </VStack>
    )
}

export default SearchPage