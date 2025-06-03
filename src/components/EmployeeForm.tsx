import React from 'react'
import Employee from '../model/Employee'
import { useForm } from 'react-hook-form'
import { Box, Button, Field, Flex, HStack, Input, NativeSelect } from '@chakra-ui/react'
import departments from "../../config/departments.json";
import { Age, Salary } from "../../config/ranges.json"
import { calculateBirthDate } from '../utils/functions';

interface Props {
    submitter: (empl: Employee) => void
}

function getMinMaxDates(): { min: string, max: string } {
    console.log(calculateBirthDate(Age.min), calculateBirthDate(Age.max))
    return {
        min: calculateBirthDate(Age.min),
        max: calculateBirthDate(Age.max)
    };
}

const EmployeeForm: React.FC<Props> = ({ submitter }) => {

    const { register, reset, formState: { errors }, handleSubmit } = useForm<Employee>()

    return (
        <Box as="form" onSubmit={handleSubmit(empl => submitter({...empl, salary: +empl.salary}))}>
            <Flex flexDirection={{
            base: "column",
            sm: "row"
        }}>
            <Field.Root invalid={!!errors.fullName}>
                <Field.Label>Full name</Field.Label>
                <Input
                    placeholder="Full name"
                    {...register("fullName", { required: true })}
                />
                <Field.ErrorText>Full name must be entered</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.department}>
                <Field.Label>Department</Field.Label>
                <NativeSelect.Root width={{
                    base: "80vw",
                    sm: "20vw"
                }}>
                    <NativeSelect.Field
                        placeholder="Select department"
                        {...register("department", { required: true })}
                    >
                        {departments.map(dep => <option value={dep} key={dep}>{dep}</option>)}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>
                <Field.ErrorText>Department must be selected</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.birthDate}>
                <Field.Label>Birth date</Field.Label>
                <Input
                    type="date"
                    placeholder="Birth date"
                    {...register("birthDate", { required: true })}
                    max={getMinMaxDates().min}
                    min={getMinMaxDates().max}
                />
                <Field.ErrorText>Birth date must be in range of age ({Age.min}, {Age.max})</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.salary}>
                <Field.Label>Salary</Field.Label>
                <Input
                    type="number"
                    placeholder="Salary"
                    {...register("salary", { required: true, min: Salary.min, max: Salary.max })}
                />
                <Field.ErrorText>Salary name must be in range ({Salary.min}, {Salary.max})</Field.ErrorText>
            </Field.Root>
        </Flex>
        <HStack>
            <Button size="sm" type="submit" mt="4">
                Save
            </Button>
            <Button size="sm" type="reset" mt="4">
                Reset
            </Button>
        </HStack>
        </Box>
    )
}

export default EmployeeForm