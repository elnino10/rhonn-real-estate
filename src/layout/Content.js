import React from "react";

import Header from "./Header";
import ImageSlider from "./ImageSlider";
import images from "./Images";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

import house from "../assets/images/house.jpg";
import classes from "./Content.module.css";

const Content = () => {

  return (
    <div className={classes.app}>
      <Header />
      <section className={classes.body}>
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
          <div className={classes.houses}>
            <div className={classes.house}>
              <div className={classes.property}>
                <img src={house} alt="pic" />
              </div>
              <div className={classes["property-desc"]}>
                <h4>House specifications</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className={classes["property-actions"]}>
                <a href="#">
                  <i>&#64;</i>View
                </a>
                <p>
                  <span>&#128197;</span>last update
                </p>
              </div>
            </div>
            <div className={classes.house}>
              <div className={classes.property}>
                <img src={house} alt="pic" />
              </div>
              <div className={classes["property-desc"]}>
                <h4>House specifications</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className={classes["property-actions"]}>
                <a href="#">
                  <i>&#64;</i>View
                </a>
                <p>
                  <span>&#128197;</span>last update
                </p>
              </div>
            </div>
            <div className={classes.house}>
              <div className={classes.property}>
                <img src={house} alt="pic" />
              </div>
              <div className={classes["property-desc"]}>
                <h4>House specifications</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className={classes["property-actions"]}>
                <a href="#">
                  <i>&#64;</i>View
                </a>
                <p>
                  <span>&#128197;</span>last update
                </p>
              </div>
            </div>
            <div className={classes.house}>
              <div className={classes.property}>
                <img src={house} alt="pic" />
              </div>
              <div className={classes["property-desc"]}>
                <h4>House specifications</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className={classes["property-actions"]}>
                <a href="#">
                  <i>&#64;</i>View
                </a>
                <p>
                  <span>&#128197;</span>last update
                </p>
              </div>
            </div>
          </div>
          <div className={classes["property-view"]}>
            <a>View More</a>
          </div>
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
                <div className={classes["detail-button"]}>
                  <a>Details</a>
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
                <div className={classes["detail-button"]}>
                  <a>Details</a>
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
                <div className={classes["detail-button"]}>
                  <a>Details</a>
                </div>
              </div>
            </article>
          </div>
          <div className={classes["article-view"]}>
            <a>View More</a>
          </div>
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
            <a>
              <span>&#10148;</span>more information
            </a>
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
        <AboutUs />
        <ContactUs />
      </section>
    </div>
  );
};

export default Content;
