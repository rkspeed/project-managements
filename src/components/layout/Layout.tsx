import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import "./Layout.css";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <Box className="layout-container">
            <Topbar toggleSidebar={toggleSidebar} />
            <Sidebar open={sidebarOpen} />
            <Box component="main" className="layout-main">
                {children}
            </Box>
        </Box>
    );
}
