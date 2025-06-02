import React from 'react'
import StatisticAgeTable from '../StatisticAgeTable'
import { HStack } from '@chakra-ui/react'
import StatisticSalaryTable from '../StatisticSalaryTable'

const StatisticsPage: React.FC = () => {

    return (
        <>
            <HStack justifyContent="center" alignItems="baseline" gap="10rem">
                <StatisticAgeTable />
                <StatisticSalaryTable />
            </HStack>
        </>
    )
}

export default StatisticsPage