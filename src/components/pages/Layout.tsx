import { Box, VStack} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import apiClient from '../../services/ApiClientJsonServer'

const Layout: React.FC = () => {
    apiClient.addHeaderAuth("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdGVsLXJhbi5jb20iLCJpYXQiOjE3NDkwNjAwNzEsImV4cCI6MTc0OTA2MzY3MSwic3ViIjoidW5kZWZpbmVkIn0.JHcEx0GcRotmBSOjzEZ_N3P2kA9LqO8nj2K0hBYNUas");
    return (
            <VStack>
                <Nav />
                <Box overflow="auto" maxHeight="89vh" width="95vw">
                    <Outlet/>
                </Box>
                
            </VStack>
    )
}

export default Layout