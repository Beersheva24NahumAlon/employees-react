import React from 'react'
import useEmployees from '../hooks/useEmployees';
import { Spinner, Table, Text, Image } from '@chakra-ui/react';

const EmployeeTable: React.FC = () => {

    const { data: employees, error, isLoading } = useEmployees();

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text> :
                    <Table.Root size="sm">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Photo</Table.ColumnHeader>
                                <Table.ColumnHeader>Full Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Birth Date</Table.ColumnHeader>
                                <Table.ColumnHeader>Department</Table.ColumnHeader>
                                <Table.ColumnHeader>Salary</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {employees?.map((empl) => (
                                <Table.Row key={empl.id}>
                                    <Table.Cell>
                                        <Image rounded="md" src={empl.avatar} alt={empl.fullName} height="50px"/>
                                    </Table.Cell>
                                    <Table.Cell>{empl.fullName}</Table.Cell>
                                    <Table.Cell>{empl.birthDate}</Table.Cell>
                                    <Table.Cell>{empl.department}</Table.Cell>
                                    <Table.Cell>{empl.salary}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                // <Text>{employees?.map((empl) => empl.fullName).join(", ")}</Text>
            }</>)
    )
}

export default EmployeeTable