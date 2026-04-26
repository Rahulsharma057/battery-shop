"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);

  const isLoggedIn = true;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "Products", "About", "Contact"];

  const drawer = (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box>
        <Typography sx={{ p: 2, fontWeight: "bold" }}>
          MyShop
        </Typography>

        <Divider />

        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 2 }}>
        {isLoggedIn ? (
          <Button variant="contained" color="error" fullWidth>
            Logout
          </Button>
        ) : (
          <Button variant="contained" fullWidth>
            Login
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#0f172a" }}>
        <Toolbar>

          {/* MOBILE MENU */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* LOGO */}
          <Typography sx={{ fontWeight: "bold", mr: 3 }}>
            MyShop
          </Typography>

          {/* 🔥 DESKTOP MENU */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* PUSH RIGHT */}
          <Box sx={{ flexGrow: 1 }} />

          {/* RIGHT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>

            {/* 🔥 DESKTOP LOGIN/LOGOUT */}
            {!isMobile && (
              isLoggedIn ? (
                <Button color="error" variant="contained">
                  Logout
                </Button>
              ) : (
                <Button color="inherit" variant="outlined">
                  Login
                </Button>
              )
            )}

          </Box>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
}