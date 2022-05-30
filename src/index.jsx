import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useRoutes, HashRouter } from "react-router-dom";
import Footer from "@/component/footer/index";
import Header from "@/component/header/index";
import "antd/dist/antd.min.css";
import styles from "./index.scss";
import "./utils/rem";

const Battle = lazy(() => import("./page/Battle/index"));
const BattleResult = lazy(() => import("./page/Battle/BattleDetail/index"));
const Popular = lazy(() => import("./page/Popular/index"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={null}>
          <Popular />
        </Suspense>
      ),
    },
    {
      path: "/battle",
      element: (
        <Suspense fallback={null}>
          <Battle />
        </Suspense>
      ),
    },

    {
      path: "/battle/result/:playerOne/:playerTwo",
      element: (
        <Suspense fallback={null}>
          <BattleResult />
        </Suspense>
      ),
    },
  ]);

  return element;
};

root.render(
  <HashRouter>
    <div className={styles.page}>
      <Header />
      <div className={styles.appRouter}>
        <AppRouter />
      </div>
      <Footer />
    </div>
  </HashRouter>
);
