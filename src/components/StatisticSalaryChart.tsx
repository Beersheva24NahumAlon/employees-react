import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts';
import { useEmployeesGlobal } from '../state-management/store';
import useSalaryStatistic from '../hooks/useSalaryStatistic';


const StatisticSalaryChart: React.FC = () => {

    const employees = useEmployeesGlobal(s => s.employees);
    const salaryStatistics = useSalaryStatistic(employees);

    return (
        <PieChart width={250} height={250}>
            <Pie
                dataKey="count"
                nameKey="range"
                isAnimationActive={false}
                data={salaryStatistics}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label />
            <Tooltip />
        </PieChart>
    )
}

export default StatisticSalaryChart