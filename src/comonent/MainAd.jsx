"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Button, MobileStepper } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  {
    label: "New Collection",
    desc: "Elevate Your Style",
    imgPath:
      "https://us.123rf.com/450wm/dmvasilenko77/dmvasilenko771904/dmvasilenko77190400461/119965042-side-view-of-smiling-pretty-young-woman-in-yellow-dress-summer-hat-looking-camera-isolated-on.jpg?ver=6",
  },
  {
    label: "Summer Sale",
    desc: "Up to 50% OFF",
    imgPath:
      "https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg",
  },
  {
    label: "Trending Now",
    desc: "Shop Latest Fashion",
    imgPath:
      "https://img.freepik.com/free-photo/elegant-woman-orange-blouse-golden-silk-pants-posing-beige-wall-hight-heels-amazing-wavy-hairs-full-lenght_273443-4082.jpg",
  },
];

export default function HeroCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", my: 2 }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        onSlideChange={(swiper) => setActiveStep(swiper.realIndex)}
      >
        {images.map((step, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative" }}>
              <img
                src={step.imgPath}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  color: "white",
                }}
              >
                <Typography
                  sx={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  {step.label}
                </Typography>

                <Typography fontWeight={700} fontSize={20}>
                  {step.desc}
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 3,
                    bgcolor: "#2d2d2d",
                    color: "#f7f7f7",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots Indicator */}
     <MobileStepper
  steps={images.length}
  position="static"
  activeStep={activeStep}
  nextButton={null}
  backButton={null}
  sx={{
    justifyContent: "center",     // ✅ center dots

    color: "white",
    "& .MuiMobileStepper-dot": {
      backgroundColor: "#bcb8b8",    // inactive dots
    },
    "& .MuiMobileStepper-dotActive": {
         backgroundColor: "#121111",  // active dot
    },
  }}
/>
    </Box>
  );
}