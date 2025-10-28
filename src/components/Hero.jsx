import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_content">
          <h1 className="hero_title">
            Track your <br />
            Expenses & <br />
            Save Money
          </h1>
          <p className="hero_subtitle">
            Helps you to organize your income and expenses
          </p>
          <div className="hero_cta">
            <button className="hero_btn">
              Try free demo <span className="hero_arrow">▼</span>
            </button>
            <span className="hero_platforms">— Web, iOS and Android</span>
          </div>
        </div>

        <div className="hero_image">
          <img src="/assets/img/illustration.png" alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
