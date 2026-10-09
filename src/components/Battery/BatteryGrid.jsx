"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import BatteryCard from "./BatteryCard";
import BatteryModal from "./BatteryModal";
import { BATTERIES_URL } from "@/lib/api";

export default function BatteryGrid({ limit } = {}) {
  const [batteries, setBatteries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BATTERIES_URL);
        const data = await res.json();
        setBatteries(data);
      } catch (err) {
        console.error("Failed to load batteries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const visible = limit ? batteries.slice(0, limit) : batteries;

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (visible.length === 0) {
    return (
      <Box textAlign="center" py={5}>
        <Typography color="text.secondary">No batteries found 😢</Typography>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        {visible.map((battery) => (
          <Grid xs={6} sm={6} md={3} key={battery._id}>
            <BatteryCard
              battery={battery}
              onClick={() => setSelected(battery)}
            />
          </Grid>
        ))}
      </Grid>

      <BatteryModal
        open={!!selected}
        battery={selected}
        handleClose={() => setSelected(null)}
      />
    </>
  );
}
