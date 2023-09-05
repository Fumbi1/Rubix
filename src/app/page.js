"use client"
import "./page.css";
import { AnimatePresence } from "framer-motion";
import Pointer from "./contactpointer/page";
import Link from "next/link";
import Transition from "./Transition/page";
import Transition2 from "./Trsansition2/page";

const Home = () => {

  return <div>
    <AnimatePresence mode="wait">
      <div>
          

        {/* <motion.div
          variants={transitionVariants}
          className="slide_in"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: 0.8, duration: 2.4, ease: "easeInOut"}}
        >
        </motion.div> */}

        <div className="main">
          <div className="home_poster">
            <div className="home_innerposter">
              <Transition>
                <p className="intro">
                Welcome to where opulence and Creativity Meets Spac<span className="light1">es, Seamlessly </span>
                </p>
              </Transition>
              <Transition2>
                <p className="desc">
                Want ear<span className="light2">ly access to premium offers and get noti</span>fied when you launch?
                </p>
              </Transition2>
              <Transition2>
                <div className="button1">
                  <Link href="/about" className="Link">
                    <div className="click">
                      <p>
                      Join Our Waitlist
                      </p>
                      <img src="/arrow.png" alt=""oops/>
                    </div>
                  </Link>
                </div>
              </Transition2>
            </div>
          </div>

          <div className="section2">
            <div className="subsection2">
              <div className="sec2_txt">
                <Transition>
                  <p className="sec2_header">
                    We Create The Art<br/>
                    Of Stylish Living
                  </p>
                </Transition>
                <Transition2>
                  <p className="sec2_desc">
                  From creating detailed floor plans and 3D renderings to selecting materials, finishes, and lighting,
                  we handle every aspect of the design process. We ensure seamless execution and
                    work closely with contractors and suppliers to transform your vision into a stunning reality.
                  </p>
                </Transition2>
                <Transition2>
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
                </Transition2>
              </div>
              <div className="sec2_image">
                <Transition><img src="/Photo2.png" alt=""/></Transition>
              </div>
            </div>
          </div>
            <Pointer />
        </div>

        {/* <motion.div
        className="slide_out"
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}
        >
        </motion.div> */}
      </div>
    </AnimatePresence>;
  </div>;
};
export default Home;
