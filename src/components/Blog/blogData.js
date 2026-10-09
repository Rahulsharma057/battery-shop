export const blogs = [
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
        body: "A well-maintained tubular battery can last up to 8 years. Here is what you need to do:",
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
        body: "Extend your car battery is life with these simple habits:",
        tips: [
          "Start your car at least once every 3 days if not used regularly",
          "Keep terminals clean and lightly greased with petroleum jelly",
          "Avoid leaving lights or AC on when engine is off",
          "Get battery health tested every 6 months at a service centre",
          "Replace battery proactively at 4 years — do not wait for a breakdown",
        ],
      },
    ],
    conclusion:
      "Amaron and Exide remain the top two choices for most Indian car owners due to their wide availability, strong warranties, and proven track records. For budget buyers, Luminous offers solid performance without breaking the bank.",
    proTip:
      "Always match the battery group size specified in your car is owner manual. A mismatched battery — even a good one — can underperform or damage your vehicle is electrical system.",
  },

  {
    slug: "tubular-vs-lithium",
    title: "Tubular vs Lithium Battery – Which is Better?",
    subtitle:
      "An honest, data-backed comparison to help you decide what is right for your home in 2025",
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
      "If you are buying lithium, ensure your existing inverter is compatible with lithium chemistry. Most older inverters require an upgrade or a lithium-compatible model.",
  },
];
