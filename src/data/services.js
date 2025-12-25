// ===============================
// IMAGE IMPORTS
// ===============================
import roInstallation from "../assets/servicesPhotos/ro installation.jpeg";
import repairMaintenance from "../assets/servicesPhotos/repaire and maintenance.jpg";
import amcPlans from "../assets/servicesPhotos/amc plans images.jpeg";
import filterReplacement from "../assets/servicesPhotos/filter replacement images.png";

import customerCareService from "../assets/servicesPhotos/customer care service.jpeg";
import routineService from "../assets/servicesPhotos/routeen service.webp";
import newSalesService from "../assets/servicesPhotos/new sales images.jpeg";
import waterTreatmentService from "../assets/servicesPhotos/8.png";

// ===============================
// SERVICES DATA
// ===============================
export const services = [
  // 1️⃣ RO Installation
  {
    id: "install",
    title: "RO Installation",
    description:
      "Professional RO and UV/UF purifier installation with proper inlet/outlet and TDS calibration.",
    features: [
      "Site inspection",
      "Leak-proof fittings",
      "TDS calibration",
      "Usage guidance",
    ],
    icon: "install",
    image: roInstallation,
  },

  // 2️⃣ Repair & Maintenance
  {
    id: "repair",
    title: "Repair & Maintenance",
    description:
      "Quick diagnosis and on-spot repair for low flow, bad taste, leakage, or startup issues.",
    features: [
      "Certified technicians",
      "Genuine spares",
      "90-day service warranty",
    ],
    icon: "repair",
    image: repairMaintenance,
  },

  // 3️⃣ AMC Plans
  {
    id: "amc",
    title: "AMC Plans",
    description:
      "Annual Maintenance Contracts for worry-free ownership and predictable costs.",
    features: [
      "2–3 free services",
      "Priority support",
      "Filter set included",
    ],
    icon: "shield",
    image: amcPlans,
  },

  // 4️⃣ Filter Replacement
  {
    id: "filter",
    title: "Filter Replacement",
    description:
      "Original pre-filter, sediment, carbon, RO membrane, and post-carbon replacements.",
    features: [
      "Genuine filters",
      "Performance guaranteed",
      "Better taste & clarity",
    ],
    icon: "filter",
    image: filterReplacement,
  },

  // ==================================================
  // UPDATED SERVICES (5–8)
  // ==================================================

  // 5️⃣ Customer Care Service
  {
    id: "customer-care",
    title: "Customer Care Service",
    description:
      "Our dedicated support team ensures quick response, clear guidance, and complete satisfaction for all your water purifier needs.",
    features: [
      "Easy service booking",
      "Fast complaint resolution",
      "Expert technical support",
      "Genuine spare assistance",
      "Follow-up & service reminders",
    ],
    icon: "headphones",
    image: customerCareService,
  },

  // 6️⃣ Routine Service
  {
    id: "routine-service",
    title: "Routine Service",
    description:
      "Regular maintenance to keep your water purifier working efficiently and delivering safe, pure drinking water every day.",
    features: [
      "Pre-filter cleaning",
      "Sediment & carbon filter inspection",
      "Membrane performance check",
      "Water quality & TDS testing",
      "Leak inspection & system calibration",
    ],
    icon: "settings",
    image: routineService,
  },

  // 7️⃣ New Sales – Water Purifiers & RO Systems
  {
    id: "new-sales",
    title: "New Sales – Water Purifiers & RO Systems",
    description:
      "High-quality RO systems and water purifiers for homes, offices, and commercial use ensuring safe and healthy drinking water.",
    features: [
      "Domestic RO systems",
      "Commercial RO plants",
      "Industrial RO systems",
      "UV / UF purifiers",
      "Customized water solutions",
    ],
    icon: "shopping-cart",
    image: newSalesService,
  },

  // 8️⃣ New Enquiry & Site Visit Service
  {
    id: "site-visit",
    title: "New Enquiry & Site Visit Service",
    description:
      "Quick enquiry support and free site visits to help you choose the right RO system based on your water quality and usage needs.",
    features: [
      "Free water testing & analysis",
      "Expert site inspection",
      "Personalized RO system recommendation",
      "Clear pricing & transparent guidance",
      "Professional installation planning",
    ],
    icon: "map-pin",
    image: waterTreatmentService,
  },
];
