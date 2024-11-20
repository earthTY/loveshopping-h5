import style from "./index.module.scss";
import { Loading } from "@nutui/nutui-react";

const GlobalLoading = () => {
  return (
    <div className={style.loadingBox}>
       <Loading direction="vertical">加载中</Loading>
    </div>
  );
};

export default GlobalLoading;
