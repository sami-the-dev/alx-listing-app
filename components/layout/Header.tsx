import Image from "next/image";
import React from "react";
import MainLogo from "../../public/assets/images/MainLogo.svg";
import Link from "next/link";
import Button from "../common/Button";
import Search from "../common/Search";
import ScrollView from "./ScrollView";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-9xl  px-16 py-4 shadow-sm sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                sizes="100vw"
                width={50}
                height={30}
                src={MainLogo}
                alt="Main Logo"
                priority
              />
            </Link>
          </div>
          <Search />
          <nav className="flex">
            <div className="flex gap-2">
              <Button styles="bg-primary text-white hover:bg-primary/80">
                Sign In
              </Button>
              <Button styles="bg-white text-black hover:bg-current/5 border-1 border-shimmer_2">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </div>
      <ScrollView />
    </header>
  );
};

export default Header;
