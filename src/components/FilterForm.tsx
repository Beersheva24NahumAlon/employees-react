import { Box, Button, HStack, Slider } from '@chakra-ui/react'
import React, { FormEvent, ReactNode, useRef } from 'react'
import { useEmployeesQuery } from '../state-management/store';
import filterTypes from "../../config/filter-types.json";


const FilterForm: React.FC = () => {
    const inputElementAge = useRef<HTMLDivElement>(null);
    const inputElementSalary = useRef<HTMLDivElement>(null);

    const rangeAge = useEmployeesQuery(s => s.searchQuery.rangeAge);
    const rangeSalary = useEmployeesQuery(s => s.searchQuery.rangeSalary);
    const setRangeSalary = useEmployeesQuery(s => s.setRangeSalary);
    const setRangeAge = useEmployeesQuery(s => s.setRangeAge);
    const setFilterType = useEmployeesQuery(s => s.setFilterType);

    function onSubmitAge(event: FormEvent) {
        event.preventDefault();
        setFilterType("Age");
        setRangeAge({
            min: +inputElementAge.current?.innerText.split(",")[0]!,
            max: +inputElementAge.current?.innerText.split(",")[1]!,
        });
    }

    function onSubmitSalary(event: FormEvent) {
        event.preventDefault();
        setFilterType("Salary");
        setRangeSalary({
            min: +inputElementSalary.current?.innerText.split(",")[0]!,
            max: +inputElementSalary.current?.innerText.split(",")[1]!,
        });
    }
    const ageForm: ReactNode = (
        <Box as="form" onSubmit={onSubmitAge}>
            <HStack>
                <Slider.Root
                    width="70vh"
                    defaultValue={[rangeAge.min, rangeAge.max]}
                    minStepsBetweenThumbs={1}
                    min={filterTypes.Age.min}
                    max={filterTypes.Age.max}
                >
                    <HStack justify="space-between">
                        <Slider.Label>Age</Slider.Label>
                        <Slider.ValueText ref={inputElementAge} />
                    </HStack>
                    <Slider.Control>
                        <Slider.Track>
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                    </Slider.Control>
                </Slider.Root>
                <Button type="submit" marginLeft={5}>Filter by age</Button>
            </HStack>

        </Box>
    );
    const salaryForm: ReactNode = (
        <Box as="form" onSubmit={onSubmitSalary}>
            <HStack>
                <Slider.Root
                    width="70vh"
                    defaultValue={[rangeSalary.min, rangeSalary.max]}
                    minStepsBetweenThumbs={1}
                    min={filterTypes.Salary.min}
                    max={filterTypes.Salary.max}
                    step={100}
                >
                    <HStack justify="space-between">
                        <Slider.Label>Salary</Slider.Label>
                        <Slider.ValueText ref={inputElementSalary} />
                    </HStack>
                    <Slider.Control>
                        <Slider.Track>
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Thumbs />
                    </Slider.Control>
                </Slider.Root>
                <Button type="submit" marginLeft={5}>Filter by salary</Button>
            </HStack>

        </Box>
    );
    return (<>
        {ageForm}
        {salaryForm}
    </>);
}

export default FilterForm