import React from "react";
import styled from "styled-components";

const Dates = () => {
  const Dates = styled.div`
    padding: 4px 0;
    overflow: auto;
    white-space: nowrap;
    position: relative;
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
    .day-two {
      display: inline-block;
      .days {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 4px;
        border-radius: 50%;
        color: #424749;
        background-color: white;
        .two-day {
          p {
            object-fit: cover;
            text-align: center;
          }
          #day2 {
            font-size: 10px;
            text-transform: uppercase;
            margin-bottom: 0;
            margin-top: 0;
          }
          #number2 {
            margin-bottom: 0;
            margin-top: 4px;
            font-size: 20px;
            font-weight: 700;
          }
        }
      }
    }
    .day-three {
      display: inline-block;
      .dayss {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 4px;
        border-radius: 50%;
        color: #e2e4e4;
        background-color: white;
        .three-day {
          p {
            object-fit: cover;
            text-align: center;
          }
          #day3 {
            font-size: 10px;
            text-transform: uppercase;
            margin-bottom: 0;
            margin-top: 0;
          }
          #number3 {
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
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">sen</p>
            <p id="number2">10</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">sel</p>
            <p id="number2">11</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">rab</p>
            <p id="number2">12</p>
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
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">jum</p>
            <p id="number2">14</p>
          </div>
        </div>
      </div>
      <div className="day-three">
        <div className="dayss">
          <div className="three-day">
            <p id="day3">sab</p>
            <p id="number3">15</p>
          </div>
        </div>
      </div>
      <div className="day-three">
        <div className="dayss">
          <div className="three-day">
            <p id="day3">min</p>
            <p id="number3">16</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">sen</p>
            <p id="number2">17</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">sel</p>
            <p id="number2">18</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">rab</p>
            <p id="number2">18</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">kam</p>
            <p id="number2">19</p>
          </div>
        </div>
      </div>
      <div className="day-two">
        <div className="days">
          <div className="two-day">
            <p id="day2">jum</p>
            <p id="number2">21</p>
          </div>
        </div>
      </div>
      <div className="day-three">
        <div className="dayss">
          <div className="three-day">
            <p id="day3">sab</p>
            <p id="number3">22</p>
          </div>
        </div>
      </div>
      <div className="day-three">
        <div className="dayss">
          <div className="three-day">
            <p id="day3">min</p>
            <p id="number3">23</p>
          </div>
        </div>
      </div>
    </Dates>
  );
};
export default Dates;
