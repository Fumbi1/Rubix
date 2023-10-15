"use client"
import Link from "next/link";
import "./nav.css"
import { useRouter } from "next/navigation";

const Nav = () => {
  const Direct = useRouter();

  return <div className="nav_container">    
    <nav>
        <div className="home" >
          <Link href="/">
            <img src="/Rr.svg" alt="omooo!"/>
          </Link>
        </div>
        <div className="pages">
          <Link className="Link" href="/about">About</Link>
          <Link className="Link" href="/services">Services</Link>
          <div onClick={() => {Direct.push("/contact")}} className="consultation">
            <div className="Link22">Book Now</div>
          </div>
        </div>
    </nav>
  </div>;
};
export default Nav;
