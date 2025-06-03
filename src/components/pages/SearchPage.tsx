import React from 'react'
import EmployeesTable from '../EmployeesTable'
import { VStack } from '@chakra-ui/react'
import FilterForm from '../FilterForm'
import useEmployeesMutation from '../../hooks/useEmployeesMutation'
import apiClient from '../../services/ApiClientJsonServer'

const SearchPage: React.FC = () => {
    const mutation = useEmployeesMutation(id => apiClient.deleteEmployee(id as string))
    return (
        <VStack>
            <FilterForm />
            <EmployeesTable submitter={id => mutation.mutate(id)}/>
        </VStack>
    )
}

export default SearchPage