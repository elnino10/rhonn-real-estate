import rhonnImg1 from "../assets/images/rhonn-img1.jpg";
import rhonnImg2 from "../assets/images/rhonn-img2.jpg";
import rhonnImg3 from "../assets/images/rhonn-img3.jpg";
import rhonnImg4 from "../assets/images/rhonn-img4.jpg";
import house from "../assets/images/house.jpg";
import livingRoom from "../assets/images/living-room.jpg";
import background from "../assets/images/background.jpg";

// data for available properties
const PropsData = [
  {
    id: "p01",
    name: "4 bedrooms Duplex",
    image: rhonnImg1,
    images: [
      { id: "p010", view: rhonnImg1 },
      { id: "p011", view: rhonnImg1 },
      { id: "p012", view: rhonnImg2 },
      { id: "p013", view: rhonnImg4 },
    ],
    description: "Available property description",
    price: 500000,
    location: "Available property location",
    featureDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    features: [
      { id: "f010", feat: "CCTV Cameras" },
      { id: "f011", feat: "4 bedrooms" },
      { id: "f012", feat: "Street Lights" },
      { id: "f013", feat: "All Rooms En suite" },
    ],
  },
  {
    id: "p02",
    name: "5 bedrooms duplex",
    image: rhonnImg2,
    images: [
      { id: "p020", view: rhonnImg1 },
      { id: "p021", view: rhonnImg2 },
      { id: "p022", view: rhonnImg4 },
    ],
    description: "Available property description",
    location: "Available property location",
    featureDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    features: [
      { id: "f020", feat: "CCTV Cameras" },
      { id: "f021", feat: "5 bedrooms" },
      { id: "f022", feat: "Street Lights" },
      { id: "f023", feat: "All Rooms En suite" },
      { id: "f024", feat: "Boys Quaters" },
      { id: "f025", feat: "Security House" },
    ],
  },
  {
    id: "p03",
    name: "3 bedrooms terrace",
    image: rhonnImg3,
    images: [
      { id: "p030", view: rhonnImg1 },
      { id: "p031", view: rhonnImg2 },
      { id: "p032", view: rhonnImg4 },
    ],
    description: "Available property description",
    location: "Available property location",
    featureDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    features: [
      { id: "f030", feat: "CCTV Cameras" },
      { id: "f031", feat: "5 bedrooms" },
      { id: "f032", feat: "Street Lights" },
      { id: "f033", feat: "All Rooms En suite" },
      { id: "f034", feat: "Boys Quaters" },
      { id: "f035", feat: "Security House" },
      { id: "f036", feat: "Parking Space" },
      { id: "f037", feat: "Swimming Pool" },
    ],
  },
  {
    id: "p04",
    name: "2 bedrooms flat",
    image: rhonnImg4,
    images: [
      { id: "p040", view: rhonnImg1 },
      { id: "p041", view: rhonnImg2 },
      { id: "p042", view: rhonnImg4 },
    ],
    description: "Available property description",
    location: "Available property location",
    featureDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    features: [
      { id: "f040", feat: "CCTV Cameras" },
      { id: "f041", feat: "5 bedrooms" },
      { id: "f042", feat: "Street Lights" },
      { id: "f043", feat: "All Rooms En suite" },
      { id: "f044", feat: "Boys Quaters" },
      { id: "f045", feat: "Security House" },
      { id: "f046", feat: "Garden" },
      { id: "f047", feat: "Water Treatment" },
      { id: "f048", feat: "Mall Nearby" },
      { id: "f049", feat: "Jacuzzi" },
    ],
  },
  {
    id: "p05",
    name: "3 bedrooms bungalow",
    image: house,
    images: [
      { id: "p050", view: house},
      { id: "p051", view: rhonnImg1 },
      { id: "p052", view: rhonnImg2 },
      { id: "p053", view: rhonnImg4 },
      { id: "p054", view: livingRoom },
      { id: "p055", view: background },
    ],
    description: "Available property description",
    location: "Available property location",
    featureDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    features: [
      { id: "f050", feat: "CCTV Cameras" },
      { id: "f051", feat: "5 bedrooms" },
      { id: "f052", feat: "Street Lights" },
      { id: "f053", feat: "All Rooms En suite" },
      { id: "f054", feat: "Boys Quaters" },
    ],
  },
];

export default PropsData;
