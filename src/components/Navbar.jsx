import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Dates from "./Dates";

const Navbar = () => {
  const Nav = styled.div`
    background-color: white;
    top: 0;
    padding: 4px;
    border-bottom: 1px solid #f1f1f2;
    .top {
      display: flex;
      margin-left: 8px;
      padding-top: 8px;
    }
    span #west {
      color: #424749;
      padding: 0;
    }
    .alamat {
      display: block;
      margin-left: 8px;
      p {
        color: #6e7679;
        text-transform: uppercase;
        font-size: 8px;
        margin: 0 0 4px 0;
      }
      .position {
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        outline-width: 0;
        :active {
          background-color: transparent;
        }
        span {
          color: #424749;
          padding: 0;
        }
        #expand {
          color: #f9234a;
          padding: 0;
        }
      }
    }
    .up-modal {
      position: relative;
      .modal {
        background: white;
        position: fixed;
        border-radius: 10px;
        margin-top: 400px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        .inside-modal {
          margin: 16px;
          .btn {
            display: flex;
            justify-content: flex-end;
            button {
              cursor: pointer;
              right: 0;
              background-color: transparent;
              border: none;
              #close {
                color: #424749;
              }
            }
          }
          p {
            display: block;
          }
        }
      }

      .background {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1040;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        outline: 0;
      }
    }
  `;

  const [showModal, setShowModal] = React.useState(false);

  return (
    <Nav>
      {showModal ? (
        <div className="up-modal">
          <div className="modal">
            <div className="inside-modal">
              <div className="btn">
                <button onClick={() => setShowModal(false)}>
                  <span id="close" class="material-icons">
                    close
                  </span>
                </button>
              </div>
              <Modal />
            </div>
          </div>
          <div className="background"></div>
        </div>
      ) : null}
      {setShowModal}
      <div className="top">
        <span className="material-icons" id="west">
          west
        </span>
        <div className="alamat">
          <p>alamat pengantaran</p>
          <div className="position" onClick={() => setShowModal(true)}>
            <span>Tokopedia Tower</span>
            <span id="expand" className="material-icons">
              expand_more
            </span>
          </div>
        </div>
      </div>
      <div>
        <Dates />
      </div>
    </Nav>
  );
};
export default Navbar;
