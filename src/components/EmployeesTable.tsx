import React, { useState } from 'react'
import { Spinner, Table, Text, Avatar, Button, Box } from '@chakra-ui/react';
import useEmployees from '../hooks/useEmployees';
import useEmployeesMutation from '../hooks/useEmployeesMutation';
import apiClient from '../services/ApiClientJsonServer';



const EmployeesTable: React.FC = () => {

    const { data: employees, error, isLoading } = useEmployees();
    const mutation = useEmployeesMutation(id => apiClient.deleteEmployee(id as string))
    const [id, setId] = useState("");

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
                    <Box as="form" onSubmit={(event) => { event.preventDefault(); mutation.mutate(id); }}>
                        <Table.Root size="sm">
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
                                        <Table.Cell>
                                            <Button type="submit" onClick={() => setId(empl.id || "")}>delete</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </Box>
            }</>)
    )
}

export default EmployeesTable