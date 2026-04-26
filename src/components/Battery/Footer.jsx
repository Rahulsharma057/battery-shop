"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp"
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 5,
        background: "#ffffff",
        borderTop: "1px solid #eee",
        pt: 5,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* 🔋 Logo + About */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <BatteryChargingFullIcon
                sx={{ fontSize: "3rem", color: "#4aa4b4" }}
              />
              <Typography fontWeight={700} fontSize={22}>
                Chauhan Battery House
              </Typography>
            </Box>

            <Typography fontSize={14} color="text.secondary">
              We provide high-quality batteries for cars, inverters, bikes, and
              solar systems at the best prices.
            </Typography>
          </Grid>

          {/* 🔗 Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={600} mb={1}>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" style={{ textDecoration: "none", color: "#555" }}>
                Home
              </Link>
              <Link
                href="/batteries"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Batteries
              </Link>
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* ⚡ Categories */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight={600} mb={1}>
              Categories
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography fontSize={14}>Car Batteries</Typography>
              <Typography fontSize={14}>Inverter Batteries</Typography>
              <Typography fontSize={14}>Bike Batteries</Typography>
              <Typography fontSize={14}>Solar Batteries</Typography>
            </Box>
          </Grid>

          {/* 📞 Contact */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight={600} >
              Contact
            </Typography>

            <Box mx={2}>
              <IconButton size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://wa.me/919411835880" size="small">
                <WhatsappIcon />
              </IconButton>
            </Box>

            <Typography fontSize={14} mb={1}>
              📍 CHAUHAN BATTERY HOUSE ,<br />
              G.T.ROAD , Khurja City , Bulandshahr ,<br />
   
            </Typography>

            <Typography fontSize={14} mb={1}>
              📞 +91 9411835880 , +91 8755946495
            </Typography>

            <Typography fontSize={14}>📧 chauhanbatterykrj@gmail.com</Typography>

            {/* 🌐 Social */}
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3 }} />

        {/* Bottom */}
        <Typography textAlign="center" fontSize={13} color="text.secondary">
          © {new Date().getFullYear()} Chauhan Battery House. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
