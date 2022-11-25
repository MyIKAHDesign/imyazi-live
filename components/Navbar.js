import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <header>

      <nav class="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-zinc-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight"><a href={"/"}>Imyazi mu Kifuliiru</a></span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title><a href={"/ibufuliiru"}></a></title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-white lg:flex-grow">
            <a href={"/"} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Ndondeezo
            </a>
            <a href={"/ibufuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Ibufuliiru
            </a>
            <a href={"/bafuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Bafuliiru
            </a>
            <a href={"/kifuliiru"} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Kifuliiru
            </a>
            <a href={"/twehe"} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Guno mukolwa
            </a>
            <a href="https://ibufuliiru.editorx.io/ibufuliiru/tuyandikire" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" target="_blank">
              Tuyandikire
            </a>
           
            <Link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" href='/twehe'>Guno mukolwa 2</Link>

          </div>
          <div>
            <a href="https://ibufuliiru.editorx.io/imyazi/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" target="_blank">Gindi Myazi</a>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;