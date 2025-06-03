import React, { FormEvent, useRef } from 'react'
import { useEmployeesQuery } from '../state-management/store';
import { Box, Button, HStack, Slider } from '@chakra-ui/react';
import ranges from "../../config/ranges.json";

const FilterSalaryForm: React.FC = () => {

    const rangeElement = useRef<HTMLDivElement>(null);

    const range = useEmployeesQuery(s => s.searchQuery.rangeSalary);
    const setRange = useEmployeesQuery(s => s.setRangeSalary);
    const setFilterType = useEmployeesQuery(s => s.setFilterType);

    function onSubmitSalary(event: FormEvent) {
        event.preventDefault();
        setFilterType("Salary");
        setRange({
            min: +rangeElement.current?.innerText.split(",")[0]!,
            max: +rangeElement.current?.innerText.split(",")[1]!,
        });
    }

    return (
        <Box as="form" onSubmit={onSubmitSalary}>
            <HStack>
                <Slider.Root
                    defaultValue={[range.min, range.max]}
                    minStepsBetweenThumbs={100}
                    min={ranges.Salary.min}
                    max={ranges.Salary.max}
                    step={100}
                    width="70vh"
                >
                    <HStack justify="space-between">
                        <Slider.Label>Salary</Slider.Label>
                        <Slider.ValueText ref={rangeElement} />
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
    )
}

export default FilterSalaryForm