"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: { xs: 150, sm: 150, md: 180 }, // ✅ responsive height
          objectFit: "cover",
          objectPosition:"100% 10%",
          
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 1.5, sm: 2 }, // ✅ responsive padding
        }}
      >
        <Box>
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" }, // ✅ responsive text
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: { xs: "25px", sm: "48px" },
            }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
          >
            ₹{product.price}
          </Typography>

          <Box display="flex" alignItems="center" gap={0.5} mt={1}>
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="small" // ✅ better for mobile
            />
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              ({product.rating})
            </Typography>
          </Box>
        </Box>

        <Link href={`/product/${product.id}`}>
          <Button
            variant="contained"
            fullWidth
            size="small" // ✅ compact on mobile
            sx={{
              mt: 1.5,
              backgroundColor: "black",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            View
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}