"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Avatar,
} from "@mui/material";
import {
  Schedule,
  TipsAndUpdates,
  CheckCircleOutline,
  Cancel,
  ArrowForward,
  Share,
  Bookmark,
  ThumbUp,
} from "@mui/icons-material";
import { blogs } from "./blogData";

// ── Sub-components ──────────────────────────────────────────

function ProConCard({ card }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e8e8e8",
        borderRadius: 3,
        p: 3,
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: card.tagColor,
          borderRadius: "12px 12px 0 0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Typography fontWeight={700} fontSize={16}>
          {card.title}
        </Typography>
        <Chip
          label={card.tag}
          size="small"
          sx={{
            background: card.tagColor,
            color: "#fff",
            fontWeight: 600,
            fontSize: 10,
          }}
        />
      </Box>

      <Typography
        fontSize={12}
        fontWeight={600}
        color="text.secondary"
        sx={{ mb: 1, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Advantages
      </Typography>
      {card.pros.map((p, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1, mb: 0.5 }}>
          <CheckCircleOutline
            sx={{ fontSize: 16, color: "#2e7d32", mt: 0.2, flexShrink: 0 }}
          />
          <Typography fontSize={13} color="text.secondary">
            {p}
          </Typography>
        </Box>
      ))}

      <Typography
        fontSize={12}
        fontWeight={600}
        color="text.secondary"
        sx={{ mt: 2, mb: 1, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Limitations
      </Typography>
      {card.cons.map((c, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1, mb: 0.5 }}>
          <Cancel
            sx={{ fontSize: 16, color: "#c62828", mt: 0.2, flexShrink: 0 }}
          />
          <Typography fontSize={13} color="text.secondary">
            {c}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

function BrandCard({ brand }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e8e8e8",
        borderRadius: 3,
        p: 3,
        display: "flex",
        gap: 2.5,
        alignItems: "flex-start",
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
      }}
    >
      <Avatar
        sx={{
          background: brand.badgeColor,
          width: 44,
          height: 44,
          fontWeight: 800,
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {brand.rank}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
          <Typography fontWeight={700} fontSize={15}>
            {brand.name}
          </Typography>
          <Chip
            label={brand.badge}
            size="small"
            sx={{
              background: brand.badgeColor,
              color: "#fff",
              fontWeight: 600,
              fontSize: 10,
            }}
          />
        </Box>
        <Typography
          fontSize={12}
          color="text.secondary"
          sx={{ mb: 1.5, fontStyle: "italic" }}
        >
          Best for: {brand.bestFor}
        </Typography>
        {brand.highlights.map((h, i) => (
          <Box key={i} sx={{ display: "flex", gap: 1, mb: 0.4 }}>
            <CheckCircleOutline
              sx={{ fontSize: 15, color: "#2e7d32", mt: 0.2, flexShrink: 0 }}
            />
            <Typography fontSize={13} color="text.secondary">
              {h}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

function SectionBlock({ section, accentColor }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
        <Box
          sx={{
            width: 4,
            height: 28,
            background: accentColor,
            borderRadius: 4,
            flexShrink: 0,
          }}
        />
        <Typography variant="h5" fontWeight={700} fontSize={{ xs: 18, md: 22 }}>
          {section.title}
        </Typography>
      </Box>

      <Typography
        color="text.secondary"
        fontSize={15}
        lineHeight={1.8}
        sx={{ mb: 3 }}
      >
        {section.body}
      </Typography>

      {/* Pro/Con Cards */}
      {section.cards && (
        <Grid container spacing={2}>
          {section.cards.map((card, i) => (
            <Grid item xs={12} md={6} key={i}>
              <ProConCard card={card} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Brand Cards */}
      {section.brands && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {section.brands.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </Box>
      )}

      {/* Table */}
      {section.table && (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ border: "1px solid #e8e8e8", borderRadius: 3 }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ background: "#f9f9f9" }}>
                {section.table.headers.map((h, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      fontWeight: 700,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      color: "#555",
                      py: 1.5,
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {section.table.rows.map((row, ri) => (
                <TableRow
                  key={ri}
                  sx={{
                    "&:hover": { background: "#fafafa" },
                    "&:last-child td": { border: 0 },
                  }}
                >
                  {row.map((cell, ci) => (
                    <TableCell
                      key={ci}
                      sx={{
                        fontSize: 13,
                        color: ci === 0 ? "#1a1a1a" : "text.secondary",
                        fontWeight: ci === 0 ? 600 : 400,
                      }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Tip List */}
      {section.tips && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {section.tips.map((tip, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1.5,
                alignItems: "flex-start",
                p: 1.5,
                borderRadius: 2,
                background: "#fafafa",
                border: "1px solid #f0f0f0",
              }}
            >
              <ArrowForward
                sx={{
                  fontSize: 15,
                  color: accentColor,
                  mt: 0.3,
                  flexShrink: 0,
                }}
              />
              <Typography fontSize={14} color="text.secondary">
                {tip}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Maintenance Steps */}
      {section.steps && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {section.steps.map((s, i) => (
            <Box
              key={i}
              sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
            >
              <Chip
                label={s.step}
                size="small"
                sx={{
                  background: accentColor,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 11,
                  flexShrink: 0,
                  mt: 0.3,
                }}
              />
              <Typography fontSize={14} color="text.secondary" sx={{ pt: 0.3 }}>
                {s.action}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Decision Guide */}
      {section.decisionGuide && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {section.decisionGuide.map((d, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                border: "1px solid #e8e8e8",
                borderRadius: 2.5,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ccc",
                    flexShrink: 0,
                  }}
                />
                <Typography fontSize={14} color="text.secondary">
                  {d.condition}
                </Typography>
              </Box>
              <Chip
                label={`→ ${d.recommendation}`}
                size="small"
                sx={{
                  background: d.color,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 11,
                }}
              />
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ── Main Component ──────────────────────────────────────────

export default function BlogDetail({ slug }) {
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9f9f9",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography fontSize={64} mb={2}>
            🔍
          </Typography>
          <Typography variant="h5" fontWeight={700} mb={1}>
            Blog not found
          </Typography>
          <Typography color="text.secondary">
            The article you are looking for does not exist.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#f9f9f9", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <Box
        sx={{ background: blog.coverColor, borderBottom: "1px solid #e8e8e8" }}
      >
        <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Chip
              label={blog.category}
              size="small"
              sx={{
                background: blog.accentColor,
                color: "#fff",
                fontWeight: 700,
                fontSize: 11,
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
              }}
            >
              <Schedule sx={{ fontSize: 14 }} />
              <Typography fontSize={13}>{blog.readTime}</Typography>
            </Box>
            <Typography fontSize={13} color="text.secondary">
              · {blog.date}
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 26, md: 38 },
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: -0.5,
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            color="text.secondary"
            fontSize={16}
            lineHeight={1.7}
            sx={{ mb: 3, maxWidth: 580 }}
          >
            {blog.subtitle}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              src="https://media.licdn.com/dms/image/v2/C5603AQEH4kfSmjoxAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589999537705?e=2147483647&v=beta&t=gG6Ic5PV-Iz8wLMGJy8V3RuLNX9IgTkiIZgiozTDuN0"
              sx={{
                width: 68,
                height: 68,
              }}
            />
            <Box>
              <Typography fontSize={18} fontWeight={600}>
                {blog.author}
              </Typography>
              <Typography>CHAUHAN BATTERY HOUSE</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── BODY ── */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Article Content */}
        <Paper
          elevation={0}
          sx={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            mb: 4,
          }}
        >
          {blog.sections.map((section, i) => (
            <SectionBlock
              key={i}
              section={section}
              accentColor={blog.accentColor}
            />
          ))}

          <Divider sx={{ mb: 4 }} />

          {/* Pro Tip */}
          <Alert
            icon={<TipsAndUpdates sx={{ color: blog.accentColor }} />}
            severity="info"
            sx={{
              background: blog.coverColor,
              border: `1px solid ${blog.accentColor}30`,
              borderRadius: 3,
              mb: 4,
              "& .MuiAlert-message": { fontSize: 14, color: "#1a1a1a" },
            }}
          >
            <Typography fontWeight={700} fontSize={13} mb={0.5}>
              Pro Tip
            </Typography>
            {blog.proTip}
          </Alert>

          {/* Conclusion */}
          <Box
            sx={{
              background: "#1a1a1a",
              borderRadius: 3,
              p: 3.5,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: blog.accentColor,
                opacity: 0.15,
              }}
            />
            <Typography
              fontSize={12}
              fontWeight={700}
              color={blog.accentColor}
              sx={{ letterSpacing: 1.5, textTransform: "uppercase", mb: 1 }}
            >
              Conclusion
            </Typography>
            <Typography color="#e8e8e8" fontSize={15} lineHeight={1.8}>
              {blog.conclusion}
            </Typography>
          </Box>
        </Paper>

        {/* Footer Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {["Batteries", "Guide", blog.category].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ fontSize: 12, color: "#666", borderColor: "#ddd" }}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip
              icon={<ThumbUp sx={{ fontSize: 15 }} />}
              label="Helpful"
              clickable
              size="small"
              sx={{ background: "#fff", border: "1px solid #e0e0e0" }}
            />
            <Chip
              icon={<Bookmark sx={{ fontSize: 15 }} />}
              label="Save"
              clickable
              size="small"
              sx={{ background: "#fff", border: "1px solid #e0e0e0" }}
            />
            <Chip
              icon={<Share sx={{ fontSize: 15 }} />}
              label="Share"
              clickable
              size="small"
              sx={{ background: "#fff", border: "1px solid #e0e0e0" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
