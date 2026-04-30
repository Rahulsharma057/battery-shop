"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { toast, ToastContainer } from "react-toastify";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!name || !phone || !message) {
      alert("Please fill required fields");
      return;
    }
    if (phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }
    setLoading(true);
    const text = `Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/919761709408?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    toast.success("Message sent!");

    // reset form
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setLoading(false);
  };

  return (
    <Box
      sx={{
        py: 1,
        background: "linear-gradient(to right, #f9fbfd, #eef5ff)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h4" fontWeight={700} mb={1}>
                Contact Us
              </Typography>

              <Typography mb={3} color="text.secondary">
                Have questions about batteries or need help choosing the right
                one?
              </Typography>

              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <TextField
                  label="Your Name"
                  value={name}
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Contact Number"
                  value={phone}
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  label="Your Email (Optional)"
                  value={email}
                  fullWidth
                  type="email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Message"
                  value={message}
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    background: "#1976d2",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.2,
                    "&:hover": {
                      background: "#125ea2",
                    },
                  }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* 📞 CONTACT INFO */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Paper
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 4,
                height: "100%",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                border: "1px solid #f1f5f9",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                📞 Get in touch
              </Typography>

              <Stack spacing={2.5}>
                {/* 👤 PROFILE */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.5,
                    borderRadius: 3,
                    bgcolor: "#f8fafc",
                  }}
                >
                  <Avatar
                    src="images/satenrasinghchauhan.jpeg"
                    sx={{
                      width: 55,
                      height: 55,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Box>
                    <Typography fontWeight={600} fontSize={14}>
                      Satendra Singh Chauhan
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      Owner - CHAUHAN BATTERY HOUSE
                    </Typography>
                  </Box>
                </Box>

                {/* 📍 ADDRESS */}
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: "#1976d2", mt: 0.3 }} />
                  <Typography fontSize={14} lineHeight={1.6}>
                    CHAUHAN BATTERY HOUSE <br />
                    G.T. ROAD, Khurja City <br />
                    Bulandshahr, UP - 203132
                  </Typography>
                </Box>

                {/* 🗺 MAP */}
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    height: { xs: 180, sm: 220, md: 240 },
                    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.6489117701544!2d77.86016187415157!3d28.248334101426234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca914e47afe93%3A0x3d09bacec67ab8d2!2sCHAUHAN%20BATTERY%20HOUSE%20G.T.ROAD%20KHURJA%20BULANDSHAHAR%20203131!5e0!3m2!1sen!2sin!4v1777186839520!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </Box>

                {/* 📞 PHONE */}
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <PhoneIcon sx={{ color: "#16a34a" }} />
                  <Typography fontSize={14}>
                    +91 94118 35880 <br /> +91 8755946495
                  </Typography>
                </Box>

                {/* 📧 EMAIL */}
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <EmailIcon sx={{ color: "#d32f2f" }} />
                  <Typography fontSize={14}>chauhanbatterykrj@gmail.com</Typography>
                </Box>

                {/* 🔥 ACTION BUTTONS */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    href="tel:9411835880"
                    sx={{
                      bgcolor: "#16a34a",
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: 13,
                      "&:hover": { bgcolor: "#15803d" },
                    }}
                  >
                    Call Now
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    href="https://wa.me/919411835880"
                    target="_blank"
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      fontSize: 13,
                    }}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Stack>

              <Typography mt={3} fontSize={13} color="text.secondary">
                We help you choose the best batteries for your home, inverter,
                and vehicles. Feel free to contact us anytime!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer position="bottom-left" autoClose={2000} />
    </Box>
  );
}
