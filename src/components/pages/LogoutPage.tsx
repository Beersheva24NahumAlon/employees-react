import React from 'react'
import Logout from '../Logout'
import { useUserDataStore } from '../../state-management/store'
import { Navigate } from 'react-router-dom';

const LogoutPage:React.FC = () => {

    const resetUserData = useUserDataStore(s => s.resetUserData);
    const userData = useUserDataStore(s => s.userData);
    return (<>{
        userData ? <Logout submitter={() => resetUserData()} /> : <Navigate to="/login"/>
    }</>); 
}

export default LogoutPage