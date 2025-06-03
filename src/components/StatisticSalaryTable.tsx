import { Heading, Table, VStack } from '@chakra-ui/react'
import React from 'react'
import useSalaryStatisic from '../hooks/useSalaryStatistic';
import { useEmployeesGlobal } from '../state-management/store';

const StatisticSalaryTable: React.FC = () => {

    const employees = useEmployeesGlobal(s => s.employees);
    const salaryStatistics = useSalaryStatisic(employees);

    return (

        <VStack>
            <Heading size="xl">Statistics by employee salary</Heading>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Range of salary</Table.ColumnHeader>
                        <Table.ColumnHeader>Count of employees</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {salaryStatistics?.map(s => (
                        <Table.Row key={s.range}>
                            <Table.Cell>{s.range}</Table.Cell>
                            <Table.Cell>{s.count}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </VStack>

    )
}

export default StatisticSalaryTable