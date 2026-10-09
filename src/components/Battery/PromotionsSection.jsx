"use client";

import { Box, Container, Typography, Grid, Avatar, Paper } from "@mui/material";

const promoImages = [
  { src: "/images/promo-services.jpg", alt: "Chauhan Battery House services and toll-free numbers" },
  { src: "/images/promo-since-1992.jpg", alt: "Chauhan Battery House — serving since 1992" },
  { src: "/images/promo-brands-offers.jpg", alt: "Chauhan Battery House brands and special offers" },
  { src: "/images/promo-finance.jpg", alt: "Easy EMI finance on inverters and batteries" },
];

export default function PromotionsSection() {
  return (
    <Box sx={{ py: 6, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={1} textAlign="center">
          Our Offers & Services
        </Typography>
        <Typography color="text.secondary" textAlign="center" mb={4}>
          Trusted by Khurja since 1992 — genuine batteries, easy finance & expert service
        </Typography>

        <Grid container spacing={3} alignItems="flex-start">
          {/* Owner card */}
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: "center",
                border: "1px solid #eee",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src="/images/owner-manvendra.jpg"
                alt="Manvendra Chauhan"
                sx={{ width: 120, height: 120, mb: 2, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
              />
              <Typography fontWeight={700} fontSize={18}>
                Manvendra Chauhan
              </Typography>
              <Typography color="text.secondary" fontSize={14}>
                Owner, Chauhan Battery House
              </Typography>
            </Paper>
          </Grid>

          {/* Promo poster masonry */}
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                columnCount: { xs: 2, sm: 3, md: 3 },
                columnGap: "16px",
              }}
            >
              {promoImages.map((img) => (
                <Box
                  key={img.src}
                  sx={{
                    breakInside: "avoid",
                    mb: 2,
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    border: "1px solid #eee",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: "100%", display: "block" }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
