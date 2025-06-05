import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchPage";
import StatisticsPage from "../components/pages/StatisticsPage";
import AddEmployeePage from "../components/pages/AddEmployeePage";
import ErrorPage from "../components/pages/ErrorPage";
import LoginPage from "../components/pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { path: "stat", element: <StatisticsPage /> },
            { path: "add", element: <AddEmployeePage /> },
            { path: "login", element: <LoginPage /> },
        ]
    },

]);
export default router;