import { StaticImageData } from "next/image";

export interface CardProps {
  image: string | StaticImageData;
    name: string;
    price: number;
    rating: number;
    category: string[];
    address: {
      state: string;
      city: string;
      country: string;
    };
    offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
}
export interface ButtonProps {
  styles: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: StaticImageData | string;
  discount: string;
}

export interface SearchInputProps {
  label: string;
  type: string;
  placeholder: string;
  styles?: string;
}
