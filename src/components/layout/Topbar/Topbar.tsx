import { AppBar, Toolbar, Box, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThemeToggle from "../../common/ThemeToggle";
import "./Topbar.css";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar = ({ toggleSidebar }: TopbarProps) => {
  return (
    <AppBar position="fixed" className="topbar-appbar">
      <Toolbar className="topbar-toolbar">
        
        {/* Menu Button */}
        <IconButton onClick={toggleSidebar} className="topbar-menu-btn">
          <MenuIcon />
        </IconButton>

        {/* Right Section */}
        <Box className="topbar-actions">
          <IconButton className="topbar-icon-btn">
            <NotificationsIcon />
          </IconButton>

          <ThemeToggle />

          <Avatar className="topbar-avatar">SN</Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
