"use client";
import "./page.css";
import { motion, AnimatePresence } from "framer-motion";
import Pointer from "./contactpointer/page";
import Transition from "./Transition/page";
import Transition2 from "./Trsansition2/page";
import Transition3 from "./Transition3/page";
import { useRouter } from "next/navigation";

const Home = () => {
  const Route = useRouter();

  const path = () => {
    Route.push("/waitlist");
  };
  return (
    <div>
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
                <p className="intro">
                  <Transition3 delay={0}>E</Transition3>
                  <Transition3 delay={0.1}>l</Transition3>
                  <Transition3 delay={0.2}>e</Transition3>
                  <Transition3 delay={0.3}>v</Transition3>
                  <Transition3 delay={0.4}>a</Transition3>
                  <Transition3 delay={0.5}>t</Transition3>
                  <Transition3 delay={0.6}>e</Transition3>{" "}
                  <Transition3 delay={0.7}>Y</Transition3>
                  <Transition3 delay={0.8}>o</Transition3>
                  <Transition3 delay={0.9}>u</Transition3>
                  <Transition3 delay={1}>r</Transition3>{" "}
                  <Transition3 delay={1.1}>S</Transition3>
                  <Transition3 delay={1.2}>p</Transition3>
                  <Transition3 delay={1.3}>a</Transition3>
                  <Transition3 delay={1.4}>c</Transition3>
                  <Transition3 delay={1.5}>e</Transition3>{" "}
                  <Transition3 delay={1.6}>w</Transition3>
                  <Transition3 delay={1.7}>i</Transition3>
                  <Transition3 delay={1.8}>t</Transition3>
                  <Transition3 delay={1.9}>h</Transition3>
                  <span className="distinct">
                    <Transition3 delay={2}>L</Transition3>
                    <Transition3 delay={2.1}>u</Transition3>
                    <Transition3 delay={2.2}>x</Transition3>
                    <Transition3 delay={2.3}>u</Transition3>
                    <Transition3 delay={2.4}>r</Transition3>
                    <Transition3 delay={2.5}>y</Transition3>{" "}
                    <Transition3 delay={2.6}>&</Transition3>{" "}
                    <Transition3 delay={2.7}>E</Transition3>
                    <Transition3 delay={2.8}>l</Transition3>
                    <Transition3 delay={2.9}>e</Transition3>
                    <Transition3 delay={3}>g</Transition3>
                    <Transition3 delay={3.1}>a</Transition3>
                    <Transition3 delay={3.2}>n</Transition3>
                    <Transition3 delay={3.3}>c</Transition3>
                    <Transition3 delay={3.4}>e</Transition3>
                  </span>
                </p>
                <Transition2>
                  <p className="desc">
                    Want early access to premium offers and get notified when
                    you launch?
                  </p>
                </Transition2>
                <Transition2>
                  <motion.div
                    onClick={path}
                    className="button1"
                    transition={{
                      duration: 0.75,
                      ease: "easeOut",
                      repeat: Infinity,
                      yoyo: Infinity,
                    }}
                    animate={{
                      y: ["30%", "-30%"],
                    }}
                  >
                    <div className="Link">
                      <div className="click">
                        <p>Join our Waitlist</p>
                        <img src="/arrow.png" alt="" oops />
                      </div>
                    </div>
                  </motion.div>
                </Transition2>
              </div>
            </div>

            <motion.div className="hero"
            transition={{
              duration: 15,
              repeat: Infinity,
              yoyo: Infinity,
            }}
            animate={{
              background: ['#573324', '#4d5053', '#573324'],
            }}>
              <Transition2>
                <p className="intro2">
                  At Rubix, we believe that your living spaces are more than just
                  four walls; they're a canvas for your dreams. We are a bespoke
                  interior design company dedicated to transforming ordinary
                  spaces into extraordinary living experiences.
                </p>
              </Transition2>
            </motion.div>

            <div className="section2">
              <div className="subsection2">
                <div className="sec2_txt">
                  <Transition>
                    <p className="sec2_header">Discover Luxury:</p>
                  </Transition>
                  <Transition2>
                    <p className="sec2_desc">
                      Indulge in the world of timeless sophistication and
                      opulence, where every detail tells a story of impeccable
                      taste and grandeur.
                    </p>
                  </Transition2>
                  <Transition2>
                    <div
                      onClick={() => {
                        Route.push("/services");
                      }}
                      className="button2"
                    >
                      <div className="Link">
                        <div className="click2">
                          <p>Our Services</p>
                          <img src="/arrow.png" />
                        </div>
                      </div>
                    </div>
                  </Transition2>
                </div>
                <div className="sec2_image">
                  <Transition>
                    <img src="/create.jpg" alt="" className="curve" />
                  </Transition>
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="subsection2a">
                <div className="sec2_txt">
                  <Transition>
                    <p className="sec2_header">Our Expertise:</p>
                  </Transition>
                  <Transition2>
                    <p className="sec2_desc">
                      With a team of seasoned interior designers and artisans,
                      we specialize in creating elegant, tailor-made designs
                      that reflect your unique style and aspirations.
                    </p>
                  </Transition2>
                  <Transition2>
                    <div
                      onClick={() => {
                        Route.push("/services");
                      }}
                      className="button2"
                    >
                      <div className="Link">
                        <div className="click2">
                          <p>Our Services</p>
                          <img src="/arrow.png" />
                        </div>
                      </div>
                    </div>
                  </Transition2>
                </div>
                <div className="sec2_image">
                  <Transition>
                    <img src="/cardinal.jpg" alt="" className="curve" />
                  </Transition>
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="subsection2">
                <div className="sec2_txt">
                  <Transition>
                    <p className="sec2_header">Elevate Your Lifestyle:</p>
                  </Transition>
                  <Transition2>
                    <p className="sec2_desc">
                      Experience the pinnacle of luxury living through our
                      breathtaking designs and exclusive furnishings,
                      meticulously curated for your discerning taste.
                    </p>
                  </Transition2>
                  <Transition2>
                    <div
                      onClick={() => {
                        Route.push("/services");
                      }}
                      className="button2"
                    >
                      <div className="Link">
                        <div className="click2">
                          <p>Our Services</p>
                          <img src="/arrow.png" />
                        </div>
                      </div>
                    </div>
                  </Transition2>
                </div>
                <div className="sec2_image">
                  <Transition>
                    <img src="/pinnacle.jpg" alt="" className="curve" />
                  </Transition>
                </div>
              </div>
            </div>

            <div className="section3">
              <div></div>
              <div></div>
              <div></div>
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
      </AnimatePresence>
      ;
    </div>
  );
};
export default Home;
