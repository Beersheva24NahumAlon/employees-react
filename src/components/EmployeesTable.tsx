import React from 'react'
import { Spinner, Table, Text, Avatar, Button } from '@chakra-ui/react';
import useEmployees from '../hooks/useEmployees';
import useEmployeesMutation from '../hooks/useEmployeesMutation';
import apiClient from '../services/ApiClientJsonServer';
import { QueryFunction } from '@tanstack/react-query';
import Employee from '../model/Employee';

interface Props {
    queryFn: QueryFunction<Employee[]>
}

const EmployeesTable: React.FC<Props> = ({queryFn}) => {

    const { data: employees, error, isLoading } = useEmployees(queryFn);
    const mutation = useEmployeesMutation(id => apiClient.deleteEmployee(id as string))

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
                    <Table.Root size="sm" variant="outline">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader></Table.ColumnHeader>
                                <Table.ColumnHeader>Full Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Birth Date</Table.ColumnHeader>
                                <Table.ColumnHeader>Department</Table.ColumnHeader>
                                <Table.ColumnHeader>Salary</Table.ColumnHeader>
                                <Table.ColumnHeader></Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {employees?.map((empl) => (
                                <Table.Row key={empl.id}>
                                    <Table.Cell>
                                        <Avatar.Root>
                                            <Avatar.Fallback />
                                            <Avatar.Image src={empl.avatar} alt={empl.fullName} />
                                        </Avatar.Root>
                                    </Table.Cell>
                                    <Table.Cell>{empl.fullName}</Table.Cell>
                                    <Table.Cell>{empl.birthDate}</Table.Cell>
                                    <Table.Cell>{empl.department}</Table.Cell>
                                    <Table.Cell>{empl.salary}</Table.Cell>
                                    <Table.Cell>
                                        <Button colorPalette="red" onClick={() => mutation.mutate(empl.id)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
            }</>)
    )
}

export default EmployeesTable