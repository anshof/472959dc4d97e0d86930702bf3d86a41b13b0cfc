import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const Menu = styled.div`
    padding: 0;
    magin: 0;
    #food {
      display: flex;
      justify-content: center;
      margin: 16px;
      background-color: white;
      .menu {
        padding: 16px;
        font-size: 20px;
        width: 100%;
        color: #e2e4e4;
        text-align: center;
        text-decoration: none;
      }
      .lunch {
        border-radius: 16px 0 0 16px;
        border-top: 2px solid #e2e4e4;
        border-left: 2px solid #e2e4e4;
        border-bottom: 2px solid #e2e4e4;
      }
      .dinner {
        border-radius: 0 16px 16px 0;
        border-top: 2px solid #e2e4e4;
        border-right: 2px solid #e2e4e4;
        border-bottom: 2px solid #e2e4e4;
      }
    }
  `;

  return (
    <Menu>
      <div id="food">
        <Link
          to="/"
          className="menu lunch"
          style={{
            color: props.active !== "home" ? "#6e7679" : "white",
            backgroundColor: props.active !== "home" ? "white" : "#424749",
          }}
        >
          Lunch
        </Link>
        <Link
          to="/dinner"
          className="menu dinner"
          style={{
            color: props.active !== "dinner" ? "#6e7679" : "white",
            backgroundColor: props.active !== "dinner" ? "white" : "#424749",
          }}
        >
          Dinner
        </Link>
      </div>
    </Menu>
  );
};
export default Menu;
