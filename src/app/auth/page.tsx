import styles from "./auth-page.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const AuthPage = () => {
  return <div className={cn("container")}>AuthPage</div>;
};

export default AuthPage;
