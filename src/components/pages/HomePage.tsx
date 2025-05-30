import React from 'react'
import EmployeesTable from '../EmployeesTable'
import useEmployees from '../../hooks/useEmployees'

const HomePage:React.FC = () => {
  return (
    <EmployeesTable employeesHook={useEmployees}/>
  )
}

export default HomePage