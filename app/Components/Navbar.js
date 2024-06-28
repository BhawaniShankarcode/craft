"use client"
import React, { useState } from 'react'
import Image from "next/image";
// import menu from "..../public/menu.png"
// import cross from "..../public/cross.png"

// import { RxCross1 } from "react-icons/rx";
// import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({menu,cross}) => {
    const [isClick , setIsclick] = useState(false);

    const toggleNavbar = () =>{
        setIsclick(!isClick)
    }
    return (
    <nav>
              <h1 className="text-[30px] font-extrabold">CRAFTLY</h1>
              <div className='navfristDiv'>
                <a className=" text-[24px] font-semibold cursor-pointer rounded hover:bg-[#496AF1] w-100px p-[20px] hover:text-white" href='/'>Products</a>
                <a className=" text-[24px] font-semibold cursor-pointer rounded hover:bg-[#496AF1] w-100px p-[20px] hover:text-white" href='/'>Demos</a>
                <a className=" text-[24px] font-semibold cursor-pointer rounded hover:bg-[#496AF1] w-100px p-[20px] hover:text-white" href='/'>Resources</a>
                <a className=" text-[24px] font-semibold cursor-pointer rounded hover:bg-[#496AF1] w-100px p-[20px] hover:text-white" href='/'>Pricing</a>
              </div>
              <button className='signinbtn'>Sign in</button>

              
                <button className='md:hidden menuBtn' 
                  onClick={toggleNavbar}
               >
                    {
                        isClick ? (
                            <Image src={cross} className='cross'/>
                            
                        ) : (
                            <Image src={menu} className='cross'/>
                        )
                    }
                </button>
                
               {
                isClick && (
                    <div className='md:hidden navMain'>
                    
                   
                <a href='/' className='navlink1'>Products</a>
                <a href='/' className='navlink2'>Demos</a>
                <a href='/' className='navlink3'>Resources</a>
                <a href='/' className='navlink4'>Pricing</a>
                  
                    </div> 
                )
              }
            </nav>
  )
}

export default Navbar