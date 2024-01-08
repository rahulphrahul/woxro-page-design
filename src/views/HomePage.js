import React from "react";
import banner1 from "../assets/img/banner1.png";
import cardimg1 from "../assets/img/cardimg1.png";
import cardimg2 from "../assets/img/cardimg2.png";
import cardimg3 from "../assets/img/cardimg3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import CloseIcon from "@mui/icons-material/Close";

const HomePage = () => {
  return (
    <>
      <button
        type="button"
        className="btn position-absolute top-0 end-0 m-3 close-button"
        aria-label="Close"
        style={{ color: "white" }}
      >
        <CloseIcon style={{ fontSize: "1.5rem" }} />
      </button>
      <div className="container-fluid bg-black text-white homepage-container">
        <span className="text-center heading">
          Epic Games: An American video game and software developer and
          publisher based in Cary, North Carolina.
        </span>
        <img className="img-fluid" src={banner1} alt="Banner" />
        <p className="p-4 text-center">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator-made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <button className="btn btn-primary btn-lg visitButton">
          Visit Website
        </button>

        <div className="row justify-content-center" style={{ padding: "5%" }}>
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={cardimg1}
                alt="Card 1"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Explore large, destructible environments where no two games
                  are ever the same.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={cardimg2}
                alt="Card 2"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Team up with friends by sprinting, climbing, and smashing your
                  way to earn your Victory Royale
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={cardimg3}
                alt="Card 3"
              />
              <div className="card-body text-center">
                <p className="card-text">
                  Discover even more ways to play across thousands of
                  creator-made game genres
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white" style={{ padding: "5%" }}>
          <h2 className="text-center mb-4">Our Contribution</h2>
          <p className="text-center">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
          <div className="row justify-content-center">
            {/* Part 1 */}
            <div className="col-md-4 mb-4 text-center">
              <div className="display-4">5M</div>
              <div className="h4">Daily User Engagements</div>
            </div>
            {/* Part 2 */}
            <div className="col-md-4 mb-4 text-center">
              <div className="display-4">$500K</div>
              <div className="h4">Revenue Surge for an Platform</div>
            </div>
            {/* Part 3 */}
            <div className="col-md-4 mb-4 text-center">
              <div className="display-4">10X</div>
              <div className="h4">ROAS on all our marketing campaigns</div>
            </div>
          </div>
        </div>

        <div className="text-white" style={{ padding: "5%" }}>
          <h2 className="text-center mb-4">
            Interested in delving deeper into the project?
          </h2>
          <p className="text-center">
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at <b>hello@abc.com</b> or give us a call
            at <b>+91 480 20802730.</b>
          </p>
          <div className="row justify-content-center" style={{ padding: "3%" }}>
            <div className="col-md-6 mb-4 text-center">
              <button className="btn btn-primary btn-lg visitButton2">
                Ring Us on Skype
              </button>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <button className="btn btn-primary btn-lg visitButton">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="text-white" style={{ padding: "5%" }}>
          <h6  className="text-center mb-4">
            © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
          </h6 >
        </div>
      </div>
    </>
  );
};

export default HomePage;
