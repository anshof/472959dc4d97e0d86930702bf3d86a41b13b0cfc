import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

class Home extends React.Component {
  state = {
    show: true,
    scrollPos: 0,
    showCart: false,
  };
  setShowCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };
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
      background-color: #f1f1f2;
      .up-cart {
        position: relative;
        z-index: 4;
        .cart {
          background: #f9423a;
          position: fixed;
          border-radius: 4px;
          margin-top: 650px;
          margin-left: 16px;
          margin-right: 16px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 90px;
          width: 92%;
          height: 70px;
          z-index: 1500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          .left {
            margin-left: 8px;
          }
          .right {
            padding: 0 8px;
          }
          #items {
            margin: 8px 0 0 0;
          }
          #ongkir {
            margin: 0 0 8px 0;
          }
        }
      }
    `;
    const Product = styled.div`
      background-color: #f1f1f2;
      padding: 0 16px;
      .food-one {
        margin-bottom: 16px;
        box-shadow: 0 5px 10px #e2e4e4;
        border-radius: 8px;
        border: 1px solid #e2e4e4;
        background-color: white;
        img {
          width: 100%;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .card-body {
          padding: 16px;
          .star {
            display: flex;
            align-items: center;
            #rating {
              margin-right: 4px;
              font-size: 18px;
              color: #6e7679;
              margin-bottom: 0;
              padding: 2px 0 0 0;
              font-weight: 700;
            }
            #star {
              font-size: 20px;
              color: #f9423a;
            }
          }
          .title {
            #name {
              font-size: 20px;
              color: #424749;
              margin-bottom: 0;
              font-weight: 700;
            }
            #merchant {
              font-weight: 400;
              margin-top: 8px;
              color: #6e7679;
            }
          }
          .price {
            display: flex;
            align-items: center;
            justify-content: space-between;
            #number {
              font-weight: 700;
              color: #424749;
              font-size: 20px;
            }
            .tambah {
              cursor: pointer;
              display: flex;
              align-items: center;
              background-color: #f9423a;
              border-radius: 4px;
              color: white;
              text-transform: uppercase;
              padding: 4px 16px;
              border: 0;
            }
          }
        }
      }
    `;
    return (
      <Utama>
        <Nav>
          <Navbar />
        </Nav>
        <Home>
          <div className="menuu">
            <div className={this.state.show ? "active" : "hidden"}>
              <Menu id="menu" active={"home"} />
            </div>
          </div>
          <div className="main">
            <div className="content">
              <p id="date">Kamis. 13 Maret 2019</p>
            </div>
          </div>
        </Home>
        <Product>
          <div className="food-one">
            <img src={require("../assets/food1.webp")} alt="" />
            <div className="card-body">
              <div className="star">
                <span id="rating">4.5</span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  star_half
                </span>
              </div>
              <div className="title">
                <p id="name">Butter Rice Chicken Teriyaki</p>
                <p id="merchant">by Kulina &middot; Uptown Lunch</p>
              </div>
              <div className="price">
                <span id="number">Rp 35,000</span>
                <button className="tambah" onClick={this.setShowCart}>
                  <span id="add">AdD</span>
                  <span className="material-icons">add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="food-one">
            <img src={require("../assets/food1.webp")} alt="" />
            <div className="card-body">
              <div className="star">
                <span id="rating">4.5</span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  grade
                </span>
                <span id="star" class="material-icons">
                  star_half
                </span>
              </div>
              <div className="title">
                <p id="name">Butter Rice Chicken Teriyaki</p>
                <p id="merchant">by Kulina &middot; Uptown Lunch</p>
              </div>
              <div className="price">
                <span id="number">Rp 35,000</span>
                <button className="tambah" onClick={this.setShowCart}>
                  <span id="add">AdD</span>
                  <span className="material-icons">add</span>
                </button>
              </div>
            </div>
          </div>
        </Product>
        {this.state.showCart ? (
          <div className="up-cart">
            <div className="cart">
              <div className="left">
                <p id="items">
                  <strong> 5 items | Rp 125,000</strong>
                </p>
                <p id="ongkir">Termasuk ongkos kirim</p>
              </div>
              <div className="right">
                <span class="material-icons">shopping_cart</span>
                <span class="material-icons">keyboard_arrow_right</span>
              </div>
            </div>
            <div className="background"></div>
          </div>
        ) : null}
      </Utama>
    );
  }
}

export default Home;
