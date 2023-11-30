"use client"
import "./about.css";
import Transition from "../Transition/page";
import Transition2 from "../Trsansition2/page";
import { motion } from "framer-motion";

const Story = () => {
  return <div>
    <div className="about_main">
        <img src="/story.png" />
    </div>

    <div className="story_container">
        <div className="story_time">
          <Transition>
            <p className="story_header">
            "Crafting Elegance Since Inception"
            </p>
          </Transition>
          <Transition2>
            <p className="story">
            At Rubix, we are committed to the pursuit of perfection in the realm of interior design. 
            Our journey began with a passion for creating spaces that exude luxury and sophistication.
            </p>
          </Transition2>
        </div>

        <div className="main_wrap">
              <motion.div className="a_wrap"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 1.25 }}
              >
                <div className="cover">
                  <p className="card_header">Our Vision:</p>
                  <p className="card_desc">Our vision is to redefine luxury in interior design by harmonizing
                    form and function to create spaces that are not only aesthetically pleasing
                    but also functional and comfortable.
                  </p>
                </div>

              </motion.div>
              <motion.div className="c_wrap"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1.25 }}
              >
                <div className="cover">
                  <p className="card_header">Our Te<span className="mask">am:</span>
</p>
                  <p className="card_desc">Meet our team of <span className="mask">highly skilled designers,</span> 
                  architects, and artisans who turn your dreams into reality. 
                  Each member is handpicked for their unwavering commitment to excellence.
                  </p>
                </div>
              </motion.div>
              <motion.div className="d_wrap"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1.25 }}>
                <div className="cover">
                  <p className="card_header">Our Portfolio:</p>
                  <p className="card_desc">Explore our diverse portfolio, showcasing our mastery in various 
                  design styles, from classic and timeless to modern and avant-garde.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="brochure">
              <p>
                Take a look at our Brochure
              </p>
            </div>
    </div>
  </div>;
};
export default Story;
