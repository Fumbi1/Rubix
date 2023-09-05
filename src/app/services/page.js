import Transition from "../Transition/page";
import Pointer from "../contactpointer/page";
import "./services.css"
const Services = () => {
  return <div>
    <Transition />
    <main>
      <div className="service_main">
        <div className="service_tag">
          <p className="tag_title">Services</p>
          <p className="tag_route">Home/Services</p>
        </div>
      </div>

      <div className="service_container">
        <div className="service_list">
          <div className="service_content2">
            <p className="service_title"> Consultation (Interiors & Art)</p>
            <p className="service_desc"> With our conception and implementation service, our skilled designers 
            will collaborate with you to conceptualize innovative and personalized interior designs that suit your preferences and needs.
            </p>
          </div>

          <div className="service_content">
            <p className="service_title">Conception and Implementation</p>
            <p className="service_desc">Our team brings your ideas to life by creating personalized 
            designs, managing every aspect, and coordinating with contractors and suppliers for a stunning result.</p>
          </div>

          <div className="service_content2">
            <p className="service_title">Renovation</p>
            <p className="service_desc">
            Our Renovation services transform outdated 
            spaces into modern, visually appealing areas. Our comprehensive management covers structural modifications, 
            aesthetics, and skilled trades coordination, exceeding expectations and reflecting personal style.
            </p>
          </div>

          <div className="service_content">
            <p className="service_title">Project Management</p>
            <p className="service_desc">
            We oversee all project aspects, ensuring 
            efficiency and quality. Experienced managers liaise with suppliers, contractors, and artisans for 
            timely, budget-conscious, and high-quality results, ensuring your satisfaction.
            </p>
          </div>

          <div className="service_content2">
            <p className="service_title">Procurement / Personal interior Shopper</p>
            <p className="service_desc">
              Our team offers a wide 
              range of options, aligning with your aesthetic and budget. We help select furniture, lighting, 
              flooring, and accessories to enhance your space, prioritizing sustainability and ethical sourcing.
            </p>
          </div>
        </div>
      </div>


      <div className="workflow_container">
        <div className="workflow">
          <p className="workflow_header">
            How We Work
          </p>
          <p className="workflow_desc">
            A short yet detailed flowchart of how we offer the best services
          </p>

          <div className="workflow_a">
            <div className="workflow_img">
              <img src="/icon1.png" alt=""/>
            </div>
            <div className="workflow_div">
              <p  className="workflow_title">
                Concept & Details
              </p>
              <p className="workflow_guide">
              After the initial consultation, we create a detailed project proposal, outlining scope, services, 
              costs, and style preferences in collaboration with the customer. 
              </p>
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/icon2.png" alt=""/>
            </div>
            <div className="workflow_div">
              <p  className="workflow_title">
                Idea for Work
              </p>
              <p className="workflow_guide">
              We collect customer feedback on design concepts and iterate until satisfaction.
              </p>
            </div>
          </div>
          <div className="workflow_a">
            <div className="workflow_img">
              <img src="/icon3.png" alt=""/>
            </div>
            <div className="workflow_div">
              <p  className="workflow_title">
                Design
              </p>
              <p className="workflow_guide">
              We guide material and element selection, manage project implementation for quality, timeline, 
              and budget adherence.
              </p>
            </div>
          </div>
          <div className="workflow_c">
            <div className="workflow_img">
              <img src="/icon4.png" alt=""/>
            </div>
            <div className="workflow_div">
              <p  className="workflow_title">
                Completion
              </p>
              <p className="workflow_guide">
              We conduct a final walkthrough for customer satisfaction, provide documentation and warranties, 
              and aim for future collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pointer />
    </main>
  </div>;
};
export default Services;
