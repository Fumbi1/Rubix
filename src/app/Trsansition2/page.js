"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./tr.css";


const Transition2 = ({children}) => {

  const ref = useRef(null);
  const view = useInView(ref, {once: true});
  const controllerA = useAnimation();
  const controllerW = useAnimation();

  useEffect(() => {
    if (view) {
      //fire the animation
      controllerA.start("animate")
      controllerW.start("visible");
    }
  }, [view])

  const transitionVariants = {
    initial: {
      opacity: 0,
     y: 70,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
        <div 
        ref={ref}
        className="trans">
          <motion.div
          variants={transitionVariants}
          initial="initial"
          animate={controllerA}
          transition={{delay: 0.25,duration: 0.75}}>
            {children}
          </motion.div>

          <motion.div 
          className="trans2"
          variants={{
            hidden: {left: 0},
            visible: {left: "100%"},
          }}
          initial="hidden"
          animate={controllerW}
          transition={{duration: 0.75, ease: 'easeIn'}}
          />
        </div>
    );
};
export default Transition2;

