"use client";

import { useEffect, useState } from "react";
import data from "../../../../data.json";
import Link from "next/link";

const NavItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="flex max-md:flex-col max-md:h-screen gap-5 xl:gap-10 max-md:p-5">
      {data.navItem.map((data, index) => (
        <div
          key={index}
          className={`text-[1.1rem] ${
            activeIndex === data.judul ||
            (activeIndex === null && data.judul === "Beranda")
              ? "text-primary font-bold"
              : ""
          }`}
          onClick={() => setActiveIndex(data.judul)}
        >
          <Link href={data.tautan}>{data.judul}</Link>
        </div>
      ))}
    </nav>
  );
};

export default NavItem;
