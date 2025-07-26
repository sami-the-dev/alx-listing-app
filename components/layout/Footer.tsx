import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { mainLogo } from "../../public/assets/images";
const Footer = () => {
  return (
    <div>
      <div className="bg-primary h-8 w-full" />
      <div className="font-md bg-black px-15 py-6">
        <div className="border-white_17 flex justify-between border-b-1 pb-3">
          <div>
            <Image
              className="pb-6"
              color="white"
              height={30}
              width={60}
              src={mainLogo}
              alt="logo"
            />
            <p className="text-gray_2 w-sm">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="flex gap-32">
            <FooterSection title="Explore">
              <li>
                <a href="#">Apartments in Dubai</a>
              </li>
              <li>
                <a href="#">PoHotels in New York</a>
              </li>
              <li>
                <a href="#">Villa in Spain</a>
              </li>
              <li>
                <a href="#">Mansion in Indonesia</a>
              </li>
            </FooterSection>
            <FooterSection title="Company">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
            </FooterSection>
            <FooterSection title="Help">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Cancel booking</a>
              </li>
              <li>
                <a href="#">Refunds Process</a>
              </li>
            </FooterSection>
          </div>
        </div>
        <div className="bg-white_17 mt-4 w-full" />
        <div className="flex justify-between">
          <p className="text-gray_2">
            Some hotel requires you to cancel more than 24 hours before
            check-in.Details
            <a className="text-primary pl-1 hover:text-current/95" href="#">
              here
            </a>
          </p>
          <div>
            <ul className="text-gray_2 flex justify-between gap-8">
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Policy service</a>
              </li>
              <li>
                <a href="">Cookies Policy</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const FooterSection: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <div className="text-gray_2 flex flex-col">
      <h3 className="pb-8 font-extrabold">{title}</h3>
      <ul className="g-2 flex list-none flex-col font-thin">{children}</ul>
    </div>
  );
};
