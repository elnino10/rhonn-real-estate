import rhonnImg1 from "../assets/images/rhonn-img1.jpg";
import rhonnImg2 from "../assets/images/rhonn-img2.jpg";
import rhonnImg3 from "../assets/images/rhonn-img3.jpg";
import rhonnImg4 from "../assets/images/rhonn-img4.jpg";
import house from "../assets/images/house.jpg";
import livingRoom from "../assets/images/living-room.jpg";
import background from "../assets/images/background.jpg";

import Img10 from "../assets/images/prop1/IMG10.jpg";
import Img11 from "../assets/images/prop1/IMG11.jpg";
import Img12 from "../assets/images/prop1/IMG12.jpg";
import Img13 from "../assets/images/prop1/IMG13.jpg";
import Img14 from "../assets/images/prop1/IMG14.jpg";
import Img15 from "../assets/images/prop1/IMG15.jpg";
import Img16 from "../assets/images/prop1/IMG16.jpg";
import Img17 from "../assets/images/prop1/IMG17.jpg";

// data for available properties
const PropsData = [
  {
    id: "p01",
    name: "5 Bedroom Fully Detached Duplex",
    image: Img10,
    images: [
      { id: "p011", view: Img11 },
      { id: "p012", view: Img12 },
      { id: "p013", view: Img13 },
      { id: "p014", view: Img14 },
      { id: "p015", view: Img15 },
      { id: "p016", view: Img16 },
      { id: "p017", view: Img17 },
      { id: "p010", view: Img10 },
    ],
    description: "Ajah Lekki Unique & Luxury Duplex with Swimming Pool",
    price: 130,
    location: "Ajah Lekki",
    featureDesc: "5 Bedroom Fully Detached Duplex with Bq and pool for Sale!!",
    features: [
      { id: "f010", feat: "CCTV Cameras" },
      { id: "f011", feat: "Swimming pool" },
      { id: "f012", feat: "Brand new" },
      { id: "f013", feat: "Video bell" },
      { id: "f014", feat: "Clean water" },
      { id: "f015", feat: "Secured estate" },
      { id: "f016", feat: "Good compound space" },
      { id: "f017", feat: "Fully fitted kitchen" },
      { id: "f018", feat: "Serenity" },
      { id: "f019", feat: "Water heaters" },
      { id: "f020", feat: "POP ceiling" },
      { id: "f021", feat: "Jacuzzi" },
    ],
    category: "fully-detached",
    state: "lagos state",
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
    price: 10000,
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
    category: "semi-detached",
    state: "lagos state",
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
    price: 1500000,
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
    category: "land",
    state: "enugu state",
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
    price: 550000,
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
    category: "terrace",
    state: "anambra state",
  },
  {
    id: "p05",
    name: "3 bedrooms bungalow",
    image: house,
    images: [
      { id: "p050", view: house },
      { id: "p051", view: rhonnImg1 },
      { id: "p052", view: rhonnImg2 },
      { id: "p053", view: rhonnImg4 },
      { id: "p054", view: livingRoom },
      { id: "p055", view: background },
    ],
    description: "Available property description",
    price: 1200000,
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
    category: "others",
    state: "lagos state",
  },
];

export default PropsData;
