import React, { useEffect, useState } from "react";
import axios from "axios";
// import $ from "jquery";

import Header from "../components/Header";
import AllProps from "../components/AllProps";
import ImageSlider from "../data/ImageSlider";
import images from "../data/Images";
import rhonn1 from "../assets/images/rhonn1.jpg";
import rhonn2 from "../assets/images/rhonn2.jpg";
import rhonn3 from "../assets/images/rhonn3.jpg";
import rhonn4 from "../assets/images/rhonn4.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Content.module.css";
import { Link, useNavigate } from "react-router-dom";

// import PropsData from "../data/PropsData";

const Content = () => {
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://127.0.0.1:5000/api/properties/")
      if (res) setData(res.data.data)
      // console.log(res.data.data)
    }
    fetchData()
  }, []);

  const stateSelectHandler = (e) => {
    const value = e.target.value;
    setState(value);
  };

  const categorySelectHandler = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  const submitFilteredProp = (e) => {
    e.preventDefault();
    if (state && category) {
      navigate("/properties_on-listing")
    }
  };

  const headerContent = (
    <div className={classes.body}>
      <div className={classes["welcome-header"]}>
        <h1>RHONN REAL ESTATE</h1>
        <h4>lorem ipsum</h4>
      </div>
      <div className={classes["welcome-form"]}>
        <form onSubmit={submitFilteredProp}>
          <select onChange={stateSelectHandler}>
            <option>Search by state</option>
            <option>Lagos state</option>
            <option>Enugu state</option>
            <option>Anambra state</option>
            <option>Ebonyi state</option>
          </select>
          <select onChange={categorySelectHandler}>
            <option>Category</option>
            <option>land</option>
            <option>fully-detached</option>
            <option>semi-detached</option>
            <option>terrace</option>
            <option>commercial properties</option>
            <option>others</option>
          </select>
          <button type="submit">
            <span>
              <AiOutlineSearch />
            </span>{" "}
            find property
          </button>
        </form>
      </div>
    </div>
  );

  window.scrollTo(0, 0);

  // if (window.location.hash !== "" && window.location.hash !== "#") {
  //   let target = window.location.hash;
  //   if ($(target).length) {
  //     return;
  //   }
  //   $("html, body").animate({
  //     scrollTop: $(target).offset().top,
  //   });
  // }

  return (
    <>
      <Header headerMsg={headerContent} />
      <div className={classes.content}>
        <div className={classes["welcome-message"]}>
          <h3>WELCOME MESSAGE</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className={classes["message-button"]}>lorem</div>
        </div>
        <div id="property" className={classes["available-props"]}>
          <div className={classes["prop-header"]}>
            <h4>Available Properties</h4>
          </div>
          <AllProps data={data} state={state} category={category} />
        </div>
        <div className={classes["other-props"]}>
          <h3>Other Properties</h3>
          <div className={classes["props-inner"]}>
            <article>
              <div className={classes.article}>
                <div className={classes["article-date"]}>
                  <p>20</p>
                  <span>Sept</span>
                </div>
                <h4>Lorem Ipsum</h4>
                <div className={classes["article-detail"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                {/* <div className={classes["detail-button"]}>
                  <a>Details</a>
                </div> */}
              </div>
            </article>
            <article>
              <div className={classes.article}>
                <div className={classes["article-date"]}>
                  <p>20</p>
                  <span>Sept</span>
                </div>
                <h4>Lorem Ipsum</h4>
                <div className={classes["article-detail"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                {/* <div className={classes["detail-button"]}>
                  <a>Details</a>
                </div> */}
              </div>
            </article>
            <article>
              <div className={classes.article}>
                <div className={classes["article-date"]}>
                  <p>20</p>
                  <span>Sept</span>
                </div>
                <h4>Lorem Ipsum</h4>
                <div className={classes["article-detail"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                {/* <div className={classes["detail-button"]}>
                  <a>Details</a>
                </div> */}
              </div>
            </article>
          </div>
          <div className={classes["article-view"]}>
            <Link to="#">View More</Link>
          </div>
        </div>
        <div className={classes.fliers}>
          <img src={rhonn1} alt="rhonn-flier" />
          <img src={rhonn2} alt="rhonn-flier" />
          <img src={rhonn3} alt="rhonn-flier" />
          <img src={rhonn4} alt="rhonn-flier" />
        </div>
        <div className={classes.slider}>
          <ImageSlider images={images} />
        </div>
        <div className={classes.awareness}>
          <div className={classes["awareness-logo"]}>
            <h2>Rhonn Real Estate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className={classes["awareness-info"]}>
            <Link>
              <span>&#10148;</span>more information
            </Link>
          </div>
          <div className={classes["awareness-search"]}>
            <form className={classes["search-form"]}>
              <p>search by state</p>
              <select>
                <option>Lagos</option>
                <option>Anambra</option>
                <option>Delta</option>
                <option>Ebonyi</option>
                <option>Enugu</option>
                <option>Imo</option>
              </select>
              <button>submit</button>
            </form>
          </div>
        </div>
        <div className={classes.motto}>
          <h1>You Can't Go Wrong With Rhonn</h1>
          <div>Contact Us</div>
        </div>
      </div>
    </>
  );
};

export default Content;
