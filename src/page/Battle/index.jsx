import React, { useState, useRef } from "react";
import IconFont from "@/component/IconFont";
import { CloseCircleFilled } from "@ant-design/icons";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import loadingImg from "@/asset/loading.gif";
import LazyLoad from "react-lazyload";

const playerType = {
  playerOne: "playerOne",
  playerTwo: "playerTwo",
};

const BattlePage = () => {
  const _playerOne = useRef("");
  const _playerTwo = useRef("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/battle/result/${playerOne}/${playerTwo}`);
  };

  // 清空player
  const clearPlay = (player) => {
    if (player === playerType.playerOne) {
      setPlayerOne("");
    } else {
      setPlayerTwo("");
    }
  };

  const submitPlayer = (play) => {
    if (play === playerType.playerOne) {
      if (_playerOne.current) {
        setPlayerOne(_playerOne.current);
        _playerOne.current = "";
      } else {
        message.error("请先填写后再提交");
      }
    } else {
      if (_playerTwo.current) {
        setPlayerTwo(_playerTwo.current);
        _playerTwo.current = "";
      } else {
        message.error("请先填写后再提交");
      }
    }
  };

  // 渲染player
  const renderPlayer = (player, _playerType) => {
    return (
      <div className="render-player">
        <div className="render-player-data">
          <LazyLoad
            placeholder={
              <img className="item-image" src={loadingImg} alt="player" />
            }
          >
            <img
              src={`https://github.com/${player}.png?size=200`}
              alt="player"
            />
          </LazyLoad>
          <div className="player-name">{player}</div>
        </div>
        <CloseCircleFilled
          onClick={() => clearPlay(_playerType)}
          className="render-player-icon"
        />
      </div>
    );
  };

  return (
    <div className="battle">
      <div className="battle-title">Instructions</div>
      <div className="battle-step">
        <div className="battle-step-item">
          <div className="step-item-name">Enter two Github</div>
          <div className="step-item-icon-user">
            <IconFont id="icon-users" />
          </div>
        </div>
        <div className="battle-step-item">
          <div className="step-item-name">Battle</div>
          <div className="step-item-icon-battle">

            <IconFont id="icon-battle" />
          </div>
        </div>
        <div className="battle-step-item">
          <div className="step-item-name">See the winner</div>
          <div className="step-item-icon-winner">
            <IconFont id="icon-winner" />
          </div>
        </div>
      </div>
      <div className="battle-player">
        <div className="battle-player-title">Players</div>
        <div className="battle-player-context">
          {playerOne ? (
            renderPlayer(playerOne, playerType.playerOne)
          ) : (
            <div className="battle-player-context-item">
              <div className="context-item-title">Player One</div>
              <div className="context-item-data">
                <Input
                  onPressEnter={() => submitPlayer(playerType.playerOne)}
                  onChange={(e) => (_playerOne.current = e.target.value)}
                  className="context-item-data-input"
                  placeholder="github username"
                />
                <Button onClick={() => submitPlayer(playerType.playerOne)}>
                  Submit
                </Button>
              </div>
            </div>
          )}

          {playerTwo ? (
            renderPlayer(playerTwo, playerType.playerTwo)
          ) : (
            <div className="battle-player-context-item">
              <div className="context-item-title">Player Two</div>
              <div className="context-item-data">
                <Input
                  onPressEnter={() => submitPlayer(playerType.playerTwo)}
                  onChange={(e) => (_playerTwo.current = e.target.value)}
                  className="context-item-data-input"
                  placeholder="github username"
                />
                <Button onClick={() => submitPlayer(playerType.playerTwo)}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
        <div
          className="battle-button"
          style={playerOne && playerTwo ? {} : { visibility: "hidden" }}
        >
          <Button type="primary" onClick={() => handleSubmit()}>
            Battle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;
