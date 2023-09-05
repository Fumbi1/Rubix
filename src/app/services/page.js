
import Pointer from "../contactpointer/page";
import "./services.css"
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
          <div className="service_content2">
            <Transition>
              <p className="service_title"> Consultation (Interiors & Art)</p>
            </Transition>
            <Transition2>
              <p className="service_desc"> Our skilled designers
              will collaborate with you to conceptualize innovative and personalized interior designs that suit your preferences and needs.
              </p>
            </Transition2>
          </div>

          <div className="service_content">
            <Transition>
              <p className="service_title">Conception and Implementation</p>
            </Transition>
            <Transition2>
              <p className="service_desc">Our team brings your ideas to life by creating personalized
              designs, managing every aspect, and coordinating with contractors and suppliers for a stunning result.</p>
            </Transition2>
          </div>

          <div className="service_content2">
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
          </div>

          <div className="service_content">
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
          </div>

          <div className="service_content2">
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
          </div>
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
              <img src="/icon1.png" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Concept & Details
                </p>
              </Transition>
              <Transition2>
                <p className="workflow_guide">
                After the initial consultation, we create a detailed project proposal, outlining scope, services,
                costs, and style preferences in collaboration with the customer.
                </p>
              </Transition2>
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/icon2.png" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Idea for Work
                </p>
              </Transition>
              <Transition2>
                <p className="workflow_guide">
                We collect customer feedback on design concepts and iterate until satisfaction.
                </p>
              </Transition2>
            </div>
          </div>
          <div className="workflow_a">
            <div className="workflow_img">
              <img src="/icon3.png" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Design
                </p>
              </Transition>
              <Transition2>
                <p className="workflow_guide">
                We guide material and element selection, manage project implementation for quality, timeline,
                and budget adherence.
                </p>
              </Transition2>
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/icon4.png" alt=""/>
            </div>
            <div className="workflow_div">
              <Transition>
                <p  className="workflow_title">
                  Completion
                </p>
              </Transition>
              <Transition2>
                <p className="workflow_guide">
                We conduct a final walkthrough for customer satisfaction, provide documentation and warranties,
                and aim for future collaborations.
                </p>
              </Transition2>
            </div>
          </div>
        </div>
      </div>

      <Pointer />
    </main>
  </div>;
};
export default Services;
