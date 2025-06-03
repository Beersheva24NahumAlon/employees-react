import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeButton } from './ui/color-mode'
import { FaHome, FaSearch, FaChartPie   } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { useEmployeesQuery } from '../state-management/store';

const Nav: React.FC = () => {
    const setFilterType = useEmployeesQuery(s => s.setFilterType);
    return (
        <HStack marginTop="2" justifyContent="left">
            <ColorModeButton />
            <Button border={0} variant="outline" size="2xl" onClick={() => setFilterType(null)}>
                <FaHome/><Link to="/">Home page</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl">
                <IoPersonAddSharp/><Link to="/add">Add employee</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl">
                <FaSearch/><Link to="/search">Search</Link>
            </Button>
            <Button border={0} variant="outline" size="2xl" onClick={() => setFilterType(null)}>
                <FaChartPie/><Link to="/stat">Statictics</Link>
            </Button>

        </HStack>
    )
}

export default Nav