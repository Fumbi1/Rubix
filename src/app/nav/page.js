"use client"
import Link from "next/link";
import "./nav.css"
import React, { useEffect, useRef } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from 'framer-motion';

const Nav = () => {
  const Location = usePathname();
  const Direct = useRouter();
  const navControls = useAnimation();
  const navRef = useRef(null);

  // Set the scroll threshold at which you want to change the background
  // const scrollThreshold = 625;
  const scrollThreshold = 25;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navControls.start({ backgroundColor: '#FFFFFF' });
      } else {
        navControls.start({ backgroundColor: 'transparent', backdropFilter: 'blur(30px)' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navControls]);


  

  return <motion.div
    className="nav_container"
    ref={navRef}
    initial={{ backgroundColor: 'transparent', backdropFilter: 'blur(30px)' }}
    animate={navControls}
    transition={{ duration: 0.75 }}
  >    
    <nav>
        <div className="home" >
          <Link href="/">
            <img src="/Rr.svg" alt="omooo!"/>
          </Link>
        </div>
        <div className="pages">
          <Link className={Location === "/about"? "Link_active" : "Link"} href="/about">About</Link>
          <Link className={Location === "/services"? "Link_active" : "Link"} href="/services">Services</Link>
          <div onClick={() => {Direct.push("/contact")}} className={Location === "/contact"? "consultation_active" : "consultation"}>
            <div className={Location === "/contact"? "Link22_active" : "Link22"}>Book Now</div>
          </div>
        </div>
    </nav>
  </motion.div>;
};
export default Nav;
