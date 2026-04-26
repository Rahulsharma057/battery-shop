<<<<<<< HEAD

import HeroCarousel from "@/comonent/MainAd";
import ProductGrid from "@/comonent/ProductGrid";

export default function Home() {
  return (
    <div>
      
      <HeroCarousel />
      <ProductGrid/>
    </div>
  );
}
=======
"use client";
import HeroSlider from "@/components/Battery/HeroSlider";

import BatteryGrid from "@/components/Battery/BatteryGrid";
import { Box, Typography } from "@mui/material";
import AboutSection from "@/components/Battery/AboutSection";
import ThankYouSection from "@/components/Battery/ThankYouSection";
export default function Home() {
  return (
    <>
     

      <HeroSlider />
      <Typography variant="h4" fontWeight={700} mb={1} mx={4}>
        Our Products
        </Typography>

      <Box sx={{ p: 3 }}>
        <BatteryGrid />
      </Box>
      < AboutSection/>
      <ThankYouSection/>
    </>
  );
}
>>>>>>> 4d4b1b3ed58ab0df9a624ec14027cd4502fd1d8b
