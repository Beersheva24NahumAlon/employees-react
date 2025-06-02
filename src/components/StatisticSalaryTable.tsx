import { Heading, Spinner, Table, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import useSalaryStatisic from '../hooks/useSalaryStatisic';

const StatisticSalaryTable: React.FC = () => {

    const { data: salaryStatistics, error, isLoading } = useSalaryStatisic();

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
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
            }</>)

    )
}

export default StatisticSalaryTable