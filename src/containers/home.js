import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="home">
      <div>
    Welcome to Eun Kyung Yoon Website.
      </div>
      <div>
    It is still under construction!!
      </div>
      <br />
      <img src="https://media.giphy.com/media/w4i8moDZl9By8/giphy.gif" alt="Under Construction" />
      <NavLink to="/trio" exact>Trio</NavLink>
    </div>
  );
};

export default Home;
