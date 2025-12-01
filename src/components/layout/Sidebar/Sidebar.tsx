import {
    Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Sidebar.css";

interface SidebarProps {
    open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            className={`sidebar ${open ? "open" : "closed"}`}
            slotProps={{
                paper: {
                    sx: {
                        width: open ? 240 : 70,
                        transition: "width 0.3s",
                        overflowX: "hidden",
                    },
                },
            }}
        >
            <Box className="sidebar-list-container">
                <List>
                    <ListItemButton onClick={() => navigate("/")}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        {open && <ListItemText primary="Dashboard" />}
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate("/products")}>
                        <ListItemIcon><InventoryIcon /></ListItemIcon>
                        {open && <ListItemText primary="Product" />}
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate("/orders")}>
                        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                        {open && <ListItemText primary="Order" />}
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;
