import React from 'react'
import useAgeStatisic from '../../hooks/useAgeStatisic';
import useSalaryStatisic from '../../hooks/useSalaryStatisic';

const StatisticsPage: React.FC = () => {

    const { data, error, isLoading } = useAgeStatisic();
    console.log(data);
    return (
        
        <div>StatisticsPage</div>
    )
}

export default StatisticsPage