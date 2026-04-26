"use client";

import { Box, Typography, Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ThankYouSection() {
  return (
    <Box
      sx={{
        py: 6,
        background: "linear-gradient(135deg, #ebefec, #f4f4f4)",
        color: "#191919",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">

        {/* 🙏 THANK YOU TEXT */}
        <Typography variant="h4" fontWeight={700} mb={2}>
          Thank You for Visiting!
        </Typography>

        <Typography mb={3} sx={{ opacity: 0.9 }}>
          We appreciate your trust in Chauhan Battery House.  
          Stay connected with us for latest offers & updates.
        </Typography>

        {/* 🔗 SOCIAL LINKS */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          
          <IconButton
            href="https://facebook.com"
            target="_blank"
            sx={{
              background: "#fff",
              color: "#1877f2",
              "&:hover": { background: "#e5e7eb" },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{
              background: "#fff",
              color: "#e1306c",
              "&:hover": { background: "#e5e7eb" },
            }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href="https://wa.me/919999999999" // ✅ apna number daalo
            target="_blank"
            sx={{
              background: "#fff",
              color: "#25d366",
              "&:hover": { background: "#e5e7eb" },
            }}
          >
            <WhatsAppIcon />
          </IconButton>

        </Box>

      </Container>
    </Box>
  );
}