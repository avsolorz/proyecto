import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 260;

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => setMobileOpen((v) => !v);

  const drawer = (
    <Box sx={{ p: 2, "& a": { textDecoration: "none", color: "inherit", width: "100%", display: "block", borderRadius: 2 }, "& a.active": { background: "rgba(255,255,255,.08)" } }}>
      <Typography variant="h6" fontWeight={900} sx={{ mb: 2 }}>
        ADMIN
      </Typography>

      <Divider sx={{ mb: 1 }} />

      <List sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          <ListItemButton>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard (Products)" />
          </ListItemButton>
        </NavLink>

        <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : "")}>
          <ListItemButton>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </NavLink>

        <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
          <ListItemButton>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </NavLink>

        <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>
          <ListItemButton>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
          <ListItemButton>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1, bgcolor: "#1a1a2e" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" fontWeight={900} noWrap>
            Examen Final
          </Typography>

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth, top: 56, height: "calc(100% - 56px)" },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
