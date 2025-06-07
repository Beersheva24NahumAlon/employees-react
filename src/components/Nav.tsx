import { Button, HStack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ColorModeButton } from './ui/color-mode'
import { useEmployeesQueryStore, useUserDataStore } from '../state-management/store';
import { FcHome, FcBusinessman, FcSearch, FcDoughnutChart, FcInspection, FcImport } from "react-icons/fc";
import { UserData } from '../model/auth-data';

interface NavItem {
    path: string;
    label: string;
    icon?: ReactNode;
    onClickFn?: () => void;
    renderFn?: (userData: UserData | null) => boolean;
}


const Nav: React.FC = () => {
    const setFilterType = useEmployeesQueryStore(s => s.setFilterType);

    const navItems: NavItem[] = [
        { path: "/login", label: "Login", icon: <FcInspection  />, 
            renderFn: (userData) => !userData },
        { path: "/", label: "Home page", icon: <FcHome />, 
            onClickFn: () => setFilterType(null), renderFn: (userData) => !!userData },
        { path: "/add", label: "Add employee", icon: <FcBusinessman />, 
            renderFn: (userData) => !!userData && userData.role === "ADMIN" },
        { path: "/search", label: "Search", icon: <FcSearch />, 
            onClickFn: () => setFilterType(null), renderFn: (userData) => !!userData},
        { path: "/stat", label: "Statictics", icon: <FcDoughnutChart />, 
            renderFn: (userData) => !!userData},
        { path: "/logout", label: "Logout", icon: <FcImport />, 
            renderFn: (userData) => !!userData },
    ];

    const userData = useUserDataStore(s => s.userData);

    return (
        <HStack marginTop="2" justifyContent="left">
            {navItems.map((item) => item.renderFn && item.renderFn(userData) && (
                <Button border={0} variant="outline" size="2xl" onClick={item.onClickFn} key={item.path}>
                    {item.icon}<Link to={item.path}>{item.label}</Link>
                </Button>))}
            <ColorModeButton />
        </HStack>
    )
}

export default Nav