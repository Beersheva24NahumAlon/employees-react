import React from 'react'
import EmployeesTable from '../EmployeesTable'
import { VStack } from '@chakra-ui/react'
import FilterForm from '../FilterForm'

const SearchPage: React.FC = () => {
    return (
        <VStack>
            <FilterForm />
            <EmployeesTable/>
        </VStack>
    )
}

export default SearchPage