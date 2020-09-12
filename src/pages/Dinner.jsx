import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Menu from "../components/Menu";

class Dinner extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  render() {
    const Home = styled.div`
      margin-top: 0;
      position: relative;
      z-index: 0;
      .main {
        padding-top: 70px;
        background-color: #f1f1f2;
        .content {
          padding: 0 16px;
          #date {
            font-weight: 700;
            color: #424748;
            font-size: 20px;
            padding-top: 16px;
            margin-bottom: 16px;
          }
        }
      }
      .menuu {
        margin-top: 0;
        position: fixed;
        z-index: 1;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .active {
          width: 100%;
          background-color: white;
          visibility: visible;
        }
        .hidden {
          width: 100%;
          background-color: white;
          visibility: hidden;
        }
      }
    `;
    const Nav = styled.div`
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      z-index: 5;
      margin-top: 0;
      padding-top: 0;
    `;
    const Utama = styled.div`
      top: 0;
      margin-top: 0;
      padding-top: 0;
    `;
    return (
      <Utama>
        <Nav>
          <Navbar />
        </Nav>
        <Home>
          <div className="menuu">
            <div className={this.state.show ? "active" : "hidden"}>
              <Menu id="menu" active={"dinner"} />
            </div>
          </div>
          <div className="main">
            <div className="content">
              <p id="date">Kamis. 13 Maret 2019</p>
              <Card />
            </div>
          </div>
        </Home>
      </Utama>
    );
  }
}

export default Dinner;
