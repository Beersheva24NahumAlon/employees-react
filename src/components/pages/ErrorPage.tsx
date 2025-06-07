import { AxiosError } from 'axios';
import { Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'
import { useUserDataStore } from '../../state-management/store';


const ErrorPage: React.FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const resetUserData = useUserDataStore(s => s.resetUserData);

    useEffect(() => {
        const status = (error as AxiosError).request?.status || 0;
        if (status == 401 || status == 403) {
            resetUserData();
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