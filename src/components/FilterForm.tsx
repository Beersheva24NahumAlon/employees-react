import { Box, Button, HStack, Slider } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'
import { useEmployeesQuery } from '../state-management/store';

const FilterForm: React.FC = () => {

    const range = useEmployeesQuery(s => s.ageRange);
    const setRange = useEmployeesQuery(s => s.setAgeRange);

    const inputElement = useRef<HTMLDivElement>(null);

    function onSubmit(event: FormEvent) {
        event.preventDefault();
        //console.log(inputElement.current?.innerText);
        setRange({
            minAge: +inputElement.current?.innerText.split(",")[0]! || 18, 
            maxAge: +inputElement.current?.innerText.split(",")[1]! || 80,
        });
    }

    return (
        <Box as="form" onSubmit={onSubmit}>
            <Slider.Root 
                width="70vh" 
                defaultValue={[25, 65]} 
                minStepsBetweenThumbs={1} 
                min={18} 
                max={80} 
            >
                <HStack justify="space-between">
                    <Slider.Label>Label</Slider.Label>
                    <Slider.ValueText ref={inputElement}/>
                </HStack>
                <Slider.Control>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                </Slider.Control>
            </Slider.Root>
            <Button type="submit">Filter</Button>
        </Box>

    )
}

export default FilterForm