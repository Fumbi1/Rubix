"use client"
import "./page.css";
import Transition from "./Transition/page";
import Pointer from "./contactpointer/page";
import Link from "next/link";

const Home = () => {
  

  return <div>
    <Transition />
    <div className="main">
      <div className="home_poster">
        <div className="home_innerposter">
          <p className="intro">It has to Speak!</p>
          <p className="desc">Elevate your home or business <br/>
          space to a World of Prestige <br/>and Elegance...</p>
          <div className="button1">
            <Link href="/about" className="Link">
              <div className="click">
                <p>
                  Read More
                </p>
                <img src="/arrow.png" alt=""oops/>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="subsection2">
          <div className="sec2_txt">
            <p className="sec2_header">
              We Create The Art<br/>
              Of Stylish Living
            </p>
            <p className="sec2_desc">
            From creating detailed floor plans and 3D renderings to selecting materials, finishes, and lighting,
             we handle every aspect of the design process. We ensure seamless execution and
              work closely with contractors and suppliers to transform your vision into a stunning reality.
            </p>
            <div className="button2">
              <Link href="/services" className="Link">
                <div className="click2">
                    <p>
                      Our Services
                    </p>
                    <img src="/arrow.png" />
                </div>
              </Link>
            </div>
          </div>
          <div className="sec2_image">
            <img src="/Photo2.png" alt=""/>
          </div>
        </div>
      </div>

      <Pointer />
    </div>
  </div>;
};
export default Home;
