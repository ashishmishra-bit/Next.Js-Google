import Image from "next/image";
import { router, useRouter } from 'next/router';
import { useRef } from "react";
import { XIcon } from "@heroicons/react/solid";
import {  MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
    const router =useRouter();
    const searchInputRef = useRef(null);
    return (
      <header>
        <Image
        src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        height = {40}
        width = {120}
        onClick =  {() =>router.push("/")}
        className = "cursor-pointer"        
        />

        <form className = "flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref = {searchInputRef} className="flex-grow w-full focu:outline-none" type="text" />

          <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
          onClick={() => (searchInputRef.current.value = "")}
          />
        <MicrophoneIcon 
        className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"
        />
        <SearchIcon 
        className="mr-3 h-6 hidden sm:inline-flex text-blue-500  cursor-pointer"
        />
        </form>
      </header>
    )
}

export default Header;
