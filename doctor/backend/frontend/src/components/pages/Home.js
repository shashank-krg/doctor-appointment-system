import React from 'react';
import Header from './homePagesComponents/Header';
import FeatureItem from './homePagesComponents/FeatureItem';
import './Home.css';

const Home = () => {
  return (
    <div id="main-home-page">
      <Header />
      <section className="header-bottom-content-aria">
        <div className="container">
          <div className="row pr-4 mr-4">
            <FeatureItem
              icon="query_builder"
              title="Morning Hours"
              extraClass="home-primary"
              subTitle="09:00 Am - 02:00 Pm" />
            <FeatureItem
              extraClass="home-location"
              icon="query_builder"
              title="Evening Hours"
              subTitle="05:30 Pm - 08:30 Pm" />
            <FeatureItem
              extraClass="home-primary"
              icon="add_ic_call"
              title="Contact Us Now"
              subTitle="+91-9304219693" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;