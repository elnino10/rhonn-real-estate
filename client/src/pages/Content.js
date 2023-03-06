import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import ImageSlider from "../data/ImageSlider";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import images from "../data/Images";
import rhonn1 from "../assets/images/rhonn1.jpg";
import rhonn2 from "../assets/images/rhonn2.jpg";
import rhonn3 from "../assets/images/rhonn3.jpg";
import rhonn4 from "../assets/images/rhonn4.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Content.module.css";
import AvailablePropsList from "../components/AvailablePropsList";
import AvailableLandsList from "../components/AvailableLandsList";

const Content = (props) => {
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [landData, setLandData] = useState([]);
  const navigate = useNavigate();

  let baseURL;
  if (process.env.NODE_ENV === "development") {
    baseURL = "http://127.0.0.1:5000";
  }else if (process.env.NODE_ENV === "production") {
    baseURL = "https://rhonnrealestate.com"
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${baseURL}/api/properties/`
        );
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
  }, [baseURL]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${baseURL}/api/lands/`
        );
        if (res) {
          setLandData(res.data.data);
          setLoading(false);
        }
      };
      fetchData();
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }, [baseURL]);

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
    if (category === "land") {
      if (state && category) query = `?state=${state}&category=${category}`;
      if (!state && category) query = `?category=${category}`;
      navigate(`/lands-on-listing/${query}`);
    } else {
      if (category !== "land" && !state) query = `?category=${category}`;
      if (state && category !== "land")
        query = `?state=${state}&category=${category}`;
      navigate(`/properties-on-listing/${query}`);
    }

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
          <h3>Welcome To Rhonn Real Estate!</h3>
          <p>
            We are a real estate company founded on the principles of integrity
            and transparency, and our goal is to make the process of leasing and
            purchasing properties a seamless and hassle-free experience for our
            clients.
          </p>
        </div>

        {/* Properties Section  */}

        <div id="property" className={classes["available-props"]}>
          <div className={classes["prop-header"]}>
            <h4>Available Properties</h4>
          </div>
          {loading ? (
            <div className={classes.loading}>
              <LoadingIndicator />
            </div>
          ) : data ? (
            <AvailablePropsList
              state={state}
              category={category}
              houses={data}
            />
          ) : (
            <h3>No data Found</h3>
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
        </div>

        {/* Lands Section */}

        <div id="property" className={classes["available-props"]}>
          <div className={classes["prop-header"]}>
            <h4>Available Lands</h4>
          </div>
          {loading ? (
            <div className={classes.loading}>
              <LoadingIndicator />
            </div>
          ) : data ? (
            <AvailableLandsList
              state={state}
              category={category}
              lands={landData}
            />
          ) : (
            <h3>No Lands Aailable Now! Please check back later</h3>
          )}
        </div>
        <div className={classes.fliers}>
          <img src={rhonn1} alt="rhonn-flier" />
          <img src={rhonn2} alt="rhonn-flier" />
          <img src={rhonn3} alt="rhonn-flier" />
          <img src={rhonn4} alt="rhonn-flier" />
        </div>

        {/* Image Carousel Section */}

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
