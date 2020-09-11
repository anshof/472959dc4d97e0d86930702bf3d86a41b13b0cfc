import React from "react";
import styled from "styled-components";

const Dates = () => {
  const Dates = styled.div`
    margin-top: 8px;
    overflow: auto;
    white-space: nowrap;
    .day-one {
      display: inline-block;
      .a-day {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 4px;
        border-radius: 50%;
        color: white;
        background-color: #424749;
        .one-day {
          p {
            object-fit: cover;
            text-align: center;
          }
          #day {
            font-size: 10px;
            text-transform: uppercase;
            margin-bottom: 0;
            margin-top: 0;
          }
          #number {
            margin-bottom: 0;
            margin-top: 4px;
            font-size: 20px;
            font-weight: 700;
          }
        }
      }
    }
  `;

  return (
    <Dates>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
      <div className="day-one">
        <div className="a-day">
          <div className="one-day">
            <p id="day">kam</p>
            <p id="number">13</p>
          </div>
        </div>
      </div>
    </Dates>
  );
};
export default Dates;
