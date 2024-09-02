import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/avatar.css";
import soldier from "../assets/eliza.png";
import eye from "../assets/eye.png";

const Avatar = ({ page }) => {
  useEffect(() => {
    const eyeCircle = (event) => {
      let eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = rad * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    };

    document.querySelector("body").addEventListener("mousemove", eyeCircle);

    return () => {
      document
        .querySelector("body")
        .removeEventListener("mousemove", eyeCircle);
    };
  }, []);

  return (
    <>
      <img src={soldier} alt="avatar pic" className="face" />
      <div className="both-eyes">
        <img src={eye} alt="right eye" className="eye" />
        <img src={eye} alt="left eye" className="eye" />
      </div>
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
