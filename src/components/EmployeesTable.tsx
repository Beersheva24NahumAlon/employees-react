import React from 'react'
import { Spinner, Table, Avatar, Button } from '@chakra-ui/react';
import useEmployees from '../hooks/useEmployees';
import useEmployeesMutation from '../hooks/useEmployeesMutation';
import apiClient from '../services/ApiClientJsonServer';
import { QueryFunction } from '@tanstack/react-query';
import Employee from '../model/Employee';
import EditableField from './EditableField';

interface Props {
    queryFn: QueryFunction<Employee[]>
}

const EmployeesTable: React.FC<Props> = ({ queryFn }) => {

    const { data: employees, isLoading } = useEmployees(queryFn);
    const deleteMutation = useEmployeesMutation(id => apiClient.deleteEmployee(id as string));
    const mutationUpdate = useEmployeesMutation((updater) =>
        apiClient.updateEmployee(updater as { id: string, empl: Partial<Employee> }));

    return (
        isLoading ?
            (<Spinner />) :
            (
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
                                <Table.Cell>
                                    <EditableField field="department" oldValue={empl.department as string} submitter={(value) => {
                                        mutationUpdate.mutate({ id: empl.id, empl: { department: value } }) }} />
                                </Table.Cell>
                                <Table.Cell>
                                    <EditableField field="salary" oldValue={empl.salary as number} submitter={(value) => {
                                        mutationUpdate.mutate({ id: empl.id, empl: { salary: value } }) }} />
                                </Table.Cell>
                                <Table.Cell>
                                    <Button colorPalette="red" onClick={() => deleteMutation.mutate(empl.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            )
    )
}

export default EmployeesTable