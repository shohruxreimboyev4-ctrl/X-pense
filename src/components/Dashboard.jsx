import React from "react";
import overviewImg from "../assets/img/overview.png";
import facebook from "../assets/svg/facebook.svg";
import google from "../assets/svg/google.svg";
import cocaCola from "../assets/svg/cocacola.svg";
import linkedin from "../assets/svg/linkedin.svg";
import samsung from "../assets/svg/samsung.svg";

const Dashboard = () => {
  return (
    <section className="overview">
      <div className="container">
        <div className="overview_image">
          <img src={overviewImg} alt="Overview dashboard" />
        </div>

        <div className="brand_logos">
          <img src={facebook} alt="Facebook" />
          <img src={google} alt="Google" />
          <img src={cocaCola} alt="CocaCola" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={samsung} alt="Samsung" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
