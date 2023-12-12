"use client";
import "./contactt.css";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import Transition from "../Transition/page";

const Contact = () => {
  const form = useRef();
  const routes = useRouter();

  const [inputTag, setInputTag] = React.useState(true);
  const [inputTag2, setInputTag2] = React.useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");

  const check = () => {
    setInputTag(false);
  };

  const check2 = (e) => {
    setInputTag(true);
    setInputValue("");
  };

  const check3 = () => {
    setInputTag2(false);
  };

  const check4 = () => {
    setInputTag2(true);
    setInputValue2("");
  };

  const clear = (e) => {
    setInputValue(e.target.value);
  };
  
  const clear2 = (e) => {
    setInputValue2(e.target.value);
  };

//This is to console.log the form content
  const [details, setDetails] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    project: "",
    project_other: "",
    project2: "",
    project2_other: "",
    preference: "",
    start: "",
    budget: "",
  });

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const FormHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lv8c6x6",
        "template_uf85ab8",
        form.current,
        "_I1DfZ2tqQXdJosZ7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );

    emailjs
      .sendForm(
        "service_lv8c6x6",
        "template_bcf56ko",
        form.current,
        "_I1DfZ2tqQXdJosZ7"
      )
      .then(
        (result) => {  
            Swal.fire({
                title: "Service booked!",
                text: "You'd be redirected to the home page",
                icon: "success",
                confirmButtonText: "Okay",
                background: "#A52A2A",
                color: "white",
                timer: 1250,
            });
            setTimeout(() => {
                routes.push("/");
            }, 1000);

          console.log(result.text);
        },
        (error) => {
            Swal.fire({
                title: "There was an Error!",
                text: "Kindly try again",
                icon: "error",
                confirmButtonText: "Okay",
                background: "#A52A2A",
                color: "white",
                timer: 3250,
            });

          console.log(error.text);
        }
    );
    // console.log(details);
  };

  return (
    <div>
      <Transition>

        
        <motion.form ref={form}
        transition={{
          duration: 5,
          repeat: Infinity,
          yoyo: Infinity,
        }}
        animate={{
          
          filter: ["brightness(90%)", "brightness(97.5%)", "brightness(90%)"]
        }}
        >
          <p className="form_header">
            Have or need a creative project?  <br />Let's have a productive talk.
          </p>
          <div className="form_div">
            <label for="" className="form_opt_title">
              Full Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              className="form_ans"
              placeholder="John Wesley"
        
              required
            />
          </div>
          <div className="form_div">
            <label for="" className="form_opt_title">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              name="number"
              className="form_ans"
        
              placeholder=""
              required
            />
          </div>
          <div className="form_div">
            <label for="" className="form_opt_title">
              Email Address
            </label>
            <br />
            <input
              type="email"
              name="email"
              className="form_ans"
        
              placeholder=""
              required
            />
          </div>
          
          <div className="form_div">
            <fieldset>
              <legend for="" className="form_opt_title">
                Type of Project
              </legend>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt1"
                value="Residential Space"
        
                onChange={check2}
                name="project"
                required
              />
              <label className="radio_title" for="opt1">
                Residential Space
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt2"
                value="Commercial Space"
        
                onChange={check2}
                name="project"
                required
              />
              <label className="radio_title" for="opt2">
                Commercial Space
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt3"
                value="Other"
        
                onChange={check}
                name="project"
                required
              />
              <label className="radio_title" for="opt3">
                Others
              </label>
              <input
                type="text"
                id="opt3"
                name="project_other"
                className="form_ans"
                onChange={clear}
                placeholder="Choose 'Others' to access"
                value={inputValue}
                disabled={inputTag}
                required
              />
            </fieldset>
          </div>
          <div className="form_div">
            <fieldset>
              <legend for="" className="form_opt_title">
                Scope of Project
              </legend>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt4"
                value="Residential Space"
        
                name="project2"
                onChange={check4}
                required
              />
              <label className="radio_title" for="opt4">
                Renovation
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt5"
                value="New Construction"
        
                name="project2"
                onChange={check4}
                required
              />
              <label className="radio_title" for="opt5">
                New Construction
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt6"
                value="Furnishing and Styling"
        
                name="project2"
                onChange={check4}
                required
              />
              <label className="radio_title" for="opt6">
                Furnishing and Styling
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt7"
                value="3D design"
        
                name="project2"
                onChange={check4}
                required
              />
              <label className="radio_title" for="opt7">
                3D design
              </label>
              <br />
              <input
                type="radio"
                className="radio_tag"
                id="opt8"
                value="Other2"
        
                name="project2"
                onChange={check3}
                required
              />
              <label className="radio_title" for="opt6">
                Others
              </label>
              <input
                type="text"
                disabled={inputTag2}
                name="project2_other"
        
                value={inputValue2}
                placeholder="Choose 'Others' to access"
                onChange={clear2}
                className="form_ans"
                id="opt8"
                required
              />
            </fieldset>
          </div>
          <div className="form_div">
            <label for="" className="form_opt_title">
              Brief detail about the Project
            </label>
            <br />
            <textarea
              rows="4"
              cols="40"
              name="preference"
              className="form_ans"
        
              placeholder=""
              required
            />
          </div>

          <div className="form_div">
            <label for="" className="form_opt_title">
              Project Address
            </label>
            <br />
            <input
              type="location"
              name="address"
              className="form_ans"
        
              placeholder=""
              required
            />
          </div>

          <div className="form_div">
            <label for="" className="form_opt_title">
              When you will like the project to start
            </label>
            <br />
            <input
              type="date"
              name="start"
              className="form_ans"
        
              placeholder=""
              required
            />
          </div>
          <div className="form_div">
            <label for="" className="form_opt_title">
              Budget for this Project (NGN)
            </label>
            <br />
            <input
              type="text"
              name="budget"
              className="form_ans"
        
              placeholder="e.g, 1,500,000"
              required
            />
          </div>
          <button type="submit" className="contact_btn">
            Schedule a Consultation
          </button>
        </motion.form>
      </Transition>
    </div>
  );
};

export default Contact;
