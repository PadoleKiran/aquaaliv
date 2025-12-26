import domesticImg from "../assets/roservices_photos/DOMESTIC RO Plant Service.jpeg";
import commercialImg from "../assets/roservices_photos/Commercial RO Plant Service.png";
import industrialImg from "../assets/roservices_photos/Industrial RO Plant Maintenance.png";
import wtpImg from "../assets/roservices_photos/Water Treatment Plant Services.png";

export const roPlantServices = [
  {
    id: "domestic-ro",
    title: "Domestic RO Plant Service",
    tag: "Homes & Offices",
    image: domesticImg,
    description:
      "Service & maintenance for 50–100 LPH RO plants used in homes, schools, hospitals, and small offices.",
    points: [
      "Complete system inspection",
      "Pre-filter & membrane cleaning",
      "Pump & electrical checks",
      "Pressure & flow calibration",
      "TDS & water quality testing",
      "Leakage inspection",
    ],
    recommended: "Every 3–6 months",
  },
  {
    id: "commercial-ro",
    title: "Commercial RO Plant Service",
    tag: "Hotels & Businesses",
    image: commercialImg,
    description:
      "Reliable servicing for commercial RO plants ensuring uninterrupted water supply.",
    points: [
      "Plant inspection & troubleshooting",
      "Membrane & media servicing",
      "High-pressure pump checks",
      "Flow & TDS calibration",
      "Pipeline maintenance",
    ],
  },
  {
    id: "industrial-ro",
    title: "Industrial RO Plant Maintenance",
    tag: "Industries",
    image: industrialImg,
    description:
      "Heavy-duty maintenance for large-scale industrial RO systems.",
    points: [
      "System inspection",
      "Pre-treatment maintenance",
      "High-capacity motor checks",
      "Automation & panel inspection",
      "Leak detection",
    ],
  },
  {
    id: "wtp",
    title: "Water Treatment Plant Services",
    tag: "WTP / STP / DM",
    image: wtpImg,
    description:
      "Complete support for WTP, STP, and DM plants for industries and institutions.",
    points: [
      "WTP, DM & STP maintenance",
      "Municipal system support",
      "Water quality optimization",
      "Preventive maintenance",
    ],
  },
];
