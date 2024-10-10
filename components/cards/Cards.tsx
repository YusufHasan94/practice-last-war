import classNames from "classnames";
import Link from "next/link";
import React from "react";



import "./Cards.css";
import Artifact from "../Artifact/Artifact";

export const Card = ({ artifact, headingLevel, link, title, description }) => {
  const CardElement = link ? Link : "div";

  return (
    <CardElement
      className={classNames({ "msrd-Card": true, ["msrd-Card--link"]: link })}
      href={link}
    >
      <div className="msrd-Card-artifact">
        <Artifact>{artifact}</Artifact>
      </div>
      <h1>
        {title}
      </h1>
      <hr />
      <p>{description}</p>
    </CardElement>
  );
};

const Cards = ({ children }) => <div className="msrd-Cards">{children}</div>;

export default Cards;
