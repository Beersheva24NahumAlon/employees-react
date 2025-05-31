import React from 'react'
import FilterSalaryForm from '../FilterSalaryForm'
import EmployeesTable from '../EmployeesTable'
import { VStack } from '@chakra-ui/react'
import FilterAgeForm from '../FilterAgeForm'
import FilterForm from '../FilterForm'



const SearchPage: React.FC = () => {

    return (
        <VStack>
            <FilterForm/>
            <EmployeesTable/>
        </VStack>
    )
}

export default SearchPage