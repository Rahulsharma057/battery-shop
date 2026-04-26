"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const isMobile = useMediaQuery("(max-width:768px)");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Batteries", path: "/batteries" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          color: "#111",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "1200px",
            mx: "auto",
            width: "100%",
            py: 1,
          }}
        >
          {/* 🔋 Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BatteryChargingFullIcon
              sx={{
                color: "#4aa4b4",
                fontSize: 40,
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "0.5px",
                  m: 0,
                  p: 0,
                }}
              >
                CHAUHAN
              </Typography>
              <Typography
                sx={{
                  fontWeight: 220,
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  m: 0,
                  p: 0,
                }}
              >
                Battery House
              </Typography>
            </Box>
          </Box>

          {/* 📱 Mobile */}
          {isMobile ? (
            <>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 260 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography fontWeight={600}>Menu</Typography>

                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <Divider />
                  <List>
                    {menuItems.map((item) => (
                      <ListItemButton
                        key={item.name}
                        component={Link} // ✅ IMPORTANT
                        href={item.path} // ✅ route
                        onClick={() => {
                          setActive(item.name);
                          setOpen(false);
                        }}
                        sx={{
                          color: active === item.name ? "#16a34a" : "#111",
                        }}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}

                    <ListItemButton
                      component={Link}
                      href="/admin/login"
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary="Admin Login" />
                    </ListItemButton>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            /* 🖥️ Desktop */
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    disableRipple
                    onClick={() => setActive(item.name)}
                    sx={{
                      color: active === item.name ? "#16a34a" : "#374151",
                      fontWeight: 400,
                      fontSize: "15px",
                      textTransform: "none",
                      letterSpacing: "0.3px",
                      position: "relative",
                      px: 1,

                      "&:hover": {
                        color: "#16a34a",
                        bgcolor: "transparent",
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: active === item.name ? "100%" : "0%",
                        height: "2px",
                        left: 0,
                        bottom: "-4px",
                        backgroundColor: "#16a34a",
                        transition: "width 0.3s ease",
                      },

                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link href="/admin/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ml: 2,
                    bgcolor: "#16a34a",
                    textTransform: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 2,
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#15803d",
                    },
                  }}
                >
                  Admin Login
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
