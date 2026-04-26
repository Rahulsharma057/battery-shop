"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import BatteryCard from "./BatteryCard";
import BatteryModal from "./BatteryModal";

export default function BatteryGrid() {
  const [batteries, setBatteries] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/batteries")
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 API DATA:", data);
        setBatteries(data);
      })
      .catch((err) => console.log(err));
  }, []);

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