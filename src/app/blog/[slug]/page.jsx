"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Avatar,
} from "@mui/material";
import { useParams } from "next/navigation";
import {
  BatteryChargingFull,
  ElectricBolt,
  Home,
  Build,
  TipsAndUpdates,
  CheckCircleOutline,
  Cancel,
  ArrowForward,
  Schedule,
  Person,
  Share,
  Bookmark,
  ThumbUp,
} from "@mui/icons-material";

const blogs = [
  {
    slug: "inverter-battery-guide",
    title: "How to Choose the Right Inverter Battery",
    subtitle:
      "A complete guide to selecting the perfect battery for uninterrupted power backup at home",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "April 2025",
    author: " Girja Sankar Chauhan",
    coverEmoji: "🔋",
    coverColor: "#e8f5e9",
    accentColor: "#2e7d32",
    sections: [
      {
        icon: "battery",
        title: "Battery Types",
        body: "There are two primary types of inverter batteries available in the Indian market, each suited to different needs and budgets.",
        cards: [
          {
            title: "Flat Plate Battery",
            pros: [
              "Budget-friendly",
              "Widely available",
              "Easy to find replacements",
            ],
            cons: [
              "Shorter lifespan (3–4 yrs)",
              "Struggles with long power cuts",
              "More frequent maintenance",
            ],
            tag: "Economy",
            tagColor: "#f57c00",
          },
          {
            title: "Tubular Battery",
            pros: [
              "Long lifespan (5–8 yrs)",
              "Handles long power cuts well",
              "Superior performance",
            ],
            cons: [
              "Higher upfront cost",
              "Requires water topping",
              "Heavier build",
            ],
            tag: "Recommended",
            tagColor: "#2e7d32",
          },
        ],
      },
      {
        icon: "bolt",
        title: "Choosing the Right Capacity",
        body: "Battery capacity is measured in Ampere-hours (Ah). The right capacity depends on how many appliances you run and how long power cuts typically last in your area.",
        table: {
          headers: [
            "Home Size",
            "Typical Load",
            "Recommended Capacity",
            "Backup Duration",
          ],
          rows: [
            [
              "Small (1–2 BHK)",
              "3–4 fans, 4–5 lights",
              "100Ah – 120Ah",
              "2–3 hours",
            ],
            ["Medium (3 BHK)", "5–6 fans, lights, TV", "150Ah", "3–4 hours"],
            [
              "Large / Heavy Use",
              "AC, fridge, multiple rooms",
              "200Ah+",
              "4–6 hours",
            ],
          ],
        },
      },
      {
        icon: "home",
        title: "Installation & Placement",
        body: "Proper placement of your inverter battery is critical for safety, performance, and longevity.",
        tips: [
          "Place in a well-ventilated room — batteries emit hydrogen gas during charging",
          "Keep away from direct sunlight and heat sources",
          "Ensure the battery is on a flat, stable surface",
          "Maintain at least 30cm clearance on all sides",
          "Never place in a sealed or air-conditioned room without ventilation",
        ],
      },
      {
        icon: "build",
        title: "Maintenance Guide",
        body: "A well-maintained tubular battery can last up to 8 years. Here's what you need to do:",
        steps: [
          {
            step: "Monthly",
            action: "Check the electrolyte (water) level in each cell",
          },
          {
            step: "Top-up",
            action: "Add only distilled water — never tap water or acid",
          },
          {
            step: "Quarterly",
            action: "Clean the terminals with a dry cloth to prevent corrosion",
          },
          {
            step: "Annually",
            action:
              "Get a full health check done at an authorised service centre",
          },
        ],
      },
    ],
    conclusion:
      "For Indian households, tubular batteries remain the smartest long-term investment. Their durability, performance during extended outages, and 5–8 year lifespan make them worth every extra rupee over flat plate options.",
    proTip:
      "Always buy from authorised dealers and verify the manufacture date on the battery — avoid batteries older than 3 months from production.",
  },

  {
    slug: "top-car-batteries-india",
    title: "Top 5 Car Batteries in India",
    subtitle:
      "Expert-reviewed picks for reliable starting power, longevity, and best value across every budget",
    category: "Product Guide",
    readTime: "5 min read",
    date: "April 2025",
  author: " Girja Sankar Chauhan",
    coverEmoji: "🚗",
    coverColor: "#e3f2fd",
    accentColor: "#1565c0",
    sections: [
      {
        icon: "battery",
        title: "Top 5 Car Battery Brands",
        body: "These are the most trusted and widely used car battery brands in India, ranked by popularity, reliability, and after-sales support.",
        brands: [
          {
            rank: 1,
            name: "Exide",
            badge: "Most Trusted",
            badgeColor: "#1565c0",
            highlights: [
              "Largest service network in India",
              "Consistent performance in all climates",
              "Industry-leading warranty up to 66 months",
            ],
            bestFor: "Buyers who prioritise reliability and service support",
          },
          {
            rank: 2,
            name: "Amaron",
            badge: "Best Performance",
            badgeColor: "#6a1b9a",
            highlights: [
              "Maintenance-free design",
              "High cranking power for fast starts",
              "60-month warranty with national coverage",
            ],
            bestFor: "Daily commuters and performance-focused buyers",
          },
          {
            rank: 3,
            name: "Luminous",
            badge: "Best Value",
            badgeColor: "#e65100",
            highlights: [
              "Affordable pricing without compromise",
              "Good for petrol and diesel cars",
              "Reliable backup performance",
            ],
            bestFor: "Budget-conscious buyers with standard usage",
          },
          {
            rank: 4,
            name: "SF Sonic",
            badge: "Best Durability",
            badgeColor: "#2e7d32",
            highlights: [
              "Rugged build for rough road conditions",
              "Strong performance in extreme heat",
              "Good value for commercial vehicles",
            ],
            bestFor: "Owners in Tier 2/3 cities or rough terrain areas",
          },
          {
            rank: 5,
            name: "Livguard",
            badge: "Best New Brand",
            badgeColor: "#00695c",
            highlights: [
              "Rapidly expanding service network",
              "Competitive pricing",
              "Modern manufacturing standards",
            ],
            bestFor: "Buyers looking for a fresh alternative at good prices",
          },
        ],
      },
      {
        icon: "bolt",
        title: "Key Factors Before Buying",
        body: "Beyond brand, these technical factors should guide your car battery decision:",
        table: {
          headers: ["Factor", "What to Check", "Why It Matters"],
          rows: [
            [
              "Battery Group Size",
              "Match car manufacturer spec",
              "Ensures physical fit and terminal position",
            ],
            [
              "Cold Cranking Amps (CCA)",
              "Higher = better cold starts",
              "Critical for diesel cars & cold climates",
            ],
            [
              "Reserve Capacity (RC)",
              "Higher = more backup",
              "Powers accessories if alternator fails",
            ],
            [
              "Warranty Period",
              "Minimum 24 months free replacement",
              "Indicates manufacturer confidence",
            ],
            [
              "Maintenance Type",
              "MF (maintenance-free) preferred",
              "Saves time and prevents acid spills",
            ],
          ],
        },
      },
      {
        icon: "build",
        title: "Battery Care Tips",
        body: "Extend your car battery's life with these simple habits:",
        tips: [
          "Start your car at least once every 3 days if not used regularly",
          "Keep terminals clean and lightly greased with petroleum jelly",
          "Avoid leaving lights or AC on when engine is off",
          "Get battery health tested every 6 months at a service centre",
          "Replace battery proactively at 4 years — don't wait for a breakdown",
        ],
      },
    ],
    conclusion:
      "Amaron and Exide remain the top two choices for most Indian car owners due to their wide availability, strong warranties, and proven track records. For budget buyers, Luminous offers solid performance without breaking the bank.",
    proTip:
      "Always match the battery group size specified in your car's owner manual. A mismatched battery — even a good one — can underperform or damage your vehicle's electrical system.",
  },

  {
    slug: "tubular-vs-lithium",
    title: "Tubular vs Lithium Battery – Which is Better?",
    subtitle:
      "An honest, data-backed comparison to help you decide what's right for your home in 2025",
    category: "Comparison",
    readTime: "7 min read",
    date: "April 2025",
author: " Girja Sankar Chauhan",
    coverEmoji: "⚡",
    coverColor: "#fff8e1",
    accentColor: "#f57f17",
    sections: [
      {
        icon: "battery",
        title: "Head-to-Head Overview",
        body: "Both tubular and lithium batteries serve the same purpose — storing power for your inverter — but they differ significantly in technology, cost, and use cases.",
        cards: [
          {
            title: "Tubular Battery",
            pros: [
              "Low upfront cost (₹8,000–₹18,000)",
              "Proven technology, widely serviced",
              "Long life (5–7 years)",
              "Best for extended power cuts",
            ],
            cons: [
              "Requires monthly water topping",
              "Heavy (40–60 kg)",
              "Slow charging (8–10 hrs)",
              "Takes up more space",
            ],
            tag: "Budget Pick",
            tagColor: "#f57f17",
          },
          {
            title: "Lithium (LiFePO4) Battery",
            pros: [
              "Zero maintenance",
              "Lightweight (10–20 kg)",
              "Fast charging (2–4 hrs)",
              "Longer cycle life (3000+ cycles)",
            ],
            cons: [
              "High cost (₹40,000–₹1,20,000)",
              "Less service support in India",
              "Sensitive to overcharging",
              "Needs compatible inverter",
            ],
            tag: "Premium Pick",
            tagColor: "#7b1fa2",
          },
        ],
      },
      {
        icon: "bolt",
        title: "Detailed Comparison",
        body: "A feature-by-feature breakdown to help you make an informed decision:",
        table: {
          headers: ["Feature", "Tubular Battery", "Lithium Battery", "Winner"],
          rows: [
            ["Cost", "₹8K – ₹18K", "₹40K – ₹1.2L", "Tubular"],
            [
              "Maintenance",
              "Monthly water top-up",
              "Zero maintenance",
              "Lithium",
            ],
            ["Weight", "40–60 kg", "10–20 kg", "Lithium"],
            ["Charging Speed", "8–10 hours", "2–4 hours", "Lithium"],
            ["Lifespan", "5–7 years", "8–12 years", "Lithium"],
            ["Cycle Life", "500–800 cycles", "3000–5000 cycles", "Lithium"],
            [
              "Service Network",
              "Excellent (pan-India)",
              "Limited in India",
              "Tubular",
            ],
            ["Efficiency", "~80%", "~95%", "Lithium"],
            ["Safety", "Moderate (acid risk)", "High (sealed)", "Lithium"],
          ],
        },
      },
      {
        icon: "home",
        title: "Which One Should You Choose?",
        body: "The right battery depends on your specific situation. Use this decision guide:",
        decisionGuide: [
          {
            condition: "Tight budget (under ₹20,000)",
            recommendation: "Tubular Battery",
            color: "#f57f17",
          },
          {
            condition: "Frequent, long power cuts (4+ hours)",
            recommendation: "Tubular Battery",
            color: "#f57f17",
          },
          {
            condition: "Premium modern home setup",
            recommendation: "Lithium Battery",
            color: "#7b1fa2",
          },
          {
            condition: "Space is limited",
            recommendation: "Lithium Battery",
            color: "#7b1fa2",
          },
          {
            condition: "No one at home for maintenance",
            recommendation: "Lithium Battery",
            color: "#7b1fa2",
          },
          {
            condition: "Rural area with limited service access",
            recommendation: "Tubular Battery",
            color: "#f57f17",
          },
        ],
      },
    ],
    conclusion:
      "In 2025, lithium batteries are clearly the future — superior in almost every technical metric. But for most Indian households dealing with budget constraints and the need for robust service networks, tubular batteries remain the most practical and dependable choice.",
    proTip:
      "If you're buying lithium, ensure your existing inverter is compatible with lithium chemistry. Most older inverters require an upgrade or a lithium-compatible model.",
  },
];

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

export default function BlogDetailPage() {
  const { slug } = useParams();
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
            The article you're looking for doesn't exist.
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
            {/* <Avatar sx={{ width: 34, height: 34, background: blog.accentColor, fontSize: 14 }}>
              <Person sx={{ fontSize: 18 }} />
            </Avatar> */}
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
              <Typography>
                Owner - CHAUHAN BATTERY HOUSE
              </Typography>
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
