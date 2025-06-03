import React from 'react'
import EmployeeForm from '../EmployeeForm'
import useEmployeesMutation from '../../hooks/useEmployeesMutation'
import apiClient from '../../services/ApiClientJsonServer'
import Employee from '../../model/Employee'

const AddEmployeePage: React.FC = () => {
    const mutation = useEmployeesMutation(empl => apiClient.addEmployee(empl as Employee))
    return (
        <EmployeeForm submitter={empl => mutation.mutate(empl)} />
    )
}

export default AddEmployeePage