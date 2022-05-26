import { useEffect } from "react";
import { throttle } from "lodash";

const isTouchBottom = (callBack) => {
  // 文档显示区域高度
  const showHeight = window.innerHeight;
  // 网页卷曲高度
  const scrollTopHeight =
    document.body.scrollTop || document.documentElement.scrollTop;
  // 所有内容高度
  const allHeight = document.body.scrollHeight;
  if (allHeight <= showHeight + scrollTopHeight) {
    callBack();
  }
};

const useTouchBottom = (callBack) => {
  const handleCallBack = throttle(() => {
    if (typeof callBack === "function") {
      isTouchBottom(callBack);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleCallBack);
    return () => {
      window.removeEventListener("scroll", handleCallBack);
    };
  }, []);
};

export default useTouchBottom;
