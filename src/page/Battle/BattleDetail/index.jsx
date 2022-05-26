import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import IconFont from "@/component/IconFont";
import LazyLoad from "react-lazyload";
import loadingImg from "@/asset/loading.gif";

const BattleDetail = () => {
  const params = useParams();
  const [battleData, setBattleData] = useState({
    playerOne: {},
    playerTwo: {},
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const playerOneData = await getUserData(params.playerOne);
      const playerTwoData = await getUserData(params.playerTwo);
      let _playerData = {
        playerOne: {},
        playerTwo: {},
      };
      _playerData.playerOne = playerOneData;
      _playerData.playerTwo = playerTwoData;
      setBattleData(_playerData);
      setLoading(false);
    };
    getData();
  }, []);

  //  根据id获取用户信息
  const getUserData = async (id) => {
    const reason = await axios({
      method: "get",
      url: `https://api.github.com/users/${id}`,
    });
    return reason.data;
  };

  const goBack = () => {
    sessionStorage.clear();
    navigate(-1);
  };

  return (
    <div className="battleDetail">
      <Spin spinning={loading}>
        <div className="battleCard">
          <div className="battleCard-item">
            <div className="battleCard-item-title">
              {battleData.playerOne.public_repos >=
              battleData.playerTwo.public_repos
                ? "Winner"
                : "Loser"}
            </div>
            <LazyLoad
              placeholder={
                <img
                  className="battleCard-item-img"
                  src={loadingImg}
                  alt="player"
                />
              }
            >
              <img
                className="battleCard-item-img"
                src={battleData.playerOne.avatar_url}
                alt="github"
              />
            </LazyLoad>
            <div className="battleCard-item-scores">
              Scores: {battleData.playerOne.public_repos}
            </div>
            <div className="battleCard-item-name">
              {battleData.playerOne.name}
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-cursor" />
              <div>{battleData.playerOne.location}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-users" />
              <div>{battleData.playerOne.followers}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-personadd" />
              <div>{battleData.playerOne.public_gists}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-code" />
              <div>{battleData.playerOne.public_repos}</div>
            </div>
          </div>
          <div className="battleCard-item">
            <div className="battleCard-item-title">
              {battleData.playerOne.public_repos <
              battleData.playerTwo.public_repos
                ? "Winner"
                : "Loser"}
            </div>
            
            <LazyLoad
              placeholder={
                <img
                  className="battleCard-item-img"
                  src={loadingImg}
                  alt="player"
                />
              }
            >
              <img
                className="battleCard-item-img"
                src={battleData.playerTwo.avatar_url}
                alt="github"
              />
            </LazyLoad>
            <div className="battleCard-item-scores">
              Scores: {battleData.playerTwo.public_repos}
            </div>
            <div className="battleCard-item-name">
              {battleData.playerTwo.name}
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-cursor" />
              <div>{battleData.playerTwo.location}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-users" />
              <div>{battleData.playerTwo.followers}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-personadd" />
              <div>{battleData.playerTwo.public_gists}</div>
            </div>
            <div className="battleCard-item-row">
              <IconFont className="row-icon" id="icon-code" />
              <div>{battleData.playerTwo.public_repos}</div>
            </div>
          </div>
        </div>
        <div className="reset-button">
          <Button onClick={goBack}>Reset</Button>
        </div>
      </Spin>
    </div>
  );
};

export default BattleDetail;
