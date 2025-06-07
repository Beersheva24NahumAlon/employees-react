import { AxiosError } from 'axios';
import { Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'


const ErrorPage: React.FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => {
        const status = (error as AxiosError).request?.status || 0;
        if (status == 401 || status == 403) {
            navigate("/login");
        }
    }, [error]);

    let text = "";
    if (isRouteErrorResponse(error)) {
        text = `Ivalid route: ${error.data}`;
    } else {
        text = (error as Error).message;
    }
    return (
        <Text>{text}</Text>    
    )
}

export default ErrorPage