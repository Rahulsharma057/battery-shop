"use client";

import {
  Box,
  Typography,
  Grid,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useState, useEffect } from "react";
import BatteryCard from "../Battery/BatteryCard";
import BatteryModal from "../Battery/BatteryModal";

export default function BatteriesPage() {
  const [batteries, setBatteries] = useState([]); // ✅ API DATA
  const [type, setType] = useState("");
  const [voltage, setVoltage] = useState("");
  const [sort, setSort] = useState("");
  const [selected, setSelected] = useState(null);
  const [typeOptions, setTypeOptions] = useState([]);
  const [voltageOptions, setVoltageOptions] = useState([]);

  const BASE_URL =
    "https://battery-shop-backend-ocb4.onrender.com/api/batteries";

  useEffect(() => {
    if (batteries.length > 0) {
      // ✅ Unique Types
      const types = [
        ...new Set(batteries.map((b) => b.specs?.type).filter(Boolean)),
      ];

      // ✅ Unique Voltages
      const voltages = [
        ...new Set(batteries.map((b) => b.specs?.voltage).filter(Boolean)),
      ];

      setTypeOptions(types);
      setVoltageOptions(voltages);
    }
  }, [batteries]);
  // ✅ FETCH API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setBatteries(data);
      } catch (err) {
        console.log("❌ FETCH ERROR:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ FILTER + SORT
  const filteredBatteries = batteries
    .filter((b) => {
    let match = true;

    if (type && b.specs?.type?.toLowerCase() !== type.toLowerCase())
      match = false;

    if (
      voltage &&
      b.specs?.voltage?.toLowerCase() !== voltage.toLowerCase()
    )
      match = false;

    return match;
  })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Box sx={{ py: 4, background: "#f8fafc", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={1}>
          All Batteries
        </Typography>

        {/* FILTERS */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="">All</MenuItem>

                {typeOptions.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Voltage</InputLabel>
              <Select
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>

                {voltageOptions.map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Sort</InputLabel>
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <MenuItem value="">Default</MenuItem>
                <MenuItem value="low">Price Low → High</MenuItem>
                <MenuItem value="high">Price High → Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {filteredBatteries.length > 0 ? (
            filteredBatteries.map((battery) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={battery._id}>
                <BatteryCard
                  battery={battery}
                  onClick={() => setSelected(battery)}
                />
              </Grid>
            ))
          ) : (
            <Box width="100%" textAlign="center" mt={5}>
              <Typography>No Batteries Found 😢</Typography>
            </Box>
          )}
        </Grid>
        {/* GRID */}
      </Container>
      {/* MODAL */}
      <BatteryModal
        open={!!selected}
        battery={selected}
        handleClose={() => setSelected(null)}
      />
    </Box>
  );
}
