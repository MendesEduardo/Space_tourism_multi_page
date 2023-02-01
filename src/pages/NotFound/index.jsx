import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  const toBrowse = useNavigate();

  return (
    <article className={styles.notFound}>
      <h1>Page not found :(</h1>
      <div onClick={() => toBrowse(-1)}>
        <button>
          Voltar
        </button>
      </div>
    </article>
  )
}

export default NotFound; 