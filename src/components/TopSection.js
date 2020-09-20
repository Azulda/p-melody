import React from "react";
import "./TopSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function TopSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__top-section" : "home__top-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__top-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__top-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__top-subtitle"
                      : "home__top-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__top-img-wrapper">
                <img src={img} alt={alt} className="home__top-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSection;
