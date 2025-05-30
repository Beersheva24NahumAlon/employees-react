import React from 'react'
import { Spinner, Table, Text, Avatar } from '@chakra-ui/react';
import Employee from '../model/Employee';
import { UseQueryResult } from '@tanstack/react-query';

interface Props {
    employeesHook: () => UseQueryResult<Employee[], Error>;
}

const EmployeesTable: React.FC<Props> = ({employeesHook}) => {

    const { data: employees, error, isLoading } = employeesHook();

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
                    <Table.Root size="sm">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Avatar</Table.ColumnHeader>
                                <Table.ColumnHeader>Full Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Birth Date</Table.ColumnHeader>
                                <Table.ColumnHeader>Department</Table.ColumnHeader>
                                <Table.ColumnHeader>Salary</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body maxHeight="75vh" overflow="auto">
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
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
            }</>)
    )
}

export default EmployeesTable