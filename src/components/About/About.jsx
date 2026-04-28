"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        py: 3,
        background: "linear-gradient(to right, #f8fafc, #eef5ff)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* 🔥 Heading */}
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={1}>
          About Us
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Powering your world with reliable battery solutions ⚡
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* 🖼 LEFT IMAGE */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGXBEMQ-7JNRG40kAiAAipPmBFTPStwXoPX_FUAjb47pn6OxAV0KXkm9EeBf-G0SPOPlocKL3lLXL-PGv8XyBRJMFZ_aHc1GftKMz5wJL-qIN6JZdn1HK56BTHiBgcf_vlcDguR=s1360-w1360-h1020-rw"
              alt="about"
              sx={{
                height: "65vh",
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>

          {/* 📄 RIGHT CONTENT */}
          <Grid item xs={12} md={7}>
            {/* 👤 OWNER */}
            <Paper
              sx={{
                p: 2,
              
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <Avatar
                src="https://media.licdn.com/dms/image/v2/C5616AQGgvPYCMAIL_g/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1640192934357?e=2147483647&v=beta&t=kZG2SzIFQ_2FbA_-Q7eS5aIDUilfrXGUzQ4b44s50g8"
                sx={{ width: 60, height: 60 }}
              />

              <Box>
                <Typography fontWeight={600}>Manvendra Chauhan</Typography>
                <Typography variant="body2" color="text.secondary">
                  Battery Expert & Consultant
                </Typography>
              </Box>
            </Paper>

            <Typography variant="h4"  fontWeight={600} my={2}>
              Who We Are ?
            </Typography>

            <Typography my={2} color="text.secondary">
              We are a trusted battery shop based in Khurja City, Bulandshahr,
              providing high-quality inverter, car, and lithium batteries. Our
              mission is to deliver reliable power solutions at the best prices.
            </Typography>

            <Typography mb={2} color="text.secondary">
              With years of experience, we help customers choose the right
              battery based on their needs. Customer satisfaction is our top
              priority. With years of experience, we help customers choose the
              right battery based on their needs. Customer satisfaction is our
              top priority.
            </Typography>
          </Grid>
        </Grid>

        {/* 🚀 FEATURES */}
        <Grid container spacing={3} mt={6}>
          {[
            "High Quality Batteries",
            "Affordable Prices",
            "Expert Guidance",
            "Fast Service",
          ].map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                }}
              >
                <Typography fontWeight={600}>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
