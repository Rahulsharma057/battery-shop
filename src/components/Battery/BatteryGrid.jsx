"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import BatteryCard from "./BatteryCard";
import BatteryModal from "./BatteryModal";

export default function BatteryGrid() {
  const [batteries, setBatteries] = useState([]);
  const [selected, setSelected] = useState(null);
  const BASE_URL = `https://battery-shop-backend-ocb4.onrender.com/api/batteries`;
console.log(process.env.NEXT_PUBLIC_API_URL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();

        console.log("🔥 API DATA:", data);
        setBatteries(data);
      } catch (err) {
        console.log("❌ FETCH ERROR:", err);
      }
    };

    fetchData();
  }, [BASE_URL]); // ✅ add dependency
  return (
    <>
      <Grid container spacing={3}>
        {batteries.map((battery) => (
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
