import { Box, Button, HStack, Slider } from '@chakra-ui/react';
import React, { FormEvent, useRef } from 'react'
import { useEmployeesQueryStore } from '../state-management/store';
import ranges from "../../config/ranges.json";

const FilterAgeForm: React.FC = () => {

    const rangeElement = useRef<HTMLDivElement>(null);

    const range = useEmployeesQueryStore(s => s.searchQuery.rangeAge);
    const setRange = useEmployeesQueryStore(s => s.setRangeAge);
    const setFilterType = useEmployeesQueryStore(s => s.setFilterType);

    function onSubmitAge(event: FormEvent) {
        event.preventDefault();
        setFilterType("Age");
        setRange({
            min: +rangeElement.current?.innerText.split(",")[0]!,
            max: +rangeElement.current?.innerText.split(",")[1]!,
        });
    }

    return (
        <Box as="form" onSubmit={onSubmitAge}>
            <HStack>
                <Slider.Root
                    width="70vh"
                    defaultValue={[range.min, range.max]}
                    minStepsBetweenThumbs={1}
                    min={ranges.Age.min}
                    max={ranges.Age.max}
                >
                    <HStack justify="space-between">
                        <Slider.Label>Age</Slider.Label>
                        <Slider.ValueText ref={rangeElement} />
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
    )
}

export default FilterAgeForm