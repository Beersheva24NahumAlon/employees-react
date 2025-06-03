import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeButton } from './ui/color-mode'
import { useEmployeesQuery } from '../state-management/store'

const Nav: React.FC = () => {

    const setFilterType = useEmployeesQuery(s => s.setFilterType);

    return (
        <HStack marginTop="2" justifyContent="left">
            <ColorModeButton />
            <Button variant="outline" onClick={() => setFilterType(null)}>
                <Link to="/">Home page</Link>
            </Button>
            <Button variant="outline" >
                <Link to="/add">Add employee</Link>
            </Button>
            <Button variant="outline">
                <Link to="/search">Search</Link>
            </Button>
            <Button variant="outline" onClick={() => setFilterType(null)}>
                <Link to="/stat">Statictics</Link>
            </Button>

        </HStack>
    )
}

export default Nav