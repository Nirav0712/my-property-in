export type Project = {
  id: number;
  title: string;
  slug: string;
  price: number;
  displayPrice: string;
  image: string;
  images?: string[];  // up to 3 images for the card carousel
  status: string;
  bedrooms: number;
  location: string;
  PlotArea?: string;
  address: string;
  featured?: boolean;
  description: string;
  zone: "East" | "West";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Aaradhana Sky 2",
    slug: "aaradhana-sky-2",
    price: 260000,
    displayPrice: "₹ 26 Lakh",
    image: "/images/east/AARADHANA_2.jpeg",
    images: ["/images/east/AARADHANA_2.jpeg", "/images/west/omkar.jpeg", "/images/west/subh-green.jpeg"],
    status: "For Sale",
    bedrooms: 2,
    location: "Ahmedabad",
    PlotArea: "110 SQ.YRD & 115 SQ.YRD",
    address: "Beside Avadh Green Bungalows, Narol-Aslali Highway, Behind Pooja Farm Road, Narol, Ahmedabad - 382405",
    featured: true,
    description: "Aaradhana Sky 2 offers luxurious 2 BHK flats in Narol, Ahmedabad with FREE furniture and modular kitchen. Limited project of only 56 premium units designed with modern amenities and quality construction for comfortable living.",
    zone: "East"
  },

];
