import { CardProps } from "@/interfaces";
import Image from "next/image";
import { FaBed, FaShower, FaStar, FaUsers } from "react-icons/fa6";



const Card:React.FC<CardProps> = ({image,name,price,rating,category, address,offers}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer 
    hover:shadow-lg hover:opacity-90 transition-shadow duration-300">
      <Image width={380} height={255} src={image} alt={name} className="w-full 
      object-cover hover:scale-105 transition-transform duration-300 rounded-2xl" />
      <div className="p-4">
        <div className="flex items-center  text-black justify-start mb-2">
          {category.map((cat, index) => (
            <span key={index} className="bg-gray_3 rounded-full py-1 px-3 text-sm">
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700 mb-4"> {address.city}, {address.state}, {address.country}</p>
          </div>
        <p className="text-yellow-500 font-medium text-center items-center flex">
          <FaStar className="inline-block mr-1 text-yellow-500" />
           {rating}</p>

        </div>
        <div className="flex justify-between" >
          <div className="flex items-center gap-2 border border-gray-300 rounded-full p-2">
            <span className="text-black flex items-center gap-1"><FaBed /> {offers.bed}</span>
            <span className="text-black flex items-center gap-1"><FaShower /> {offers.shower}</span>
            <span className="text-black flex items-center gap-1"><FaUsers /> {offers.occupants}</span>
        </div>
        <p className="text-gray-700 font-bold mb-1">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
