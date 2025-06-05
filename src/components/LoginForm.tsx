import React, { useState } from 'react'
import { LoginData } from '../model/auth-data'
import { Alert, Box, Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface Props {
    submitter: (loginData: LoginData) => Promise<boolean>
}

const LoginForm: React.FC<Props> = ({ submitter }) => {
    const [isAlert, setIsAlert] = useState<boolean>(false)
    const { register, reset, formState: { errors }, handleSubmit } = useForm<LoginData>();
    const onSubmit = async (loginData: LoginData) => {
        const res = await submitter(loginData);
        if (res) {
            reset();
            setIsAlert(false);
        } else {
            setIsAlert(true);
        }
    }
    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Email</Field.Label>
                    <Input {...register("email", { required: true })} type="email" />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                    <Field.Label>Password</Field.Label>
                    <Input {...register("password", { required: true })} type="password" />
                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                </Field.Root>

                <Button type="submit">Login</Button>
                {isAlert && <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Content>
                        <Alert.Title>Invalid credentials</Alert.Title>
                        <Alert.Description>
                            Your email or password has some errors. Please fix them and try again.
                        </Alert.Description>
                    </Alert.Content>
                </Alert.Root>}
            </Stack>
        </Box>
    )
}

export default LoginForm