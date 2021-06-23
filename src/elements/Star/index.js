import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Star({ value, height, width, spacing, className }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPost = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPost = leftPost + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPost,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }
  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div className={["stars", className].join(" ")}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.protoTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number,
};
