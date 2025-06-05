import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeButton } from './ui/color-mode'
import { useEmployeesQueryStore } from '../state-management/store';
import { FcHome, FcBusinessman, FcSearch, FcDoughnutChart } from "react-icons/fc";

const Nav: React.FC = () => {
    const setFilterType = useEmployeesQueryStore(s => s.setFilterType);
    return (
        <HStack marginTop="2" justifyContent="left">
            <ColorModeButton />
            <Button border={0} variant="outline" size="2xl" onClick={() => setFilterType(null)}>
                <FcHome/><Link to="/">Home page</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl">
                <FcBusinessman/><Link to="/add">Add employee</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl">
                <FcSearch/><Link to="/search">Search</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl" onClick={() => setFilterType(null)}>
                <FcDoughnutChart/><Link to="/stat">Statictics</Link>
            </Button>
        </HStack>
    )
}

export default Nav