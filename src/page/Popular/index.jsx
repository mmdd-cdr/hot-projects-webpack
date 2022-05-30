import React, { useState, useEffect, useRef } from "react";
import { Spin, message } from "antd";
import axios from "axios";
import LazyLoad from "react-lazyload";
import styles from "./index.scss";
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
          className={`${styles.popularMenuItem} ${
            tab === innertype && styles.active
          }`}
          key={innertype}
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
        <div className={styles.popularContentItem} key={index}>
          <div className={styles.itemIndex}>#{index + 1}</div>
          <LazyLoad
            className={styles.itemImageLazy}
            placeholder={
              <img
                className={styles.itemImage}
                src={loadingImg}
                alt={item.owner.login}
              />
            }
          >
            <img
              className={styles.itemImage}
              src={item.owner.avatar_url}
              alt={item.owner.login}
            />
          </LazyLoad>
          <a
            className={styles.itemFullName}
            href={item.clone_url}
            target="_blank"
            rel="noreferrer"
          >
            {item.full_name}
          </a>
          <div className={styles.itemText}>
            {/* 账号account */}
            <div className={styles.itemTextChild}>
              <div className={styles.icon}>
                <IconFont className={styles.iconAccount} id="icon-account" />
              </div>
              <a
                className={`${styles.itemName} ${styles.itemTextInfo}`}
                href={item.clone_url}
                target="_blank"
                rel="noreferrer"
              >
                {item.full_name}
              </a>
            </div>
            {/* 有多少start */}
            <div className={styles.itemTextChild}>
              <div className={styles.icon}>
                <IconFont className={styles.iconStart} id="icon-start" />
              </div>
              <div className={styles.itemTextInfo}>
                {item.stargazers_count} stars
              </div>
            </div>
            {/* 有多少fork */}
            <div className={styles.itemTextChild}>
              <div className={styles.icon}>
                <IconFont className={styles.iconFork} id="icon-fork" />
              </div>
              <div className={styles.itemTextInfo}>{item.forks} forks</div>
            </div>
            {/* 有多少issue */}
            <div className={styles.itemTextChild}>
              <div className={styles.icon}>
                <IconFont className={styles.iconIssues} id="icon-issues" />
              </div>
              <div className={styles.itemTextInfo}>
                {item.open_issues_count} Open issues
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.popular}>
      <div className={styles.popularMenu}>{renderMenu()}</div>
      <div className={styles.popularContent}>{renderTableItem()}</div>
      {
        <Spin>
          <div className={styles.loading}></div>
        </Spin>
      }
    </div>
  );
};

export default PopularPage;
