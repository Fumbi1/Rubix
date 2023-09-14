"use client"
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import "./wait.css"
import Transition from "../Transition/page";


const WaitList = () => {

  const form = useRef();
  const routes = useRouter();
  const [disabled, setDisabled] = React.useState(false);

  const FormHandler = (e) => {
    e.preventDefault();
    setDisabled(true);
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
                title: "You've joined the waitlist!",
                text: "You'd be redirected to the home page",
                icon: "success",
                confirmButtonText: "Okay",
                background: "#fde9e2",
                color: "#A52A2A",
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
                background: "#fde9e2",
                color: "#A52A2A",
                timer: 3250,
            });

          console.log(error.text);
        }
    );
    setDisabled(false);
  };

  return <div>
    <Transition>
      <form ref={form} onSubmit={FormHandler}>
      <p className="form_header">
         Join the Waitlist
      </p>
      <div className="form_div2">
              <label for="" className="form_opt_title2">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                className="form_ans2"
                placeholder=""
      
                required
              />
            </div>
            <div className="form_div2">
              <label for="" className="form_opt_title2">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="form_ans2"
      
                placeholder=""
                required
              />
            </div>
            <button type="submit" disabled={disabled} className="contact_btn2">
              Join Now!
            </button>
      </form>
    </Transition>
  </div>;
};
export default WaitList;
