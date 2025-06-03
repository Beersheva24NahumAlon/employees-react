import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts';
import useAgeStatisic from '../hooks/useAgeStatisic';
import { useEmployeesGlobal } from '../state-management/store';


const StatisticAgeChart: React.FC = () => {

    const employees = useEmployeesGlobal(s => s.employees);
    const ageStatistics = useAgeStatisic(employees);

    return (
        <PieChart width={300} height={300}>
            <Pie
                dataKey="count"
                nameKey="range"
                isAnimationActive={false}
                data={ageStatistics}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label />
            <Tooltip />
        </PieChart>
    )
}

export default StatisticAgeChart