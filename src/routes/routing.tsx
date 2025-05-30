import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchPage";
import StatisticsPage from "../components/pages/StatisticsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { path: "stat", element: <StatisticsPage /> },
        ]
    },

]);
export default router;