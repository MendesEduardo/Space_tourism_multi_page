import { useState } from "react";
import styles from "./Destinations.module.scss";
import data from "../../JSON/data.json";

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <>
      <section className={styles.destinations}>
          <article className={styles.destinations__planetsImage}>
            <h1>
              01
              <span> Pick your destination</span>
            </h1>
            <img src={images.png} alt={name} />
          </article>

          <article className={styles.destinations__planetsText}>
            <ul>
              {planets.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`${
                      index === value && styles.buttonBorde
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2>
              {name}
            </h2>

            <p>
              {description}
            </p>

            <ul>
              <li>
                Avg. Distance<br></br><span>{distance}</span>
              </li>
              <li>
                Est. travel time<br></br><span>{travel}</span>
              </li>
            </ul>
          </article>
      </section>
    </>
  )
}
