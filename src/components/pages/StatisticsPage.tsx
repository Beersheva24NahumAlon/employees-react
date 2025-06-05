import React from 'react'
import StatisticAgeTable from '../StatisticAgeTable'
import { HStack, Spinner, VStack } from '@chakra-ui/react'
import StatisticSalaryTable from '../StatisticSalaryTable'
import useEmployeesQuery from '../../hooks/useEmployeesQuery'
import StatisticAgeChart from '../StatisticAgeChart'
import { useEmployeesGlobal } from '../../state-management/store'
import StatisticSalaryChart from '../StatisticSalaryChart'
import apiClient from '../../services/ApiClientJsonServer'


const StatisticsPage: React.FC = () => {

    const { data: employees, isLoading } = useEmployeesQuery(() => apiClient.getAll());
    const setEmployees = useEmployeesGlobal(s => s.setEmployees);
    setEmployees(employees || []);
    return (
        isLoading ?
            (<Spinner />) :
            (
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

            )
    )
}

export default StatisticsPage