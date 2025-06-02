import React from 'react'
import StatisticAgeTable from '../StatisticAgeTable'
import { HStack, Spinner, Text } from '@chakra-ui/react'
import StatisticSalaryTable from '../StatisticSalaryTable'
import useEmployees from '../../hooks/useEmployees'


const StatisticsPage: React.FC = () => {

    const { data: employees, error, isLoading } = useEmployees();

    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
                    <HStack justifyContent="center" alignItems="baseline" gap="10rem">
                        <StatisticAgeTable employees={employees || []} />
                        <StatisticSalaryTable employees={employees || []} />
                    </HStack>
            }</>)
    )
}

export default StatisticsPage