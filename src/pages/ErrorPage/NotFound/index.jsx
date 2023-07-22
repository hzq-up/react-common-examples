import { useRouteError } from "react-router-dom";
import styles from "./index.module.scss"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className={styles.fontGrey}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}