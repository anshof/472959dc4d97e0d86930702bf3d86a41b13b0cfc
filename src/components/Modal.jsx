import React from "react";
import styled from "styled-components";

const Modal = () => {
  const Modal = styled.div`
    p #title {
      color: #424748;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.6;
    }
    .input-div {
      width: 100%;
      display: flex;
      border: 1px solid #f1f1f2;
      border-radius: 8px;
      align-items: center;
      span {
        color: #f9234a;
        margin: 0 5px;
      }
      input {
        padding: 8px;
        border: none;
        width: 95%;
        height: 25px;
        background-color: transparent;
      }
      input::placeholder {
        font-size: 16px;
      }
    }
    .location1 {
      margin-top: 16px;
      display: flex;
      align-items: center;
      #place {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #e2e4e4;
        color: #6e7679;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 13px;
      }
      .inside-location1 {
        border-bottom: 2px solid #f1f1f2;
        p {
          margin: 0;
          padding: 0;
          line-height: 1.4;
        }
        #name {
          color: #424749;
          font-weight: 700;
        }
        #street {
          color: #6e7679;
          display: inline-block;
          width: 300px;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
          padding-bottom: 4px;
        }
      }
    }
  `;

  return (
    <Modal>
      <p id="title">Cek makanan yang tersedia di lokasi kamu!</p>
      <div className="input-div">
        <span class="material-icons">place</span>
        <input
          type="text"
          name="location"
          placeholder="Lokasi kamu"
          className="masuk"
        />
      </div>
      <div className="location1">
        <span id="place" class="material-icons">
          place
        </span>
        <div className="inside-location1">
          <p id="name">Kulina</p>
          <p id="street">Jalan Tulodong Atas 28, Senayan, Kebayoran Baru</p>
        </div>
      </div>
    </Modal>
  );
};
export default Modal;
