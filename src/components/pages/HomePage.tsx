import React from 'react'
import EmployeesTable from '../EmployeesTable'
import useEmployeesMutation from '../../hooks/useEmployeesMutation'
import apiClient from '../../services/ApiClientJsonServer'

const HomePage: React.FC = () => {
    const mutation = useEmployeesMutation(id => apiClient.deleteEmployee(id as string))
    return (
        <EmployeesTable submitter={id => mutation.mutate(id)}/>
    )
}

export default HomePage