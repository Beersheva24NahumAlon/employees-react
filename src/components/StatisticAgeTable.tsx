import { Heading, Table, VStack } from '@chakra-ui/react'
import React from 'react'
import useAgeStatisic from '../hooks/useAgeStatisic';
import { useEmployeesGlobal } from '../state-management/store';


const StatisticAgeTable: React.FC = () => {
    
    const employees = useEmployeesGlobal(s => s.employees);
    const ageStatistics = useAgeStatisic(employees);

    return (

        <VStack>
            <Heading size="xl">Statistics by employee age</Heading>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Range of age</Table.ColumnHeader>
                        <Table.ColumnHeader>Count of employees</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {ageStatistics?.map(s => (
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

export default StatisticAgeTable