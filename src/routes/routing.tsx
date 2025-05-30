import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },

        ]
    },

]);
export default router;