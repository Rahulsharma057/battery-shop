const batteries = [
    {
    id: 1,
    name: "PowerMax 12V Car Battery",
    price: 4999,
    originalPrice: 6499,
    discount: 23,
    rating: 4.5,
    reviews: 128,
    offerValidTill: "30 April 2026",
    image: "https://neuralsystemsindia.com/wp-content/uploads/2024/07/MICRO.......png",
    description: "High performance car battery with long life.",
    features: [
      "Maintenance Free",
      "High Cranking Power",
      "Long Life up to 4 Years",
      "Fast Charging Support"
    ],
    specs: { voltage: "12V", capacity: "45Ah", warranty: "36 Months", type: "Lead Acid" }
  },

  {
    id: 2,
    name: "EcoVolt 17V Inverter Battery",
    price: 7499,
    originalPrice: 9999,
    discount: 25,
    rating: 4.6,
    reviews: 210,
    offerValidTill: "25 April 2026",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/eastman-em150jst-inverter-battery-150ah-2226897133-0aiug8tf.jpg",
    description: "Long backup inverter battery.",
    features: [
      "Deep Cycle Technology",
      "Long Backup (8-10 hrs)",
      "Low Maintenance",
      "Eco Friendly"
    ],
    specs: { voltage: "17V", capacity: "150Ah", warranty: "48 Months", type: "Tubular" }
  },

  {
    id: 3,
    name: "UltraPower 150Ah Lithium Battery",
    price: 9999,
    originalPrice: 13999,
    discount: 29,
    rating: 4.8,
    reviews: 95,
    offerValidTill: "5 May 2026",
    image: "https://www.batteryestore.com/cdn/shop/files/64429faf8afd2Exide_invahomz_ihst1500_7344b8ce-5f12-49df-b478-057ea5d48fbd_580x.webp?v=1711454256",
    description: "Heavy duty battery for high performance.",
    features: [
      "Lightweight Lithium Technology",
      "Fast Charging",
      "Long Lifespan (5+ years)",
      "High Efficiency"
    ],
    specs: { voltage: "24V", capacity: "150Ah", warranty: "60 Months", type: "Lithium-ion" }
  },

  {
    id: 4,
    name: "Duracell 12V Bike Battery",
    price: 1999,
    originalPrice: 2599,
    discount: 23,
    rating: 4.3,
    reviews: 340,
    offerValidTill: "28 April 2026",
    image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/luminous-inverter-battery-20250203204948711.jpg",
    description: "Reliable battery for bikes and scooters.",
    features: [
      "Compact Design",
      "High Durability",
      "Quick Recharge",
      "Leak Proof"
    ],
    specs: { voltage: "12V", capacity: "9Ah", warranty: "24 Months", type: "VRLA" }
  },

  {
    id: 5,
    name: "Exide 150Ah Tubular Battery",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    rating: 4.7,
    reviews: 520,
    offerValidTill: "10 May 2026",
    image: "https://www.batteryboss.in/assets/images/batteryboss/battery/341_Luminous%20Red%20Charge%20RC%2018000ST%20PRO%20150AH%2012V%20Inverter%20Battery.jpg",
    description: "Best inverter battery for long power cuts.",
    features: [
      "Long Backup",
      "High Efficiency",
      "Low Water Loss",
      "Durable Build"
    ],
    specs: { voltage: "12V", capacity: "150Ah", warranty: "48 Months", type: "Tubular" }
  },

  {
    id: 6,
    name: "Amaron 12V Heavy Duty Battery",
    price: 5599,
    originalPrice: 7499,
    discount: 25,
    rating: 4.6,
    reviews: 275,
    offerValidTill: "2 May 2026",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/eastman-em150jst-inverter-battery-150ah-2226897133-0aiug8tf.jpg",
    description: "Strong and reliable battery for heavy vehicles.",
    features: [
      "Vibration Resistant",
      "Long Shelf Life",
      "Maintenance Free",
      "High Heat Resistance"
    ],
    specs: { voltage: "12V", capacity: "65Ah", warranty: "36 Months", type: "Lead Acid" }
  },

  {
    id: 7,
    name: "Luminous 200Ah Tall Tubular Battery",
    price: 11499,
    originalPrice: 14999,
    discount: 23,
    rating: 4.7,
    reviews: 410,
    offerValidTill: "12 May 2026",
    image: "https://leaderbattery.com/wp-content/uploads/2022/02/Untitled-design-2.jpg",
    description: "High capacity inverter battery for homes.",
    features: [
      "Extra Long Backup",
      "Deep Discharge Support",
      "Low Maintenance",
      "High Efficiency"
    ],
    specs: { voltage: "12V", capacity: "200Ah", warranty: "60 Months", type: "Tubular" }
  },

  {
    id: 8,
    name: "SF Sonic 12V Car Battery",
    price: 4799,
    originalPrice: 6299,
    discount: 24,
    rating: 4.4,
    reviews: 180,
    offerValidTill: "7 May 2026",
    image: "https://leaderbattery.com/wp-content/uploads/2022/02/Untitled-design-3.jpg",
    description: "Affordable and efficient car battery.",
    features: [
      "High Cranking Power",
      "Maintenance Free",
      "Fast Charging",
      "Leak Resistant"
    ],
    specs: { voltage: "12V", capacity: "50Ah", warranty: "30 Months", type: "Lead Acid" }
  },

  {
    id: 9,
    name: "Okaya 100Ah Inverter Battery",
    price: 6999,
    originalPrice: 8999,
    discount: 22,
    rating: 4.5,
    reviews: 260,
    offerValidTill: "15 May 2026",
    image: "https://www.inverterhome.in/wp-content/uploads/2022/12/Luminous-Power-Sine-1100-Inverter-And-Luminous-SC18060-150AH-Tall-Tubular-Battery-jpg.webp",
    description: "Reliable inverter battery for daily use.",
    features: [
      "Deep Cycle Battery",
      "Long Backup",
      "Durable Plates",
      "Eco Friendly"
    ],
    specs: { voltage: "12V", capacity: "100Ah", warranty: "36 Months", type: "Tubular" }
  },

  {
    id: 10,
    name: "Livguard Lithium Solar Battery",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.8,
    reviews: 150,
    offerValidTill: "20 May 2026",
    image: "https://www.batteryboss.in/assets/images/batteryboss/battery/341_Luminous%20Red%20Charge%20RC%2018000ST%20PRO%20150AH%2012V%20Inverter%20Battery.jpg",
    description: "Advanced lithium battery for solar systems.",
    features: [
      "Fast Charging",
      "Lightweight",
      "Long Lifespan",
      "Smart BMS Protection"
    ],
    specs: { voltage: "24V", capacity: "120Ah", warranty: "60 Months", type: "Lithium-ion" }
  }
  ,
  {
    id: 11,
    name: "PowerMax 12V Car Battery",
    price: 4999,
    originalPrice: 6499,
    discount: 23,
    rating: 4.5,
    reviews: 128,
    offerValidTill: "30 April 2026",
    image: "https://neuralsystemsindia.com/wp-content/uploads/2024/07/MICRO.......png",
    description: "High performance car battery with long life.",
    features: [
      "Maintenance Free",
      "High Cranking Power",
      "Long Life up to 4 Years",
      "Fast Charging Support"
    ],
    specs: { voltage: "12V", capacity: "45Ah", warranty: "36 Months", type: "Lead Acid" }
  },

  {
    id: 12,
    name: "EcoVolt 17V Inverter Battery",
    price: 7499,
    originalPrice: 9999,
    discount: 25,
    rating: 4.6,
    reviews: 210,
    offerValidTill: "25 April 2026",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/eastman-em150jst-inverter-battery-150ah-2226897133-0aiug8tf.jpg",
    description: "Long backup inverter battery.",
    features: [
      "Deep Cycle Technology",
      "Long Backup (8-10 hrs)",
      "Low Maintenance",
      "Eco Friendly"
    ],
    specs: { voltage: "17V", capacity: "150Ah", warranty: "48 Months", type: "Tubular" }
  },

  {
    id: 13,
    name: "UltraPower 150Ah Lithium Battery",
    price: 9999,
    originalPrice: 13999,
    discount: 29,
    rating: 4.8,
    reviews: 95,
    offerValidTill: "5 May 2026",
    image: "https://www.batteryestore.com/cdn/shop/files/64429faf8afd2Exide_invahomz_ihst1500_7344b8ce-5f12-49df-b478-057ea5d48fbd_580x.webp?v=1711454256",
    description: "Heavy duty battery for high performance.",
    features: [
      "Lightweight Lithium Technology",
      "Fast Charging",
      "Long Lifespan (5+ years)",
      "High Efficiency"
    ],
    specs: { voltage: "24V", capacity: "150Ah", warranty: "60 Months", type: "Lithium-ion" }
  },

  {
    id: 14,
    name: "Duracell 12V Bike Battery",
    price: 1999,
    originalPrice: 2599,
    discount: 23,
    rating: 4.3,
    reviews: 340,
    offerValidTill: "28 April 2026",
    image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/luminous-inverter-battery-20250203204948711.jpg",
    description: "Reliable battery for bikes and scooters.",
    features: [
      "Compact Design",
      "High Durability",
      "Quick Recharge",
      "Leak Proof"
    ],
    specs: { voltage: "12V", capacity: "9Ah", warranty: "24 Months", type: "VRLA" }
  },

  {
    id: 15,
    name: "Exide 150Ah Tubular Battery",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    rating: 4.7,
    reviews: 520,
    offerValidTill: "10 May 2026",
    image: "https://www.batteryboss.in/assets/images/batteryboss/battery/341_Luminous%20Red%20Charge%20RC%2018000ST%20PRO%20150AH%2012V%20Inverter%20Battery.jpg",
    description: "Best inverter battery for long power cuts.",
    features: [
      "Long Backup",
      "High Efficiency",
      "Low Water Loss",
      "Durable Build"
    ],
    specs: { voltage: "12V", capacity: "150Ah", warranty: "48 Months", type: "Tubular" }
  },

  {
    id: 16,
    name: "Amaron 12V Heavy Duty Battery",
    price: 5599,
    originalPrice: 7499,
    discount: 25,
    rating: 4.6,
    reviews: 275,
    offerValidTill: "2 May 2026",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/eastman-em150jst-inverter-battery-150ah-2226897133-0aiug8tf.jpg",
    description: "Strong and reliable battery for heavy vehicles.",
    features: [
      "Vibration Resistant",
      "Long Shelf Life",
      "Maintenance Free",
      "High Heat Resistance"
    ],
    specs: { voltage: "12V", capacity: "65Ah", warranty: "36 Months", type: "Lead Acid" }
  },

  {
    id: 17,
    name: "Luminous 200Ah Tall Tubular Battery",
    price: 11499,
    originalPrice: 14999,
    discount: 23,
    rating: 4.7,
    reviews: 410,
    offerValidTill: "12 May 2026",
    image: "https://leaderbattery.com/wp-content/uploads/2022/02/Untitled-design-2.jpg",
    description: "High capacity inverter battery for homes.",
    features: [
      "Extra Long Backup",
      "Deep Discharge Support",
      "Low Maintenance",
      "High Efficiency"
    ],
    specs: { voltage: "12V", capacity: "200Ah", warranty: "60 Months", type: "Tubular" }
  },

  {
    id: 18,
    name: "SF Sonic 12V Car Battery",
    price: 4799,
    originalPrice: 6299,
    discount: 24,
    rating: 4.4,
    reviews: 180,
    offerValidTill: "7 May 2026",
    image: "https://leaderbattery.com/wp-content/uploads/2022/02/Untitled-design-3.jpg",
    description: "Affordable and efficient car battery.",
    features: [
      "High Cranking Power",
      "Maintenance Free",
      "Fast Charging",
      "Leak Resistant"
    ],
    specs: { voltage: "12V", capacity: "50Ah", warranty: "30 Months", type: "Lead Acid" }
  },

  {
    id: 19,
    name: "Okaya 100Ah Inverter Battery",
    price: 6999,
    originalPrice: 8999,
    discount: 22,
    rating: 4.5,
    reviews: 260,
    offerValidTill: "15 May 2026",
    image: "https://www.inverterhome.in/wp-content/uploads/2022/12/Luminous-Power-Sine-1100-Inverter-And-Luminous-SC18060-150AH-Tall-Tubular-Battery-jpg.webp",
    description: "Reliable inverter battery for daily use.",
    features: [
      "Deep Cycle Battery",
      "Long Backup",
      "Durable Plates",
      "Eco Friendly"
    ],
    specs: { voltage: "12V", capacity: "100Ah", warranty: "36 Months", type: "Tubular" }
  },

  {
    id: 20,
    name: "Livguard Lithium Solar Battery",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.8,
    reviews: 150,
    offerValidTill: "20 May 2026",
    image: "https://www.batteryboss.in/assets/images/batteryboss/battery/341_Luminous%20Red%20Charge%20RC%2018000ST%20PRO%20150AH%2012V%20Inverter%20Battery.jpg",
    description: "Advanced lithium battery for solar systems.",
    features: [
      "Fast Charging",
      "Lightweight",
      "Long Lifespan",
      "Smart BMS Protection"
    ],
    specs: { voltage: "24V", capacity: "120Ah", warranty: "60 Months", type: "Lithium-ion" }
  }
  
];

export default batteries;