import React, { useState, useEffect, useRef } from "react";
import { Spin, message } from "antd";
import axios from "axios";
import LazyLoad from "react-lazyload";
import "./index.scss";
import IconFont from "@/component/IconFont";
import loadingImg from "@/asset/loading.gif";
import useTouchBottom from "@/hooks/useTouchBottom";

const tabType = {
  All: "All",
  JavaScript: "JavaScript",
  Ruby: "Ruby",
  Java: "Java",
  CSS: "CSS",
};

const PopularPage = () => {
  const _tab = sessionStorage.getItem("popularTab");
  const [tab, setTab] = useState(_tab !== null ? _tab : tabType.All);
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(1);
  const loadingRef = useRef(false);
  const tableDataRef = useRef([]);

  useEffect(() => {
    pageRef.current = page;
    addNews();
  }, [page, tab]);

  useEffect(() => {
    tableDataRef.current = tableData;
  }, [tableData]);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  // 切换tab
  const changeTab = (tab) => {
    if (loading) {
      return;
    }
    pageRef.current = 1;
    loadingRef.current = false;
    tableDataRef.current = [];
    setTab(tab);
    sessionStorage.setItem("popularTab", tab);
    setTableData([]);
    setLoading(false);
    setPage(1);
  };

  // 添加列表
  const addNews = async function () {
    if (loading) {
      return;
    }
    setLoading(true);
    const qType = {
      All: "",
      JavaScript: "language:javascript",
      Ruby: "language:ruby",
      Java: "language:java",
      CSS: "language:css",
    };
    try {
      const reason = await axios({
        method: "get",
        url: "https://api.github.com/search/repositories",
        params: {
          page: pageRef.current,
          q: "stars:>1 " + qType[tab],
          sort: "stars",
          order: "desc",
          type: "Repositories",
        },
      });
      let _tableData = tableDataRef.current;
      _tableData = _tableData.concat(reason.data.items);
      setLoading(false);
      setTableData(_tableData);
    } catch (e) {
      message.error(e?.response?.data?.message);
    }
  };

  //渲染菜单
  const renderMenu = () => {
    let renderMenuList = [];
    for (let innertype in tabType) {
      renderMenuList.push(
        <div
          onClick={() => {
            changeTab(innertype);
          }}
          className={`popular-menu-item ${tab === innertype ? "active" : ""}`}
        >
          {innertype}
        </div>
      );
    }
    return renderMenuList;
  };

  //无限加载
  useTouchBottom(() => {
    setPage(pageRef.current + 1);
  });

  // 根据tableData渲染列表数据
  const renderTableItem = () => {
    return tableData.map((item, index) => {
      return (
        <div className="popular-content-item" key={index}>
          <div className="item-index">#{index + 1}</div>
          <LazyLoad
            className="item-image-lazy"
            placeholder={
              <img
                className="item-image"
                src={loadingImg}
                alt={item.owner.login}
              />
            }
          >
            <img
              className="item-image"
              src={item.owner.avatar_url}
              alt={item.owner.login}
            />
          </LazyLoad>
          <a
            className="item-fullName"
            href={item.clone_url}
            target="_blank"
            rel="noreferrer"
          >
            {item.full_name}
          </a>
          <div className="item-text">
            {/* 账号account */}
            <div className="item-text-child">
              <div className="icon">
                <IconFont className="icon-account" id="icon-account" />
              </div>
              <a
                className="item-name item-text-info"
                href={item.clone_url}
                target="_blank"
                rel="noreferrer"
              >
                {item.full_name}
              </a>
            </div>
            {/* 有多少start */}
            <div className="item-text-child">
              <div className="icon">
                <IconFont className="icon-start" id="icon-start" />
              </div>
              <div className="item-text-info">
                {item.stargazers_count} stars
              </div>
            </div>
            {/* 有多少fork */}
            <div className="item-text-child">
              <div className="icon">
                <IconFont className="icon-fork" id="icon-fork" />
              </div>
              <div className="item-text-info">{item.forks} forks</div>
            </div>
            {/* 有多少issue */}
            <div className="item-text-child">
              <div className="icon">
                <IconFont className="icon-issues" id="icon-issues" />
              </div>
              <div className="item-text-info">
                {item.open_issues_count} Open issues
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="popular">
      <div className="popular-menu">{renderMenu()}</div>
      <div className="popular-content">{renderTableItem()}</div>
      {
        <Spin>
          <div className="loading"></div>
        </Spin>
      }
    </div>
  );
};

export default PopularPage;
