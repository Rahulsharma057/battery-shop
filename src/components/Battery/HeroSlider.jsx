"use client";

import { useState } from "react";
import {
  Box,
  MobileStepper,
  useMediaQuery,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  {
    label: "Power Your Drive",
    imgPath:
       "images/image1.png",
  },
  {
    label: "Inverter Backup Sale",
    imgPath:
      "images/IMAGE2.png",},
  {
    label: "Lithium Power",
    imgPath:
      "/images/IMAGE3.png",
  },
];

export default function HeroCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        sx={{
          width: isMobile ? "100%" : "100vw",
          maxWidth: isMobile ? 450 : "100%",
          px:isMobile ? 1 : 0,
        
          position: isMobile ? "static" : "relative",
          left: isMobile ? "0" : "50%",
          marginLeft: isMobile ? "0" : "-50vw",
        }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          onSlideChange={(swiper) =>
            setActiveStep(swiper.realIndex)
          }
        >
          {images.map((step, index) => (
            <SwiperSlide key={index}>
              <img
                src={step.imgPath}
                style={{
                  width: "100%",
                  height: isMobile ? 180 : 400,
                  objectFit: "cover",
                  objectPosition:"100% 58%",
                  backgroundColor:"rgb(23, 76, 18)",
                  borderRadius: 12,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <MobileStepper
        steps={images.length}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          justifyContent: "center",
          bgcolor: "transparent",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#ccc",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#1976d2",
          },
        }}
      />
    </>
  );
}