import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image-4.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.prototype = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
