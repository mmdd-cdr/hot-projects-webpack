import React, { useState, useRef } from "react";
import IconFont from "@/component/IconFont";
import { CloseCircleFilled } from "@ant-design/icons";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./index.scss";
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
      <div className={styles.renderPlayer}>
        <div className={styles.renderPlayerData}>
          <LazyLoad
            placeholder={
              <img className={styles.itemImage} src={loadingImg} alt="player" />
            }
          >
            <img
              src={`https://github.com/${player}.png?size=200`}
              alt="player"
            />
          </LazyLoad>
          <div className={styles.playerName}>{player}</div>
        </div>
        <CloseCircleFilled
          onClick={() => clearPlay(_playerType)}
          className={styles.renderPlayerIcon}
        />
      </div>
    );
  };

  return (
    <div className={styles.battle}>
      <div className={styles.battleTitle}>Instructions</div>
      <div className={styles.battleStep}>
        <div className={styles.battleStepItem}>
          <div className={styles.stepItemName}>Enter two Github</div>
          <div className={styles.stepItemIconUser}>
            <IconFont id="icon-users" />
          </div>
        </div>
        <div className={styles.battleStepItem}>
          <div className={styles.stepItemName}>Battle</div>
          <div className={styles.stepItemIconBattle}>
            <IconFont id="icon-battle" />
          </div>
        </div>
        <div className={styles.battleStepItem}>
          <div className={styles.stepItemName}>See the winner</div>
          <div className={styles.stepItemIconWinner}>
            <IconFont id="icon-winner" />
          </div>
        </div>
      </div>
      <div className={styles.battlePlayer}>
        <div className={styles.battlePlayerTitle}>Players</div>
        <div className={styles.battlePlayerContext}>
          {playerOne ? (
            renderPlayer(playerOne, playerType.playerOne)
          ) : (
            <div className={styles.battlePlayerContextItem}>
              <div className={styles.contextItemTitle}>Player One</div>
              <div className={styles.contextItemData}>
                <Input
                  onPressEnter={() => submitPlayer(playerType.playerOne)}
                  onChange={(e) => (_playerOne.current = e.target.value)}
                  className={styles.contextItemDataInput}
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
            <div className={styles.battlePlayerContextItem}>
              <div className={styles.contextItemTitle}>Player Two</div>
              <div className={styles.contextItemData}>
                <Input
                  onPressEnter={() => submitPlayer(playerType.playerTwo)}
                  onChange={(e) => (_playerTwo.current = e.target.value)}
                  className={styles.contextItemDataInput}
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
          className={styles.battleButton}
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
