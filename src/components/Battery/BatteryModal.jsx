"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";

export default function BatteryModal({ open, handleClose, battery }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!battery) return null;

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

/*   const handleBuy = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }; */

  const handleOrder = () => {
  const text = `🛒 * New Order Request :- *

🖼️ *Product Image:* ${battery.image}

 🔋 *Product:* ${battery.name}
💰 *Price:* ₹${battery.price}
📦 *Original Price:* ₹${battery.originalPrice}

📄 *Description:*
${battery.description}

⚡ *Features:*
${battery.features.join(", ")}

📊 *Specifications:*
${Object.entries(battery.specs)
  .map(([key, val]) => `${key}: ${val}`)
  .join("\n")}

-------------------------
*Please contact customer for order confirmation.*`;

  const url = `https://wa.me/919411835880?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : "16px",
          overflow: "hidden",
        },
      }}
    >
      {/* 🔝 HEADER (Back / Close) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1.5,
          borderBottom: "1px solid #eee",
        }}
      >
        <IconButton onClick={handleClose}>
          {isMobile ? <ArrowBackIcon /> : <CloseIcon />}
        </IconButton>
        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
          Product Details
        </Typography>
        <Box width={40} /> {/* spacing balance */}
      </Box>

      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* IMAGE */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: isMobile ? 200 : 400,
            }}
          >
            <Box
              component="img"
              src={battery.image}
              alt={battery.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Like */}
            <IconButton
              onClick={handleLike}
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                background: "rgba(0,0,0,0.5)",
              }}
            >
              {liked ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>
          </Box>

          {/* CONTENT */}
          <Box sx={{ flex: 1, p: isMobile ? 2 : 3 }}>
            {/* TITLE */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                {battery.name}
              </Typography>

              <Chip
                icon={<StarIcon sx={{ fontSize: 14 }} />}
                label="4.8"
                size="small"
              />
            </Box>

            {/* PRICE */}
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Typography
                sx={{ fontSize: 22, fontWeight: 800, color: "green" }}
              >
                ₹{battery.price}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  textDecoration: "line-through",
                }}
              >
                ₹{battery.originalPrice}
              </Typography>
            </Box>

            {/* DESC */}
            <Typography sx={{ fontSize: 13, mt: 1.5 }}>
              {battery.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* FEATURES */}
            <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
              Features
            </Typography>

            {battery.features.map((item, i) => (
              <Box key={i} sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                <BoltIcon sx={{ fontSize: 14 }} />
                <Typography sx={{ fontSize: 12 }}>{item}</Typography>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* 🔥 SPECS (MOBILE FRIENDLY) */}
            <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
              Specifications
            </Typography>

            <Box sx={{ mt: 1 }}>
              {Object.entries(battery.specs).map(([key, val]) => (
                <Box
                  key={key}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eee",
                    py: 1,
                  }}
                >
                  <Typography sx={{ fontSize: 12, color: "gray" }}>
                    {key}
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    {val}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* BUTTONS */}
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <Button
                fullWidth
                variant="contained"
                size={isMobile ? "small" : "medium"}
                onClick={handleOrder}
              >
                Order Now
              </Button>

              <Button
                fullWidth
                variant="outlined"
                size={isMobile ? "small" : "medium"}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
