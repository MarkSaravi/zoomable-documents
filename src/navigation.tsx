import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Article</NavLink>
          <NavLink to="/score">Score</NavLink>
       </div>
    );
};

export default Navigation;
