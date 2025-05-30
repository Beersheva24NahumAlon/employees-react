import { Box, Button, HStack, Input } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'
import { useSearch } from '../state-management/store';


const FilterAgeForm: React.FC = () => {

    const min = useSearch(s => s.minAge);
    const max = useSearch(s => s.maxAge);
    const setRange = useSearch(s => s.setAgeRange);

    const inputMinElement = useRef<HTMLInputElement>(null);
    const inputMaxElement = useRef<HTMLInputElement>(null);

    function onSubmit(event: FormEvent) {
        event.preventDefault();
        setRange(+inputMinElement.current?.value!, +inputMaxElement.current?.value!);
    }
    return (
        <Box as="form" onSubmit={onSubmit}>
            <HStack>
                <Input ref={inputMinElement} placeholder="minimum value..." defaultValue={min}></Input>
                <Input ref={inputMaxElement} placeholder="maximum value..." defaultValue={max}></Input>
                <Button type="submit">Filter</Button>
            </HStack>
        </Box>
    )
}

export default FilterAgeForm