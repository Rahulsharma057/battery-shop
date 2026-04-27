"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";

export default function BatteryForm({ editData, onSuccess }) {
  const initialState = {
    name: "",
    price: "",
    originalPrice: "",
    discount: "",
    rating: "",
    reviews: "",
    offerValidTill: "",
    image: "",
    description: "",
    features: "",
    voltage: "",
    capacity: "",
    warranty: "",
    type: "",
  };

  const [form, setForm] = useState(initialState);

  // ✅ Prefill
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        price: editData.price || "",
        originalPrice: editData.originalPrice || "",
        discount: editData.discount || "",
        rating: editData.rating || "",
        reviews: editData.reviews || "",
        offerValidTill: editData.offerValidTill || "",
        image: editData.image || "",
        description: editData.description || "",
        features: editData.features?.join(",") || "",
        voltage: editData.specs?.voltage || "",
        capacity: editData.specs?.capacity || "",
        warranty: editData.specs?.warranty || "",
        type: editData.specs?.type || "",
      });
    } else {
      setForm(initialState);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Auto discount
  useEffect(() => {
    const price = Number(form.price);
    const original = Number(form.originalPrice);

    if (price && original && original > price) {
      const discount = Math.round(((original - price) / original) * 100);
      setForm((prev) => ({ ...prev, discount }));
    } else {
      setForm((prev) => ({ ...prev, discount: 0 }));
    }
  }, [form.price, form.originalPrice]);

  const resetForm = () => setForm(initialState);

  const handleSubmit = async () => {
    const data = {
      name: form.name,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice),
      discount: Number(form.discount) || 0,
      rating: Number(form.rating) || 0,
      reviews: Number(form.reviews) || 0,
      offerValidTill: form.offerValidTill,
      image: form.image,
      description: form.description,
      features: form.features ? form.features.split(",") : [],
      specs: {
        voltage: form.voltage,
        capacity: form.capacity,
        warranty: form.warranty,
        type: form.type,
      },
    };

    try {
      const BASE_URL = "https://battery-shop-backend-ocb4.onrender.com/api/batteries";

      const url = editData ? `${BASE_URL}/${editData._id}` : BASE_URL;

      const method = editData ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // ✅ SUCCESS TOAST
      toast.success(
        editData
          ? "Battery Updated sucessfully ✅ "
          : "Battery Added sucessfully ✅",
      );

      resetForm();

      // 👉 Close dialog + refresh
      if (onSuccess) onSuccess();
    } catch (err) {
      console.log(err);

      // ❌ ERROR TOAST
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, bgcolor: "#f4f6f8" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={3} textAlign="left">
            {editData ? "Edit Battery" : "Add Battery"}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Battery Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Original Price"
                name="originalPrice"
                value={form.originalPrice}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Discount %"
                value={form.discount}
                InputProps={{ readOnly: true }}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                value={form.rating}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Reviews"
                name="reviews"
                value={form.reviews}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Offer Valid Till"
                name="offerValidTill"
                value={form.offerValidTill}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Features (comma separated)"
                name="features"
                value={form.features}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Voltage"
                name="voltage"
                value={form.voltage}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Capacity"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Warranty"
                name="warranty"
                value={form.warranty}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Type"
                name="type"
                value={form.type}
                onChange={handleChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                gap: 1,
                my: 2,
                flexDirection: "row",
              }}
            >
              {/* 🔙 BACK BUTTON */}
              <Button
                variant="outlined"
                onClick={onSuccess}
                size="small"
                sx={{
                  flex: 1,
                  borderColor: "#e0314b",
                  color: "#d02e31",
                  fontWeight: 600,
                  fontSize: { xs: 12, md: 14 },
                  py: { xs: 0.8, md: 1.2 },
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#e33030",
                    background: "#f77b7b1d",
                  },
                }}
              >
                Back
              </Button>

              <Button
                variant="contained"
                onClick={handleSubmit}
                size="small"
                sx={{
                  flex: 1,
                  background: "#5c26b9",
                  fontWeight: 600,
                  fontSize: { xs: 12, md: 14 },
                  py: { xs: 0.8, md: 1.2 },
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#6425c9",
                  },
                }}
              >
                {editData ? "Update" : "Add"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
