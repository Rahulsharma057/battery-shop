"use client";

import { useState, useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
  MenuItem,
  IconButton,
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

  const [newType, setNewType] = useState("");
  const [showAddType, setShowAddType] = useState(false);
  const [newCapacity, setNewCapacity] = useState("");
  const [showAddCapacity, setShowAddCapacity] = useState(false);
  const [form, setForm] = useState(initialState);
  const defaultVoltages = ["12V", "24V", "48V"];
  const [voltageOptions, setVoltageOptions] = useState(() => {
    if (typeof window === "undefined") return defaultVoltages;

    try {
      const saved = JSON.parse(localStorage.getItem("voltages")) || [];
      return [...new Set([...defaultVoltages, ...saved])];
    } catch {
      return defaultVoltages;
    }
  });
  const defaultCapacities = {
    "12V": ["35Ah", "45Ah", "60Ah", "75Ah", "100Ah"],
    "24V": ["100Ah", "120Ah", "150Ah", "180Ah"],
    "48V": ["150Ah", "180Ah", "200Ah", "220Ah"],
  };
  const [capacityOptionsByVoltage, setCapacityOptionsByVoltage] = useState(
    () => {
      const saved = JSON.parse(localStorage.getItem("capacities")) || {};
      return { ...defaultCapacities, ...saved };
    },
  );
  const defaultTypes = ["Tubular", "Flat Plate", "Lithium-ion"];
  const [typeOptions, setTypeOptions] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("types")) || [];
    return [...new Set([...defaultTypes, ...saved])];
  });
  const [newVoltage, setNewVoltage] = useState("");
  const [showAddVoltage, setShowAddVoltage] = useState(false);
  const capacityOptions = useMemo(() => {
    return capacityOptionsByVoltage?.[form.voltage] || [];
  }, [form.voltage, capacityOptionsByVoltage]);
  const [formErrors, setFormErrors] = useState({});
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

  const validateForm = () => {
    let errors = {};

    if (!form.name) errors.name = "Name is required";
    if (!form.price) errors.price = "Price is required";
    if (!form.originalPrice)
      errors.originalPrice = "Original price is required";
    if (!form.offerValidTill) errors.offerValidTill = "Offer date is required";

    if (
      form.price &&
      form.originalPrice &&
      Number(form.price) > Number(form.originalPrice)
    ) {
      errors.price = "Price cannot be greater than original price";
    }
    if (!form.voltage) errors.voltage = "Voltage is required";
    if (!form.capacity) errors.capacity = "Capacity is required";
    if (form.voltage && !form.capacity) {
      errors.capacity = "Capacity is required";
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleAddVoltage = () => {
    if (!newVoltage) return;

    const formatted = newVoltage.trim().toUpperCase();

    if (voltageOptions.some((v) => v.toUpperCase() === formatted)) {
      toast.error("Voltage already exists ❌");
      return;
    }

    const updated = [...voltageOptions, formatted];
    setVoltageOptions(updated);

    const customVoltages = updated.filter((v) => !defaultVoltages.includes(v));
    localStorage.setItem("voltages", JSON.stringify(customVoltages));

    setNewVoltage("");
    setShowAddVoltage(false);
  };

  const handleDeleteVoltage = (value) => {
    const updated = voltageOptions.filter((v) => v !== value);
    setVoltageOptions(updated);

    const customVoltages = updated.filter((v) => !defaultVoltages.includes(v));

    localStorage.setItem("voltages", JSON.stringify(customVoltages));

    if (form.voltage === value) {
      setForm((prev) => ({ ...prev, voltage: "", capacity: "" }));
    }
  };

  const handleAddCapacity = () => {
    if (!form.voltage || !newCapacity) return;

    const formatted = newCapacity.trim().toUpperCase();

    if (capacityOptions.some((c) => c.toUpperCase() === formatted)) {
      toast.error("Capacity already exists ❌");
      return;
    }

    const updated = {
      ...capacityOptionsByVoltage,
      [form.voltage]: [
        ...(capacityOptionsByVoltage[form.voltage] || []),
        formatted,
      ],
    };

    setCapacityOptionsByVoltage(updated);
    const customCapacities = {};

    Object.keys(updated).forEach((volt) => {
      customCapacities[volt] = updated[volt].filter(
        (c) => !(defaultCapacities[volt] || []).includes(c),
      );
    });

    localStorage.setItem("capacities", JSON.stringify(customCapacities));

    setNewCapacity("");
    setShowAddCapacity(false);
  };

  const handleDeleteCapacity = (voltage, value) => {
    const updated = {
      ...capacityOptionsByVoltage,
      [voltage]: capacityOptionsByVoltage[voltage].filter((c) => c !== value),
    };

    setCapacityOptionsByVoltage(updated);

    const customCapacities = {};

    Object.keys(updated).forEach((volt) => {
      customCapacities[volt] = updated[volt].filter(
        (c) => !(defaultCapacities[volt] || []).includes(c),
      );
    });

    localStorage.setItem("capacities", JSON.stringify(customCapacities));

    if (form.capacity === value) {
      setForm((prev) => ({ ...prev, capacity: "" }));
    }
  };

  const handleAddType = () => {
    if (!newType) return;

    const formatted = newType.trim();

    if (typeOptions.some((t) => t.toLowerCase() === formatted.toLowerCase())) {
      toast.error("Type already exists ❌");
      return;
    }

    const updated = [...typeOptions, formatted];
    setTypeOptions(updated);

    const customTypes = updated.filter((t) => !defaultTypes.includes(t));

    localStorage.setItem("types", JSON.stringify(customTypes));

    setNewType("");
    setShowAddType(false);
  };
  const handleDeleteType = (value) => {
    const updated = typeOptions.filter((t) => t !== value);
    setTypeOptions(updated);

    const customTypes = updated.filter((t) => !defaultTypes.includes(t));

    localStorage.setItem("types", JSON.stringify(customTypes));

    if (form.type === value) {
      setForm((prev) => ({ ...prev, type: "" }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "voltage") {
      setForm((prev) => ({
        ...prev,
        voltage: value.toUpperCase(), // ✅ FIX
        capacity: "",
      }));
    } else if (name === "capacity") {
      setForm((prev) => ({
        ...prev,
        capacity: value.toUpperCase(), // ✅ FIX
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  // ✅ Auto discount
  useEffect(() => {
    const price = Number(form.price);
    const original = Number(form.originalPrice);

    if (price && original && original > price) {
      const discount = Math.round(((original - price) / original) * 100);
      setForm((prev) => {
        if (prev.discount === discount) return prev;
        return { ...prev, discount };
      });
    } else {
      setForm((prev) => ({ ...prev, discount: 0 }));
    }
  }, [form.price, form.originalPrice]);

  const resetForm = () => setForm(initialState);

  /*   const handleSubmit = async () => {
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
  }; */

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill required fields errors ❌");
      return;
    }
    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("originalPrice", form.originalPrice);
      formData.append("discount", form.discount || 0);
      formData.append("rating", form.rating || 0);
      formData.append("reviews", form.reviews || 0);
      formData.append("offerValidTill", form.offerValidTill);
      formData.append("description", form.description);

      // ✅ features
      if (form.features) {
        form.features
          .split(",")
          .forEach((f) => formData.append("features", f.trim()));
      }

      // ✅ IMPORTANT (specs JSON me bhejna)
      formData.append(
        "specs",
        JSON.stringify({
          voltage: form.voltage,
          capacity: form.capacity,
          warranty: form.warranty,
          type: form.type,
        }),
      );

      // ✅ image file
      // replace this block
      if (form.image instanceof File) {
        formData.append("image", form.image);
      } else if (typeof form.image === "string") {
        formData.append("image", form.image); // existing image URL
      }
      const BASE_URL = `https://battery-shop-backend-ocb4.onrender.com/api/batteries`;
      const url = editData ? `${BASE_URL}/${editData._id}` : BASE_URL;
      const method = editData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed");
      }
      toast.success(editData ? "Updated ✅" : "Added ✅");

      resetForm();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.log(err);
      toast.error("Upload failed ❌");
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
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
                error={!!formErrors.price}
                helperText={formErrors.price}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Original Price"
                name="originalPrice"
                value={form.originalPrice}
                onChange={handleChange}
                error={!!formErrors.originalPrice}
                helperText={formErrors.originalPrice}
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
                type="date"
                label="Offer Valid Till"
                InputLabelProps={{ shrink: true }}
                value={form.offerValidTill}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    offerValidTill: e.target.value,
                  }))
                }
                error={!!formErrors.offerValidTill}
                helperText={formErrors.offerValidTill}
                sx={{
                  "& input": {
                    cursor: "pointer",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography fontSize={14} fontWeight={600}>
                  Upload Battery Image
                </Typography>

                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<PhotoCameraIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    py: 1,
                  }}
                >
                  Choose Image
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        image: e.target.files[0],
                      }))
                    }
                  />
                </Button>

                {form.image && (
                  <Box mt={1}>
                    <img
                      src={
                        form.image instanceof File
                          ? URL.createObjectURL(form.image)
                          : form.image
                      }
                      alt="preview"
                      style={{ width: 120, borderRadius: 8 }}
                    />
                  </Box>
                )}
              </Stack>
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
                multiline
                rows={3}
                fullWidth
                label="Features (comma separated)"
                name="features"
                value={form.features}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" gap={1}>
                <TextField
                  select
                  fullWidth
                  label="Voltage"
                  name="voltage"
                  value={form.voltage}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Voltage</MenuItem>

                  {voltageOptions.map((v) => (
                    <MenuItem
                      key={v}
                      value={v}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      {v}

                      <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteVoltage(v);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                  variant="outlined"
                  onClick={() => setShowAddVoltage(!showAddVoltage)}
                  sx={{ minWidth: "40px" }}
                >
                  +
                </Button>
              </Box>

              {showAddVoltage && (
                <Box mt={1} display="flex" gap={1}>
                  <TextField
                    size="small"
                    placeholder="e.g. 36V"
                    value={newVoltage}
                    onChange={(e) => setNewVoltage(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleAddVoltage}>
                    Add
                  </Button>
                </Box>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" gap={1}>
                <TextField
                  select
                  fullWidth
                  label="Capacity"
                  name="capacity"
                  value={form.capacity || ""}
                  onChange={handleChange}
                  disabled={!form.voltage}
                  SelectProps={{
                    renderValue: (selected) => selected || "Select Capacity",
                  }}
                >
                  <MenuItem value="">Select Capacity</MenuItem>

                  {capacityOptions.map((cap) => (
                    <MenuItem key={cap} value={cap}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        {cap}

                        <IconButton
                          size="small"
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault(); // ✅ IMPORTANT FIX
                            handleDeleteCapacity(form.voltage, cap);
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                  variant="outlined"
                  onClick={() => setShowAddCapacity(!showAddCapacity)}
                  sx={{ minWidth: "40px" }}
                >
                  +
                </Button>
              </Box>

              {showAddCapacity && (
                <Box mt={1} display="flex" gap={1}>
                  <TextField
                    size="small"
                    placeholder="e.g. 110Ah"
                    value={newCapacity}
                    onChange={(e) => setNewCapacity(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleAddCapacity}>
                    Add
                  </Button>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Warranty"
                name="warranty"
                value={form.warranty}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" gap={1}>
                <TextField
                  select
                  fullWidth
                  label="Type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Type</MenuItem>

                  {typeOptions.map((t) => (
                    <MenuItem
                      key={t}
                      value={t}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      {t}

                      <IconButton
                        size="small"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteType(t);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                  variant="outlined"
                  onClick={() => setShowAddType(!showAddType)}
                  sx={{ minWidth: "40px" }}
                >
                  +
                </Button>
              </Box>

              {showAddType && (
                <Box mt={1} display="flex" gap={1}>
                  <TextField
                    size="small"
                    placeholder="e.g. Gel"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleAddType}>
                    Add
                  </Button>
                </Box>
              )}
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
