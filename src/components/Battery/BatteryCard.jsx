"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";
import { motion } from "framer-motion";

export default function BatteryCard({ battery, onClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div whileHover={!isMobile ? { scale: 1.03 } : {}}>
      <Card
        onClick={onClick}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          cursor: "pointer",
          background: "#fff",
          color: "#111",
          border: "1px solid #eee",
          transition: "0.3s",

          "&:hover": {
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* 🔋 IMAGE */}
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={battery.image}
            alt={battery.name}
            sx={{
              width: "100%",
              height: isMobile ? 120 : 160,
              objectFit: "cover",
            }}
          />

          {/* 🔥 Discount Badge */}
          <Chip
            label={`${battery.discount}% OFF`}
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "#ef4444",
              color: "#fff",
              fontWeight: 600,
              fontSize: "10px",
              height: 22,
            }}
          />

          {/* ⭐ Rating */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              alignItems: "center",
              gap: "3px",
              background: "#16a34a",
              color: "#fff",
              px: "6px",
              py: "2px",
              borderRadius: "6px",
            }}
          >
            <Typography sx={{ fontSize: 10, fontWeight: 600 }}>
              {battery.rating}
            </Typography>
            <StarIcon sx={{ fontSize: 10 }} />
          </Box>
        </Box>

        {/* 📦 CONTENT */}
        <CardContent sx={{ p: isMobile ? 1.5 : 2 }}>
          {/* 🔤 TITLE */}
          <Typography
            sx={{
              fontSize: isMobile ? 13 : 15,
              fontWeight: 600,
              lineHeight: 1.7,
              height:"25px",
              mb: 0.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflowX: "hidden",
            }}
          >
            {battery.name}
          </Typography>

          {/* ⚡ SPECS */}
          <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
            <Chip
              icon={<BoltIcon sx={{ fontSize: "12px !important" }} />}
              label={battery?.specs?.voltage || "N/A"}
              size="small"
              sx={{
                fontSize: "10px",
                height: 20,
                background: "#f1f5f9",
                color: "#333",
              }}
            />

            <Chip
              label={battery?.specs?.warranty || "N/A"}
              size="small"
              sx={{
                fontSize: "10px",
                height: 20,
                background: "#f1f5f9",
                color: "#333",
              }}
            />
          </Box>

          {/* 💰 PRICE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontSize: isMobile ? 16 : 18,
                fontWeight: 700,
                color: "#16a34a",
              }}
            >
              ₹{battery.price}
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                textDecoration: "line-through",
                color: "#888",
              }}
            >
              ₹{battery.originalPrice}
            </Typography>
          </Box>

          {/* 🔘 BUTTON */}
          <Button
            variant="contained"
            fullWidth
            size={isMobile ? "small" : "medium"}
            sx={{
              mt: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: isMobile ? 12 : 14,
              background: "#16a34a",

              "&:hover": {
                background: "#15803d",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}