import "./about.css";
import Transition from "../Transition/page";
import Transition2 from "../Trsansition2/page";

const Story = () => {
  return <div>
    <div className="about_main">
        <img src="/story.png" />
    </div>

    <div className="story_container">
        <div className="story_time">
            <Transition>
              <p className="story_header">
              "Where Luxury and Creativity meets spaces"
              </p>
            </Transition>
            <Transition2>
              <p className="story">
               Elevate your home or business space to a World of Prestige and Elegance.
              </p>
            </Transition2>
            <Transition>
              <p className="storyy">Welcome to Rubix Firm!</p>
            </Transition>
            <Transition2>
              <p className="story">
                  Our team of designers and artisans blends innovation and expertise to exceed expectations
                  with each project. Join us in transforming ordinary spaces into extraordinary ones, one
                  design at a time.
              </p>
            </Transition2>
        </div>
    </div>
  </div>;
};
export default Story;
