import Image from "next/image";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import {
  apartment_1,
  cottage_1,
  farm_1,
  group,
  home_1,
  island_1,
  keyChain_1,
  livingRoom_1,
  mansion_1,
  palmTree_1,
  tent_1,
  vacations_1,
  villa_1,
  castle_tower,
} from "../../public/assets/images";

// Define the image data with labels for better maintenance
const categoryImages = [
  { src: apartment_1, alt: "Apartment", label: "Apartments" },
  { src: cottage_1, alt: "Cottage", label: "Cottages" },
  { src: farm_1, alt: "Farm", label: "Farms" },
  { src: home_1, alt: "Home", label: "Homes" },
  { src: island_1, alt: "Island", label: "Islands" },
  { src: keyChain_1, alt: "Key Chain", label: "Rentals" },
  { src: livingRoom_1, alt: "Living Room", label: "Living Rooms" },
  { src: mansion_1, alt: "Mansion", label: "Mansions" },
  { src: tent_1, alt: "Tent", label: "Tents" },
  { src: vacations_1, alt: "Vacation", label: "Vacations" },
  { src: villa_1, alt: "Villa", label: "Villas" },
  { src: palmTree_1, alt: "Palm Tree", label: "Tropical" },
  { src: group, alt: "Group", label: "Groups" },
  { src: castle_tower, alt: "castle_tower", label: "Castle Tower" },
];

const ScrollView = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full justify-center py-4">
      {/* Scroll left button */}
      <button
        onClick={scrollLeft}
        className="bg-opacity-90 absolute top-1/2 left-0 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
        aria-label="Scroll left"
      >
        <FaAngleLeft />
      </button>

      {/* Main scrollable container with hidden scrollbar */}
      <div ref={scrollContainerRef} className="scrollbar-hide overflow-x-auto">
        <div className="flex min-w-max items-center justify-center space-x-10 px-10">
          {categoryImages.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center justify-between transition-opacity hover:opacity-80"
              onClick={() =>
                index < categoryImages.length / 2 ? scrollLeft() : scrollRight()
              }
            >
              <div className="mb-2 rounded-full bg-gray-100 p-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll right button */}
      <button
        onClick={scrollRight}
        className="bg-opacity-80 absolute top-1/2 right-0 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
        aria-label="Scroll right"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ScrollView;
