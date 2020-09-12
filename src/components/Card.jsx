import React from "react";
import styled from "styled-components";

const Card = () => {
  const Card = styled.div`
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
            border-radius: 8px;
            color: white;
            text-transform: uppercase;
            padding: 4px 8px;
            border: 0;
          }
        }
      }
    }
  `;

  // const data=[
  //   {
  //     image:require("../assets/food1.webp"),
  //     name:'Butter Rice Chicken Teriyaki',
  //     merchant:'Kulina',
  //     Location:'Uptown Lunch',
  //     price:'35,000'
  // }
  // ]
  // const [showModal, setShowModal] = React.useState(false);

  return (
    <Card>
      {/* {showModal ? ( */}
      {/* <div className="up-cart">
        <div className="cart">
          <div className="inside-cart">
            <div className="btn">
              <button */}
      {/* onClick={() => setShowModal(false)}
              > */}
      {/* <span id="close" class="material-icons">
                  close
                </span>
              </button>
            </div>
            <p>ulululu</p>
          </div>
        </div>
        <div className="background"></div>
      </div> */}
      {/* ) : null}
      {setShowModal} */}
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
            <div
              classname="tambah"
              // onClick={() => setShowModal(true)}
            >
              <span id="add">ADD</span>
              <span class="material-icons">add</span>
            </div>
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
            <button>
              <span id="add">ADD</span>
              <span class="material-icons">add</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Card;
