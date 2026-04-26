"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  InputAdornment,
  Divider,
} from "@mui/material";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/bettery-table");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        p: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 420,
          borderRadius: 4,
          p: 4,
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        {/* HEADER ICON */}
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "#1976d2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            boxShadow: "0 10px 25px rgba(25,118,210,0.3)",
          }}
        >
          <BatteryChargingFullIcon sx={{ color: "#fff", fontSize: 36 }} />
        </Box>

        {/* TITLE */}
        <Typography variant="h5" fontWeight="bold">
          Chauhan Batteries
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Admin Control Panel Login
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Admin Email"
          sx={{ mb: 2 }}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/* PASSWORD */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mb: 3 }}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/* LOGIN BUTTON */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={loading}
          sx={{
            py: 1.3,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#0f5bb5" },
          }}
          startIcon={!loading && <ElectricBoltIcon />}
        >
          {loading ? <CircularProgress size={22} /> : "Login to Dashboard"}
        </Button>

        {/* FOOTER */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 2 }}
        >
          © Chauhan Batteries Admin System
        </Typography>
      </Paper>
    </Box>
  );
}