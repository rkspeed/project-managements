import {
    Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Sidebar.css";

interface SidebarProps {
    open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
    return (
        <Drawer
            variant="permanent"
            className={`sidebar ${open ? "open" : "closed"}`}
        >
            <Box className="sidebar-list-container">
                <List>
                    <ListItemButton>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        {open && <ListItemText primary="Dashboard" />}
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon><InventoryIcon /></ListItemIcon>
                        {open && <ListItemText primary="Product" />}
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                        {open && <ListItemText primary="Order" />}
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;
