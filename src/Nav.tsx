import { Logo } from "./images/Logo.tsx"
import burger from "./images/icon-hamburger.svg"
import close from "./images/icon-close.svg"
import { useState } from "react"

export const Nav = () => {

   const [openMenu, setOpenMenu] = useState(false)

    function handleClick(){
        setOpenMenu(!openMenu)
    }

  return (
    <>
    <div className="bg-white px-5 flex justify-between items-center z-20 relative lg:px-[100px]">
        <div className="my-[20px]">
            <Logo color="#2D314D"/>
        </div>

        <ul className={`${openMenu?"":"hidden"} z-10 absolute rounded-[5px] top-[85px] bg-white w-[90%] text-center`}>
            <li className="h-10  mt-5 cursor-pointer">Home</li>
            <li className="h-10  mt-5 cursor-pointer">About</li>
            <li className="h-10  mt-5 cursor-pointer">Contact</li>
            <li className="h-10  mt-5 cursor-pointer">Blog</li>
            <li className="h-10  mt-5 cursor-pointer">Carrers</li>
        </ul>

        <ul className="hidden lg:flex items-center h-[88px]">
            <li className="cursor-pointer pt-7 text-gray-400 hover:text-black hover:border-green-400 hover:border-b-4 h-[100%] w-[80px] text-center">Home</li>
            <li className="cursor-pointer pt-7 text-gray-400 hover:text-black hover:border-green-400 hover:border-b-4 h-[100%] w-[80px] text-center">About</li>
            <li className="cursor-pointer pt-7 text-gray-400 hover:text-black hover:border-green-400 hover:border-b-4 h-[100%] w-[80px] text-center">Contact</li>
            <li className="cursor-pointer pt-7 text-gray-400 hover:text-black hover:border-green-400 hover:border-b-4 h-[100%] w-[80px] text-center">Blog</li>
            <li className="cursor-pointer pt-7 text-gray-400 hover:text-black hover:border-green-400 hover:border-b-4 h-[100%] w-[80px] text-center">Carrers</li>
        </ul>

        <img  onClick={handleClick} className="lg:hidden" src={openMenu?close:burger} alt="" />

        <button className="my-[20px] hidden lg:inline-block rounded-[25px] px-8 py-3 bg-gradient-to-r text-white to-blue-400 from-green-400  ">Request Invite</button>

    </div>
    {openMenu && (
    <div className={` bg-[#00000055] z-10  w-[100%] h-[100%] fixed top-0 left-0 `}></div>
    )}
    </>
  )
}
