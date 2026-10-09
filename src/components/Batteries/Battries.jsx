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
  TextField,
  InputAdornment,
  Pagination,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useEffect, useMemo, useState } from "react";
import BatteryCard from "../Battery/BatteryCard";
import BatteryModal from "../Battery/BatteryModal";
import { BATTERIES_URL } from "@/lib/api";

const PAGE_SIZE = 12;

export default function BatteriesPage() {
  const [batteries, setBatteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [voltage, setVoltage] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  // ✅ FETCH API
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

  const typeOptions = useMemo(
    () => [...new Set(batteries.map((b) => b.specs?.type).filter(Boolean))],
    [batteries],
  );

  const voltageOptions = useMemo(
    () => [...new Set(batteries.map((b) => b.specs?.voltage).filter(Boolean))],
    [batteries],
  );

  // ✅ FILTER + SORT
  const filteredBatteries = useMemo(() => {
    return batteries
      .filter((b) => {
        if (type && b.specs?.type?.toLowerCase() !== type.toLowerCase())
          return false;

        if (
          voltage &&
          b.specs?.voltage?.toLowerCase() !== voltage.toLowerCase()
        )
          return false;

        if (search && !b.name?.toLowerCase().includes(search.toLowerCase()))
          return false;

        return true;
      })
      .sort((a, b) => {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        return 0;
      });
  }, [batteries, type, voltage, search, sort]);

  // reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [type, voltage, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredBatteries.length / PAGE_SIZE));
  const pageItems = filteredBatteries.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <Box sx={{ py: 4, background: "#f8fafc", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={1}>
          All Batteries
        </Typography>

        {/* FILTERS */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search batteries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={6} sm={2.5}>
            <FormControl fullWidth size="small">
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>

                {typeOptions.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={2.5}>
            <FormControl fullWidth size="small">
              <InputLabel>Voltage</InputLabel>
              <Select
                label="Voltage"
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

          <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Sort</InputLabel>
              <Select
                label="Sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <MenuItem value="">Default</MenuItem>
                <MenuItem value="low">Price Low → High</MenuItem>
                <MenuItem value="high">Price High → Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {loading ? (
          <Box textAlign="center" py={6}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid container spacing={3}>
              {pageItems.length > 0 ? (
                pageItems.map((battery) => (
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

            {totalPages > 1 && (
              <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  color="primary"
                />
              </Box>
            )}
          </>
        )}
      </Container>

      <BatteryModal
        open={!!selected}
        battery={selected}
        handleClose={() => setSelected(null)}
      />
    </Box>
  );
}
