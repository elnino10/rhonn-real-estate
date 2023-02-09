import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import AllProps from "../components/AllProps";
import ImageSlider from "../data/ImageSlider";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import images from "../data/Images";
import rhonn1 from "../assets/images/rhonn1.jpg";
import rhonn2 from "../assets/images/rhonn2.jpg";
import rhonn3 from "../assets/images/rhonn3.jpg";
import rhonn4 from "../assets/images/rhonn4.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Content.module.css";

const Content = (props) => {
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://127.0.0.1:5000/api/properties/");
        if (res) {
          setData(res.data.data);
          setLoading(false);
        }
      };
      fetchData();
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stateSelectHandler = (e) => {
    const value = e.target.value;
    const stateVal = value.toLowerCase();
    setState(stateVal);
  };

  const categorySelectHandler = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  const submitFilteredProp = (e) => {
    e.preventDefault();
    let query = "";
    if (state && !category) query = `?state=${state}`;
    if (category && !state) query = `?category=${category}`;
    if (state && category) query = `?state=${state}&category=${category}`;
    navigate(`/properties_on-listing/${query}`);

    props.onSubmitFilter({ state, category });
    setState("");
    setCategory("");
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
            <option>apartments</option>
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

  if (error) return <h3>Oops Something Went Wrong!</h3>;

  return (
    <>
      <Header headerMsg={headerContent} />
      <div className={classes.content}>
        <div className={classes["welcome-message"]}>
          <h3>WELCOME MESSAGE</h3>
          <p>
            Welcome to Rhonn Real Estate!<br/> We are a real estate company founded
            on the principles of integrity and transparency, and our goal is to
            make the process of leasing and purchasing properties a seamless and
            hassle-free experience for our clients. We understand that buying or
            renting a new home can be a daunting task, and our team of experts
            is dedicated to guiding you every step of the way. Whether you're a
            first-time homebuyer or a seasoned real estate investor, we are here
            to provide you with the support and knowledge you need to make
            informed decisions. With a wide range of properties available and a
            commitment to excellence, Rhonn Real Estate is the smart choice for
            anyone looking to make a move. Browse our website to learn more
            about what we have to offer, and don't hesitate to contact us with
            any questions you may have. We look forward to helping you find your
            dream home!
          </p>
          <div className={classes["message-button"]}>lorem</div>
        </div>
        <div id="property" className={classes["available-props"]}>
          <div className={classes["prop-header"]}>
            <h4>Available Properties</h4>
          </div>
          {loading ? (
            <div className={classes.loading}>
              <LoadingIndicator />
            </div>
          ) : (
            <AllProps data={data} state={state} category={category} />
          )}
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
            <form
              className={classes["search-form"]}
              onSubmit={submitFilteredProp}
            >
              <p>search by</p>
              <select onChange={stateSelectHandler}>
                <option>state</option>
                <option>Lagos state</option>
                <option>Anambra state</option>
                <option>Delta state</option>
                <option>Ebonyi state</option>
                <option>Enugu state</option>
                <option>Imo state</option>
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
