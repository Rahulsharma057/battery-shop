"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  CircularProgress,
  IconButton,
  Chip,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

import BatteryForm from "@/components/Battery/BatteryForm";

export default function AdminPage() {
const BASE_URL = `https://battery-shop-backend-ocb4.onrender.com/api/batteries`;
  const [batteries, setBatteries] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.push("/admin/login");
    }
  }, []);

const handleLogout = () => {
  localStorage.removeItem("adminToken"); 
  router.push("/admin/login");
};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredBatteries = batteries.filter((b) =>
    `${b.name} ${b.specs?.capacity}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

const fetchData = async () => {
  setLoading(true);

  try {
    const res = await fetch(BASE_URL);
    console.log(res);
    const data = await res.json();
    setBatteries(data);
  } catch (err) {
    toast.error("Failed to load data ❌");
  }

  setLoading(false);
};

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = async () => {
    try {
      setDeletingId(deleteId);

      await fetch(`${BASE_URL}/${deleteId}`, {
        method: "DELETE",
      });

      toast.success("Battery Deleted 🗑️");
      fetchData();
    } catch (err) {
      toast.error("Delete failed ❌");
    } finally {
      setDeletingId(null);
      setConfirmOpen(false);
      setDeleteId(null);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      {/* HEADER */}
      <AppBar
        position="sticky"
        sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BatteryChargingFullIcon sx={{ color: "#1976d2" }} />

            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              fontWeight="bold"
              noWrap
            >
              Battery Admin
            </Typography>
          </Box>

          {/* RIGHT BUTTON */}
          <Box sx={
            {display:"flex",justifyContent:"center"}
          }>
            <Button
              variant="contained"
              startIcon={!isMobile && <AddIcon />}
              onClick={() => {
                setSelected(null);
                setOpen(true);
              }}
              sx={{
                bgcolor: "rgba(70, 191, 43, 0.94)",
                minWidth: isMobile ? "auto" : 140,
                px: isMobile ? 1.5 : 2.5,
                fontSize: isMobile ? 12 : 14,
                textTransform: "none",
                borderRadius: 2,
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "Add" : "Add Battery"}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              sx={{
                ml: 1,
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "row" : "row",
                alignItems: isMobile ? "center" : "center",
                justifyContent: "space-between",
                gap: isMobile ? 1 : 0,
                mb: 1,
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  mx: isMobile ? 0 : 2,
                  fontWeight: 600,
                }}
              >
                Battery Management
              </Typography>

              <Chip
                size="small"
                label={`${batteries.length} Items`}
                color="primary"
                sx={{
                  alignSelf: isMobile ? "flex-start" : "center",
                }}
              />
            </Box>
            <TextField
              size="small"
              placeholder="Search battery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                width: isMobile ? "200px" : "250px",
                bgcolor: "#fff",
                borderRadius: 2,
              }}
            />
          </Box>

          {/* DESKTOP TABLE */}
          {!isMobile && (
            <TableContainer
              component={Paper}
              sx={{
                border: "0.5px solid rgba(96, 90, 90, 0.27)",
                borderRadius: 3,
                boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
              }}
            >
              <Table>
                {/* HEADER */}
                <TableHead>
                  <TableRow
                    sx={{
                      bgcolor: "#7027ac",
                      "& th": {
                        fontWeight: "bold",
                        color: "#ffffff",
                      },
                    }}
                  >
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Capacity</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>

                {/* BODY */}
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : filteredBatteries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No batteries found 🔋
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBatteries.map((b) => (
                      <TableRow
                        key={b._id}
                        hover
                        sx={{
                          transition: "0.2s",
                          "&:hover": {
                            bgcolor: "#f1f5f9",
                          },
                        }}
                      >
                        <TableCell sx={{ fontWeight: 500 }}>{b.name}</TableCell>

                        <TableCell sx={{ color: "green", fontWeight: 600 }}>
                          ₹{b.price}
                        </TableCell>

                        <TableCell>{b.specs?.capacity || "-"}</TableCell>

                        <TableCell>
                          <Box
                            component="img"
                            src={b.image}
                            alt={b.name}
                            sx={{
                              width: 60,
                              height: 40,
                              objectFit: "cover",
                              borderRadius: 1,
                              border: "1px solid #eee",
                            }}
                          />
                        </TableCell>

                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: 1,
                            }}
                          >
                            <IconButton
                              sx={{
                                bgcolor: "#e0f2fe",
                                "&:hover": { bgcolor: "#bae6fd" },
                              }}
                              onClick={() => {
                                setSelected(b);
                                setOpen(true);
                              }}
                            >
                              <EditIcon sx={{ color: "#0284c7" }} />
                            </IconButton>

                            <IconButton
                              sx={{
                                bgcolor: "#fee2e2",
                                "&:hover": { bgcolor: "#fecaca" },
                              }}
                              onClick={() => {
                                setDeleteId(b._id);
                                setConfirmOpen(true);
                              }}
                              disabled={deletingId === b._id}
                            >
                              {deletingId === b._id ? (
                                <CircularProgress size={20} />
                              ) : (
                                <DeleteIcon sx={{ color: "#dc2626" }} />
                              )}
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* MOBILE CARD VIEW */}
          {isMobile && (
            <Grid container spacing={2}>
              {loading ? (
                <Grid item xs={12} textAlign="center">
                  <CircularProgress />
                </Grid>
              ) : batteries.length === 0 ? (
                <Grid item xs={12} textAlign="center">
                  No batteries found 🔋
                </Grid>
              ) : (
                batteries.map((b) => (
                  <Grid item xs={12} key={b._id}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid #eee",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* IMAGE */}
                      <Box sx={{ position: "relative" }}>
                        <Box
                          component="img"
                          src={b.image}
                          alt={b.name}
                          sx={{
                            width: "100%",
                            height: 140,
                            objectFit: "cover",
                          }}
                        />

                        {/* Discount */}
                        <Chip
                          label={`${b.discount || 0}% OFF`}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            bgcolor: "#ef4444",
                            color: "#fff",
                            fontSize: 10,
                          }}
                        />
                      </Box>

                      <CardContent sx={{ p: 1.5 }}>
                        {/* NAME */}
                        <Typography fontWeight={600} fontSize={14}>
                          {b.name}
                        </Typography>

                        {/* SPECS */}
                        <Typography fontSize={12} color="text.secondary">
                          {b.specs?.voltage} • {b.specs?.capacity}
                        </Typography>

                        {/* PRICE */}
                        <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                          <Typography fontWeight="bold" color="green">
                            ₹{b.price}
                          </Typography>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              fontSize: 12,
                              color: "gray",
                            }}
                          >
                            ₹{b.originalPrice}
                          </Typography>
                        </Box>

                        {/* ACTION BUTTONS */}
                        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                          <Button
                            fullWidth
                            size="small"
                            variant="outlined"
                            startIcon={<EditIcon />}
                            onClick={() => {
                              setSelected(b);
                              setOpen(true);
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            fullWidth
                            size="small"
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => {
                              setDeleteId(b._id);
                              setConfirmOpen(true);
                            }}
                            disabled={deletingId === b._id}
                          >
                            {deletingId === b._id ? "Deleting..." : "Delete"}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Paper>
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <BatteryForm
          editData={selected}
          onSuccess={() => {
            setOpen(false);
            fetchData();
          }}
        />
      </Dialog>
      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 0,
          },
        }}
      >
        <Box sx={{ p: isMobile ? 2 : 3 }}>
          {/* ICON + TITLE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: "#fee2e2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DeleteIcon sx={{ color: "#dc2626", fontSize: 20 }} />
            </Box>

            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              fontWeight={600}
            >
              Delete Battery
            </Typography>
          </Box>

          {/* DESCRIPTION */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, fontSize: isMobile ? 13 : 14 }}
          >
            This action cannot be undone. Are you sure you want to delete this
            battery?
          </Typography>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Button
              size="small"
              variant="outlined"
              onClick={() => setConfirmOpen(false)}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 2,
              }}
            >
              Cancel
            </Button>

            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={confirmDelete}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 2,
                boxShadow: "none",
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Dialog>
      <ToastContainer position="bottom-left" autoClose={2000} />
    </Box>
  );
}
