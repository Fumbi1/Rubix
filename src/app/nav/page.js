import Link from "next/link";
import "./nav.css"

const Nav = () => {

  return <div className="nav_container">    
    <nav>
        <div className="home" >
          <Link href="/">
            <img src="/Rr.svg" alt="omooo!"/>
          </Link>
        </div>
        <div className="pages">
          <Link className="Link" href="/about">ABOUT US</Link>
          <Link className="Link" href="/services">SERVICES</Link>
          <Link className="Link" href="/contact">CONTACT</Link>
        </div>
    </nav>
  </div>;
};
export default Nav;
