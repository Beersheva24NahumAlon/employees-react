import React from 'react'
import StatisticAgeTable from '../StatisticAgeTable'
import { HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import StatisticSalaryTable from '../StatisticSalaryTable'
import useEmployees from '../../hooks/useEmployees'
import StatisticAgeChart from '../StatisticAgeChart'
import { useEmployeesGlobal } from '../../state-management/store'
import StatisticSalaryChart from '../StatisticSalaryChart'


const StatisticsPage: React.FC = () => {

    const { data: employees, error, isLoading } = useEmployees();
    const setEmployees = useEmployeesGlobal(s => s.setEmployees);
    setEmployees(employees || []);
    return (
        isLoading ?
            (<Spinner />) :
            (<>{
                error?.message ?
                    <Text color="red">{error.message}</Text>
                    :
                    <HStack justifyContent="center" alignItems="baseline" gap="10rem">
                        <VStack>
                            <StatisticAgeTable />
                            <StatisticAgeChart />
                        </VStack>
                        <VStack>
                            <StatisticSalaryTable />
                            <StatisticSalaryChart />
                        </VStack>
                    </HStack>

            }</>)
    )
}

export default StatisticsPage