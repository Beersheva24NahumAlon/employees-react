import { Heading, Spinner, Table, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import useAgeStatisic from '../hooks/useAgeStatisic';

const StatisticAgeTable: React.FC = () => {

    const { data: ageStatistics, error, isLoading } = useAgeStatisic();

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
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
            }</>)

    )
}

export default StatisticAgeTable