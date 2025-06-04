import React from 'react'
import EmployeesTable from '../EmployeesTable'
import apiClient from '../../services/ApiClientJsonServer'

const HomePage: React.FC = () => {
    
    return (
        <EmployeesTable queryFn={() => apiClient.getAll()}/>
    )
}

export default HomePage