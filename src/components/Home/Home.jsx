"use client";

import HeroSlider from "@/components/Battery/HeroSlider";
import BatteryGrid from "@/components/Battery/BatteryGrid";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import AboutSection from "@/components/Battery/AboutSection";
import PromotionsSection from "@/components/Battery/PromotionsSection";
import ThankYouSection from "@/components/Battery/ThankYouSection";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 4,
          mt: 2,
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Our Products
        </Typography>

        <Link href="/batteries" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            View All
          </Button>
        </Link>
      </Box>

      <Box sx={{ p: 3 }}>
        <BatteryGrid limit={8} />
      </Box>
      <AboutSection />
      <PromotionsSection />
      <ThankYouSection />
    </>
  );
}
