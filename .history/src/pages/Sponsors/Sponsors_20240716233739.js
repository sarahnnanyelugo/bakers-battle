import React from "react";
import "./sponsors.scss";
export const Sponsors = () => {
  return (
    <>
      <div className="sponsor-div">
        <div className="offset-md-7">
          {" "}
          <h1>MEET OUR SPONSORS</h1>
        </div>
      </div>
      <div className="col-md-12 sponsors-div">
        <center>
          <h2>Our Sponsors</h2>
        </center>
        <div className="col-md-10 offset-md-1  d-md-flex row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          <Link
            className="col"
            target="_blank"
            to={
              "https://www.instagram.com/straightstreetbakery?igsh=MWdvdGg4eWx0eWYycA=="
            }
          >
            <div className="sponsors">
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor1}
                  alt="Scholar"
                  width="80%"
                />
              </center>
            </div>
          </Link>
          <Link
            className="col"
            target="_blank"
            to={"https://www.instagram.com/sleeknigeria?igsh=d2xpeTNkaTVuNW5o"}
          >
            <div className="sponsors">
              <br />
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor2}
                  alt="Scholar"
                  width="95%"
                />
              </center>
            </div>
          </Link>
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor3}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor4}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>{" "}
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor5}
                  alt="Scholar"
                  width="100%"
                />
              </center>
            </div>
          </div>{" "}
          <div className="col">
            <div className="sponsors">
              {" "}
              <center>
                {" "}
                <img
                  className="img  offset-md-"
                  src={Sponsor6}
                  alt="Scholar"
                  width="50%"
                />
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
