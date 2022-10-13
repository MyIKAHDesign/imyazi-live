import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
//import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Ndondeezo", href: "/" },
  { text: "Ibufuliiru", href: "/ibufuliiru" },
  { text: "Kifuliiru", href: "/kifuliiru" },
  { text: "Bafuliiru", href: "/bafuliiru" },
  { text: "Twehe, Guno mukolwa", href: "/twehe" },
  { text: "Tuyandikire", href: "/tuyandikire" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      {/* <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Imyazi mu Kifuliiru</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav> */}


      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight"><a href={"/"}>Imyazi mu Kifuliiru</a></span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title><a href={"/ibufuliiru"}></a></title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Ibufuliiru
      </a>
      <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Bafuliiru
      </a>
      <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Kifuliiru
      </a>
      <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Guno mukolwa
      </a>
      <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Tuyandikire
      </a>
           
    </div>
    <div>
      <a href="https://ibufuliiru.editorx.io/imyazi/"   class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Gindi Myazi</a>
    </div>
  </div>
</nav>



    </header>
  );
};

export default Navbar;