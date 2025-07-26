import Image from "next/image";
import { hero } from "../public/assets/images";
import Button from "@/components/common/Button";
import { RiFilterOffLine } from "react-icons/ri";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const ButtonsData = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Top Villa",
  },
  {
    id: 3,
    name: "Free Reschedule",
  },
  {
    id: 4,
    name: "Book Now, Pay later",
  },
  {
    id: 5,
    name: "Self CheckIn",
  },
  {
    id: 6,
    name: "Instant Book",
  },
];


export default function Home() {
  return (
    <div className="mt-8 mb-12 flex  justify-center flex-col mx-14">
      {/* Hero Section */}
      <Image className="rounded-md w-full" src={hero} alt="Hero" />
      {/* Filter Section */}
      <div className="flex justify-between">
        <div className="mt-8 w-full flex gap-4">
          {ButtonsData.map((button) => (
            <Button key={button.id} styles=" border-1 py-2 px-4 border-shimmer text-black 
         font-semibold hover:border-primary hover:text-primary transition-all duration-300">
          {button.name}
        </Button>

          ))}
         
        </div>
        <div className="flex justify-end w-full gap-4 mt-8">
          <Button
            styles="border-1 border-shimmer text-black px-4 font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <span>Filter</span>
            <span><RiFilterOffLine /></span>
          </Button>
          <Button styles="border-1 border-shimmer text-black px-4 py-2 w-full  lg:px-3  lg:py-2  lg:w-auto
         font-semibold hover:border-primary hover:text-primary transition-all duration-300">
         Sort by: Highest Price
        </Button>
        </div>
        
      </div>
      {/* Listing Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Card Component Usage */}
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Card
          offers={property.offers}
          address={property.address}
          category={property.category}
            key={index}
            image={property.image}
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </div>
    </div>
  );
}

       