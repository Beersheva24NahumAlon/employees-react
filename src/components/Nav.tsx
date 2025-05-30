import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeButton } from './ui/color-mode'

const Nav: React.FC = () => {
    return (
        <HStack marginTop="2" justifyContent="left">
            <ColorModeButton/>
            <Button variant="outline" asChild>
                <Link to="/">Home page</Link>
            </Button>
            <Button variant="outline">
                <Link to="/about">About us</Link>
            </Button>
            <Button variant="outline">
                <Link to="/contacts">Contacts</Link>
            </Button>
        </HStack>
    )
}

export default Nav