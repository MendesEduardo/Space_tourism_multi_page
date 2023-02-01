import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__divisao}>
        <h1>
          So, you want to travel to
          <br></br><span> space</span>
        </h1>
        <p>
          Let's face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of
          it. Well, sit back, and relax because we'll give you a truly out
          of this world experience!
        </p>
      </div>
      <article>
        <button>
          Explore
        </button>
      </article>
    </section>
  )
}
