import React from 'react'
import FilterAgeForm from './FilterAgeForm';
import FilterSalaryForm from './FilterSalaryForm';

const FilterForm: React.FC = () => {

    return (<>
        <FilterAgeForm />
        <FilterSalaryForm />
    </>);
}

export default FilterForm