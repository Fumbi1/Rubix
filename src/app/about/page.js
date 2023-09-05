import "./about.css";
import Transition from "../Transition/page";

const Story = () => {
  return <div>
    <Transition />
    <div className="about_main">
        <div className="about_tag">
            <p className="abouttag_title">Our Story</p>
            <p className="abouttag_route">Home/Our Story</p>
        </div>
    </div>

    <div className="story_container">
        <div className="story_time">
            <p className="story_header">
            "Where Luxury and Creativity meets spaces"
            </p>
            <p className="story">
             Elevate your home or business space to a World of Prestige and Elegance.
            </p>
            <p className="storyy">Welcome to Rubix Firm!</p>
            <p className="story">
                Our team of designers and artisans blends innovation and expertise to exceed expectations
                with each project. Join us in transforming ordinary spaces into extraordinary ones, one
                design at a time.
            </p>
        </div>
    </div>
  </div>;
};
export default Story;
