import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

import classes from "./LandItem.module.css";

const LandItem = (props) => {
  return (
    <li key={props.id} className={classes.land}>
      <div className={classes.property}>
        <Link to={`/lands/${props.id}`}>
          <img src={props.image} alt="pic" />
        </Link>
      </div>
      <div className={classes["property-desc"]}>
        <h4>{props.name}</h4>
        <div>
          <span>
            <CiLocationOn />
          </span>
          <p>{props.location}</p>
        </div>
      </div>
      <div className={classes["property-actions"]}>
        <Link to={`/lands/${props.id}`}>
          <span>
            <AiOutlineContacts />
          </span>
          View
        </Link>
      </div>
    </li>
  );
};

export default LandItem;
