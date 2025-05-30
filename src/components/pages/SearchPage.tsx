import React from 'react'
import FilterSalaryForm from '../FilterSalaryForm'
import EmployeesTable from '../EmployeesTable'
import { VStack } from '@chakra-ui/react'
import useEmployeesBySalary from '../../hooks/useEmployeesBySalary'
import FilterAgeForm from '../FilterAgeForm'
import useEmployeesByAge from '../../hooks/useEmployeesByAge'


const SearchPage: React.FC = () => {

    return (
        <VStack>
            <FilterAgeForm/>
            <EmployeesTable employeesHook={useEmployeesByAge} />
        </VStack>
    )
}

export default SearchPage