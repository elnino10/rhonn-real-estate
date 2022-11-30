import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineContacts } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

import classes from "./PropsItem.module.css";

const PropsItem = (props) => {
  // const [data, setData] = useState();
  // const { state, category } = props;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `http://127.0.0.1:5000/?state=${state}&category=${category}`
  //     );
  //     setData(res.data);
  //   };
  //   fetchData();
  // }, [state, category]);
  console.log(props.image);

  return (
    <li key={props.id} className={classes.house}>
      <div className={classes.property}>
        <Link to={`/props/${props.id}`}>
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
        <Link to={`/props/${props.id}`}>
          <span>
            <AiOutlineContacts />
          </span>
          View
        </Link>
      </div>
    </li>
  );
};

export default PropsItem;
