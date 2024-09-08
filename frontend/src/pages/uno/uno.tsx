import React from "react";
import "./uno.css";
import "./uno-cards.css";

const Uno = () => {
  return (
    <div className="main-container">
      <div className="game-container">
        <div className="heading-container">
          <h1>UNO</h1>
        </div>
        <div className="game-table-container">
          <div className="game-table">
            <div className="card-area">
              <div className="card discard-pile black">
                <span className="inner">
                  <span className="mark">U</span>
                </span>
              </div>
              <div className="card num-2 blue">
                <span className="inner">
                  <span className="mark">2</span>
                </span>
              </div>
            </div>
            <div className="game-players-container">
              <div className="player-tag player-one">Esha</div>
            </div>
            <div className="game-players-container">
              <div className="player-tag player-two">Saood</div>
            </div>
            <div className="game-players-container">
              <div className="player-tag player-three">Ahmed</div>
            </div>
            <div className="game-players-container">
              <div className="player-tag player-four">Mahd</div>
            </div>
          </div>
        </div>
        <div className="select-rang-container">
          <button className="button-select-rang">Pick from deck</button>
          <button className="button-select-rang">Pass</button>
        </div>
      </div>
      <div className="messages-and-cards-container">
        <div className="right-side-container messages-container">
          <h1>Messages</h1>
          <div className="message-box">
            <div className="message-content-container">
              latest message comes here
            </div>
            <div className="message-content-container">
              Goodluck for the assignment!
            </div>
          </div>
        </div>
        <div className="right-side-container my-cards-container">
          <h1>My Cards</h1>
          <div className="my-cards-inner-container">
            <div className="card draw blue">
              <span className="inner">
                <span className="mark" />
              </span>
            </div>
            <div className="card num-2 red">
              <span className="inner">
                <span className="mark">2</span>
              </span>
            </div>
            <div className="card num-3 green">
              <span className="inner">
                <span className="mark">3</span>
              </span>
            </div>
            <div className="card draw-4 blue">
              <span className="inner">
                <span className="mark" />
              </span>
            </div>
            <div className="card num-6 yellow">
              <span className="inner">
                <span className="mark">6</span>
              </span>
            </div>
            <div className="card num-1 green">
              <span className="inner">
                <span className="mark">9</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uno;
