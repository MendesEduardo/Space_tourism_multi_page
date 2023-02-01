import { useState } from "react";
import styles from "./Crew.module.scss";
import data from "../../JSON/data.json";

export default function Crew() {
  const [crew] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crew[value]

  return (
    <>
      <section className={styles.crew}>
        <article className={styles.crew__crewText}>
          <h1>
            02<span> Meet your crew</span>
          </h1>

          <h3>
            {role}
          </h3>

          <h2>
            {name}
          </h2>

          <p>{bio}</p>

          <ul>
            {crew.map((item, index) => (
              <li key={index}>
                <button onClick={() => setValue(index)} className={`${index === value && styles.buttonActive}`}></button>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <img src={images.png} alt={name} />
        </article>
      </section>
    </>
  )
}
