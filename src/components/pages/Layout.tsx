import { Box, VStack} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import apiClient from '../../services/ApiClientJsonServer'

const Layout: React.FC = () => {
    apiClient.addHeaderAuth("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdGVsLXJhbi5jb20iLCJpYXQiOjE3NDkxMDgwNjMsImV4cCI6MTc0OTExMTY2Mywic3ViIjoidW5kZWZpbmVkIn0.lQFtTsqPTqvm_jP8tr9I3u7nBjSlvOHBDYzHc7o8AEU");
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