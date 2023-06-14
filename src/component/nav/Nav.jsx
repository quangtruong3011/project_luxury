import React, { useState } from "react";

const Nav = () => {
  const [showRooms, setShowRooms] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);

  return (
    <nav>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li onMouseEnter={() => setShowRooms(true)} onMouseLeave={() => setShowRooms(false)}>
          <a href="#">Room</a>
          {showRooms &&
            <ul className="sub-menu">
              <li><a href="#">Room 1</a></li>
              <li><a href="#">Room 2</a></li>
              <li><a href="#">Room 3</a></li>
            </ul>
          }
        </li>
        <li onMouseEnter={() => setShowRestaurants(true)} onMouseLeave={() => setShowRestaurants(false)}>
          <a href="#">Restaurant</a>
          {showRestaurants &&
            <ul className="sub-menu">
              <li><a href="#">Restaurant 1</a></li>
              <li><a href="#">Restaurant 2</a></li>
              <li><a href="#">Restaurant 3</a></li>
            </ul>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
