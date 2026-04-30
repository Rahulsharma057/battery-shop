"use client";

import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Link from "next/link";

export default function AboutSection() {
  return (
    <Box sx={{ py: 6, background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* 🖼️ LEFT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="images/IMAGE4.png"
              alt="Battery Shop"
              sx={{
                width: "100%",
                height: { xs: 220, md: 370 },
                objectFit: "contain",
                borderRadius: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>

          {/* 📝 RIGHT CONTENT */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={2}
              sx={{ color: "#111" }}
            >
              About Our Battery Shop
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Welcome to Chauhan Battery House, your trusted destination for
              high-quality batteries. We provide a wide range of car batteries,
              inverter batteries, and lithium batteries at affordable prices.
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Our mission is to deliver reliable power solutions with the best
              customer service. Whether you need backup power for your home or a
              durable battery for your vehicle, we have the perfect solution for
              you.
            </Typography>
            <Typography color="text.secondary" mb={3}>
              ✔ Genuine Products <br />
              ✔ Affordable Prices <br />
              ✔ Fast Delivery <br />✔ Expert Support
            </Typography>
           
            <Link href="/batteries" passHref>
              <Button
                variant="contained"
                sx={{
                  background: "#16a34a",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    background: "#15803d",
                  },
                }}
              >
                Explore Products
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
