import { Box, VStack} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'

const Layout: React.FC = () => {
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