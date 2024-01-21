'use client'
import Pointer from "../contactpointer/page";
import "./services.css"
import { motion } from "framer-motion";
import Transition from "../Transition/page";
import Transition2 from "../Trsansition2/page";



const Services = () => {
  return <div>
    <main>
      <div className="service_main">
        <img src="/service.png" alt="" />
      </div>

      <div className="service_container">
        <div className="service_list">
          <motion.div className="service_content2"
            transition={{
              duration: 5,
              repeat: Infinity,
              yoyo: Infinity,
            }}
            animate={{
              background: ["#FFF","#F4F0EC","#FAF9F6", "#F4F0EC", "#FFF"],
            }}
          >
            <Transition>
              <p className="service_title"> Consultation (Interiors & Art)</p>
            </Transition>
            <Transition2>
              <p className="service_desc"> Our skilled designers
              will collaborate with you to conceptualize innovative and personalized interior designs that suit your preferences and needs.
              </p>
            </Transition2>
          </motion.div>

          <motion.div className="service_content"
          transition={{
            duration: 5,
            repeat: Infinity,
            yoyo: Infinity,
          }}
          animate={{
            background: ["#FAF9F6","#F4F0EC","#FFF", "#F4F0EC", "#FAF9F6"],
          }}
          >
            <Transition>
              <p className="service_title">Conception and Implementation</p>
            </Transition>
            <Transition2>
              <p className="service_desc">Our team brings your ideas to life by creating personalized
              designs, managing every aspect, and coordinating with contractors and suppliers for a stunning result.</p>
            </Transition2>
          </motion.div>

          <motion.div className="service_content2"
          transition={{
            duration: 5,
            repeat: Infinity,
            yoyo: Infinity,
          }}
          animate={{
            background: ["#FFF","#F4F0EC","#FAF9F6", "#F4F0EC", "#FFF"],
          }}
          >
            <Transition>
              <p className="service_title">Renovation</p>
            </Transition>
            <Transition2>
              <p className="service_desc">
              Our Renovation services transform outdated
              spaces into modern, visually appealing areas. Our comprehensive management covers structural modifications,
              aesthetics, and skilled trades coordination, exceeding expectations and reflecting personal style.
              </p>
            </Transition2>
          </motion.div>

          <motion.div className="service_content"
          transition={{
            duration: 5,
            repeat: Infinity,
            yoyo: Infinity,
          }}
          animate={{
            background: ["#FAF9F6","#F4F0EC","#FFF", "#F4F0EC", "#FAF9F6"],
          }}
          >
            <Transition>
              <p className="service_title">Project Management</p>
            </Transition>
            <Transition2>
              <p className="service_desc">
              We oversee all project aspects, ensuring
              efficiency and quality. Experienced managers liaise with suppliers, contractors, and artisans for
              timely, budget-conscious, and high-quality results, ensuring your satisfaction.
              </p>
            </Transition2>
          </motion.div>

          <motion.div className="service_content2"
          transition={{
            duration: 5,
            repeat: Infinity,
            yoyo: Infinity,
          }}
          animate={{
            background: ["#FFF","#F4F0EC","#FAF9F6", "#F4F0EC", "#FFF"],
          }}
          >
            <Transition>
              <p className="service_title">Procurement / Personal interior Shopper</p>
            </Transition>
            <Transition2>
              <p className="service_desc">
                Our team offers a wide
                range of options, aligning with your aesthetic and budget. We help select furniture, lighting,
                flooring, and accessories to enhance your space, prioritizing sustainability and ethical sourcing.
              </p>
            </Transition2>
          </motion.div>
        </div>
      </div>


      <div className="workflow_container">
        <div className="workflow">
          <Transition>
            <p className="workflow_header">
              How We Work
            </p>
          </Transition>
          <Transition2>
            <p className="workflow_desc">
              A short yet detailed flowchart of how we offer the best services
            </p>
          </Transition2>

          <div className="workflow_a">
            <div className="workflow_img">
              <img src="/ico1.svg" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Client Consultation, Space Inspection and Analysis
                </p>
              </Transition>
              
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/ico2.svg" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Project Proposal and Design Concept
                </p>
              </Transition>
              
            </div>
          </div>
          <div className="workflow_a">
            <div className="workflow_img">
              <img src="/ico3.svg" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Material Selection and Procurement
                </p>
              </Transition>
            
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/ico4.svg" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Project Execution and Management
                </p>
              </Transition>
              
            </div>
          </div>
        </div>
      </div>

      <Pointer />
    </main>
  </div>;
};
export default Services;
