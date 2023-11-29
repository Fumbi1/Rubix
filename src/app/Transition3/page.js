"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";



const Transition3 = ({children, delay}) => {

  const ref = useRef(null);
  const view = useInView(ref, {once: true});
  const controllerA = useAnimation();

  useEffect(() => {
    if (view) {
      //fire the animation
      controllerA.start("animate")
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
        <span
        ref={ref}
        className="trans">
          <motion.span
          variants={transitionVariants}
          initial="initial"
          animate={controllerA}
          transition={{delay: delay,duration: 0.75, ease: 'easeIn'}}>
            {children}
          </motion.span>
        </span>
    );
};
export default Transition3;

